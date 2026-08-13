import { useEffect, useState } from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";

import heroBg from "../../assets/weather.png";

import {
  HeroWrapper,
  HeroBackground,
  HeroContent,
  Title,
  Info,
  Description,
  Divider,
  DateBlock,
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Suggestions,
  Suggestion,
  SuggestionText,
  SuggestionCity,
  SuggestionCountry,
  SuggestionLoading,
} from "./Hero.styled";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function Hero({ onCityAdd }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] =
    useState(false);

  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const value = query.trim();

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoadingSuggestions(true);

        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
            value
          )}&limit=5&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status}`
          );
        }

        const data = await response.json();

        setSuggestions(data);
      } catch (error) {
        console.error(
          "Помилка отримання підказок:",
          error
        );

        setSuggestions([]);
      } finally {
        setLoadingSuggestions(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query]);

  const getLocation = async (value) => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
        value
      )}&limit=1&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error: ${response.status}`
      );
    }

    const data = await response.json();

    if (data.length === 0) {
      throw new Error("Місто не знайдено");
    }

    return data[0];
  };

  const searchLocation = async (selectedLocation = null) => {
    const value = selectedLocation
      ? selectedLocation.name
      : query.trim();

    if (!value) {
      return;
    }

    try {
      const location =
        selectedLocation || (await getLocation(value));

      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) {
        throw new Error(
          `Weather HTTP error: ${weatherResponse.status}`
        );
      }

      const weather = await weatherResponse.json();

      const cityData = {
        id: `${location.lat}-${location.lon}`,
        name: location.name,
        country: location.country,
        temperature: weather.main.temp,
        icon: weather.weather[0].icon,
        description: weather.weather[0].description,
        timezone: weather.timezone,
        latitude: location.lat,
        longitude: location.lon,
      };

      if (onCityAdd) {
        onCityAdd(cityData);
      }

      setQuery("");
      setSuggestions([]);
    } catch (error) {
      console.error("Помилка пошуку:", error);
    }
  };

  const handleSuggestionClick = (location) => {
    setQuery(location.name);
    setSuggestions([]);

    searchLocation(location);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    searchLocation();
  };

  const month = currentTime.toLocaleString("en-US", {
    month: "long",
  });

  const year = currentTime.getFullYear();

  const weekday = currentTime.toLocaleString("en-US", {
    weekday: "long",
  });

  const day = currentTime.getDate();

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const hours = String(
    currentTime.getHours()
  ).padStart(2, "0");

  const minutes = String(
    currentTime.getMinutes()
  ).padStart(2, "0");

  return (
    <HeroWrapper>
      <HeroBackground
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <HeroContent>
        <Title>Weather dashboard</Title>

        <Info>
          <Description>
            Create your personal list of
            <br />
            favorite cities and always be
            <br />
            aware of the weather.
          </Description>

          <Divider />

          <DateBlock>
            {month} {year}
            <br />
            {weekday}, {day}
            <sup>{getDaySuffix(day)}</sup>
            <br />
            {hours}:{minutes}
          </DateBlock>
        </Info>

        <SearchContainer>
          <SearchWrapper onSubmit={handleSubmit}>
            <SearchInput
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search location..."
            />

            <SearchButton type="submit">
              <FiSearch />
            </SearchButton>
          </SearchWrapper>

          {query.trim().length >= 2 && (
            <Suggestions>
              {loadingSuggestions ? (
                <SuggestionLoading>
                  Searching...
                </SuggestionLoading>
              ) : suggestions.length > 0 ? (
                suggestions.map((location, index) => (
                  <Suggestion
                    key={`${location.lat}-${location.lon}-${index}`}
                    type="button"
                    onClick={() =>
                      handleSuggestionClick(location)
                    }
                  >
                    <FiMapPin />

                    <SuggestionText>
                      <SuggestionCity>
                        {location.name}
                      </SuggestionCity>

                      <SuggestionCountry>
                        {location.state
                          ? `${location.state}, `
                          : ""}
                        {location.country}
                      </SuggestionCountry>
                    </SuggestionText>
                  </Suggestion>
                ))
              ) : (
                <SuggestionLoading>
                  Location not found
                </SuggestionLoading>
              )}
            </Suggestions>
          )}
        </SearchContainer>
      </HeroContent>
    </HeroWrapper>
  );
}