import { useEffect, useState } from "react";
import {
  FiRefreshCw,
  FiHeart,
  FiTrash2,
} from "react-icons/fi";

import HourlyForecast from "../HourlyForecast/HourlyForecast";
import WeeklyForecast from "../WeeklyForecast/WeeklyForecast";
import MoreWeather from "../MoreWeather/MoreWeather";
import WeatherStatus from "../WeatherStatus/WeatherStatus";

import clearGif from "./photos/clear.gif";
import cloudsGif from "./photos/clouds.gif";
import rainGif from "./photos/rain.gif";
import snowGif from "./photos/snow.gif";
import stormGif from "./photos/storm.gif";
import fogGif from "./photos/fog.gif";

import {
  WeatherSection,
  WeatherListWrapper,
  WeatherCard,
  WeatherBackground,
  WeatherOverlay,
  WeatherGlass,
  WeatherCardContent,
  CardTop,
  City,
  Country,
  Time,
  ForecastButtons,
  ForecastButton,
  DateInfo,
  DateDivider,
  WeatherIcon,
  Temperature,
  CardActions,
  ActionButton,
  FavoriteButton,
  MoreButton,
  DeleteButton,
  UnitButton,
  EmptyState,
  EmptyTitle,
  EmptyText,
  EmptyButton,
} from "./WeatherList.styled";

export default function WeatherList({
  cities,
  favorites,
  onRefresh,
  onFavorite,
  onDelete,
  darkMode,
  userColor,
}) {
  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  const [selectedCity, setSelectedCity] =
    useState(null);

  const [selectedWeeklyCity, setSelectedWeeklyCity] =
    useState(null);

  const [selectedMoreCity, setSelectedMoreCity] =
    useState(null);

  const [citiesUnit, setCitiesUnit] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getWeatherBackground = (description = "") => {
    const text = description.toLowerCase();

    if (text.includes("thunderstorm")) {
      return stormGif;
    }

    if (
      text.includes("snow") ||
      text.includes("sleet")
    ) {
      return snowGif;
    }

    if (
      text.includes("rain") ||
      text.includes("drizzle")
    ) {
      return rainGif;
    }

    if (
      text.includes("mist") ||
      text.includes("fog") ||
      text.includes("haze")
    ) {
      return fogGif;
    }

    if (
      text.includes("cloud") ||
      text.includes("overcast")
    ) {
      return cloudsGif;
    }

    return clearGif;
  };

  const getCityDate = (timezone) => {
    const utcTime =
      currentTime.getTime() +
      currentTime.getTimezoneOffset() * 60000;

    return new Date(
      utcTime + timezone * 1000
    );
  };

  const formatTime = (date) =>
    date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const formatDate = (date) => {
    const day = String(
      date.getDate()
    ).padStart(2, "0");

    const month = String(
      date.getMonth() + 1
    ).padStart(2, "0");

    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatWeekday = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "long",
    });

  const toggleTemperatureUnit = (cityId) => {
    setCitiesUnit((prev) => ({
      ...prev,
      [cityId]:
        prev[cityId] === "F"
          ? "C"
          : "F",
    }));
  };

  const getCityUnit = (cityId) => {
    return citiesUnit[cityId] || "C";
  };

  const convertTemperature = (
    temperature,
    unit
  ) => {
    if (unit === "F") {
      return Math.round(
        (temperature * 9) / 5 + 32
      );
    }

    return Math.round(temperature);
  };

  const handleAddCityClick = () => {
    const hero =
      document.getElementById("about");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      const input =
        document.getElementById(
          "weather-search-input"
        );

      if (input) {
        input.focus();
      }
    }, 500);
  };

  if (cities.length === 0) {
    return (
      <WeatherSection id="menu">
        <EmptyState>
          <EmptyTitle>
            No cities yet
          </EmptyTitle>

          <EmptyText>
            Add a city to see the weather here
          </EmptyText>

          <EmptyButton
            type="button"
            $accent={userColor}
            onClick={handleAddCityClick}
          >
            Search for a city
          </EmptyButton>
        </EmptyState>
      </WeatherSection>
    );
  }

  return (
    <WeatherSection id="menu">
      <WeatherListWrapper>
        {cities.map((city) => {
          const cityDate = getCityDate(
            city.timezone
          );

          const unit = getCityUnit(city.id);

          const isFavorite = favorites.some(
            (favorite) =>
              favorite.id === city.id
          );

          const background =
            getWeatherBackground(
              city.description
            );

          return (
            <WeatherCard
              key={city.id}
              $accent={userColor}
              $dark={darkMode}
            >
              <WeatherBackground
                src={background}
                alt=""
              />

              <WeatherOverlay />

              <WeatherGlass
                $accent={userColor}
                $dark={darkMode}
              />

              <WeatherCardContent>
                <CardTop>
                  <City>
                    {city.name}
                  </City>

                  <Country>
                    {city.country}
                  </Country>
                </CardTop>

                <Time>
                  {formatTime(cityDate)}
                </Time>

                <ForecastButtons>
                  <ForecastButton
                    type="button"
                    $accent={userColor}
                    onClick={() => {
                      setSelectedCity(city);
                      setSelectedWeeklyCity(null);
                      setSelectedMoreCity(null);
                    }}
                  >
                    Hourly forecast
                  </ForecastButton>

                  <ForecastButton
                    type="button"
                    $accent={userColor}
                    onClick={() => {
                      setSelectedWeeklyCity(city);
                      setSelectedCity(null);
                      setSelectedMoreCity(null);
                    }}
                  >
                    Weekly forecast
                  </ForecastButton>
                </ForecastButtons>

                <DateInfo>
                  <span>
                    {formatDate(cityDate)}
                  </span>

                  <DateDivider />

                  <span>
                    {formatWeekday(cityDate)}
                  </span>
                </DateInfo>

                <WeatherIcon
                  src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                  alt={city.description}
                />

                <Temperature>
                  {convertTemperature(
                    city.temperature,
                    unit
                  )}
                  °{unit}
                </Temperature>

                <WeatherStatus
                  description={city.description}
                />

                <CardActions>
                  <ActionButton
                    type="button"
                    onClick={() =>
                      onRefresh(city)
                    }
                  >
                    <FiRefreshCw />
                  </ActionButton>

                  <FavoriteButton
                    type="button"
                    $active={isFavorite}
                    $accent={userColor}
                    onClick={() =>
                      onFavorite(city.id)
                    }
                  >
                    <FiHeart />
                  </FavoriteButton>

                  <UnitButton
                    type="button"
                    $accent={userColor}
                    onClick={() =>
                      toggleTemperatureUnit(
                        city.id
                      )
                    }
                    title="Change temperature unit"
                  >
                    °{unit}
                  </UnitButton>

                  <MoreButton
                    type="button"
                    $accent={userColor}
                    onClick={() => {
                      setSelectedMoreCity(
                        selectedMoreCity?.id ===
                          city.id
                          ? null
                          : city
                      );

                      setSelectedCity(null);
                      setSelectedWeeklyCity(null);
                    }}
                  >
                    See more
                  </MoreButton>

                  <DeleteButton
                    type="button"
                    onClick={() =>
                      onDelete(city.id)
                    }
                  >
                    <FiTrash2 />
                  </DeleteButton>
                </CardActions>
              </WeatherCardContent>
            </WeatherCard>
          );
        })}
      </WeatherListWrapper>

      {selectedCity && (
        <HourlyForecast
          city={selectedCity}
          unit={getCityUnit(
            selectedCity.id
          )}
          darkMode={darkMode}
          chartColor={userColor}
          onClose={() =>
            setSelectedCity(null)
          }
        />
      )}

      {selectedWeeklyCity && (
        <WeeklyForecast
          city={selectedWeeklyCity}
          unit={getCityUnit(
            selectedWeeklyCity.id
          )}
          darkMode={darkMode}
          accentColor={userColor}
          onClose={() =>
            setSelectedWeeklyCity(null)
          }
        />
      )}

      {selectedMoreCity && (
        <MoreWeather
          city={selectedMoreCity}
          unit={getCityUnit(
            selectedMoreCity.id
          )}
          onClose={() =>
            setSelectedMoreCity(null)
          }
        />
      )}
    </WeatherSection>
  );
}