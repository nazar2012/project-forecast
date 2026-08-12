import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

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
  SearchWrapper,
  SearchInput,
  SearchButton,
} from "./Hero.styled";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

// console.log("API KEY exists:", Boolean(API_KEY));

export default function Hero({ onCityAdd }) {
  const [query, setQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const searchLocation = async () => {
    const value = query.trim();
    if (!value) {
      console.log("Введіть назву місста для пошуку");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
          value
        )}&limit=1&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      if (data.length === 0) {
        console.log("Місто не знайдено");
        return;
      }

      const location = data[0];
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
        name: value,
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
    } catch (error) {
      console.error("Помилка пошуку:", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchLocation();
  };

  const currentDate = new Date();
  const month = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  const year = currentDate.getFullYear();

  const weekday = currentDate.toLocaleString("en-US", {
    weekday: "long",
  });

  const day = currentDate.getDate();

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

  const hours = String(currentTime.getHours()).padStart(
    2,
    "0"
  );

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
      </HeroContent>
    </HeroWrapper>
  );
}