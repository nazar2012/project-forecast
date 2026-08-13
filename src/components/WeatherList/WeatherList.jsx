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
} from "./WeatherList.styled";

export default function WeatherList({
  cities,
  favorites,
  onRefresh,
  onFavorite,
  onDelete,
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

  // C / F отдельно для каждого города
  const [citiesUnit, setCitiesUnit] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // GIF в зависимости от погоды
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

  // Переключение C / F
  const toggleTemperatureUnit = (cityId) => {
    setCitiesUnit((prev) => ({
      ...prev,
      [cityId]:
        prev[cityId] === "F"
          ? "C"
          : "F",
    }));
  };

  // Получаем единицу температуры города
  const getCityUnit = (cityId) => {
    return citiesUnit[cityId] || "C";
  };

  // Конвертация температуры
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

  if (cities.length === 0) {
    return null;
  }

  return (
    <WeatherSection>
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
            <WeatherCard key={city.id}>
              {/* GIF */}
              <WeatherBackground
                src={background}
                alt=""
              />

              {/* затемнение */}
              <WeatherOverlay />

              {/* весь контент карточки */}
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
                    onClick={() =>
                      onFavorite(city.id)
                    }
                  >
                    <FiHeart />
                  </FavoriteButton>

                  {/* C / F */}
                  <UnitButton
                    type="button"
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

      {/* Почасовой прогноз */}
      {selectedCity && (
        <HourlyForecast
          city={selectedCity}
          unit={getCityUnit(
            selectedCity.id
          )}
          onClose={() =>
            setSelectedCity(null)
          }
        />
      )}

      {/* Прогноз на 5 дней */}
      {selectedWeeklyCity && (
        <WeeklyForecast
          city={selectedWeeklyCity}
          unit={getCityUnit(
            selectedWeeklyCity.id
          )}
          onClose={() =>
            setSelectedWeeklyCity(null)
          }
        />
      )}

      {/* Подробнее о погоде */}
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