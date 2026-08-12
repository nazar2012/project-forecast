import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

import cold from "./photos/ice.png";
import hot from "./photos/hot.png";
import ideal from "./photos/ideal.png";
import humidity from "./photos/humidity.png";
import pressure from "./photos/pressure.png";
import wind from "./photos/wind.png";
import visibility from "./photos/visibility.png";

import {
  MoreWeatherSection,
  MoreWeatherHeader,
  MoreWeatherTitle,
  MoreWeatherCity,
  CloseButton,
  MoreWeatherGrid,
  MoreWeatherCard,
  MoreWeatherLabel,
  MoreWeatherValue,
  MoreWeatherIcon,
  Loading,
  ErrorMessage,
} from "./MoreWeather.styled";

const API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function MoreWeather({
  city,
  onClose,
}) {
  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        setError(false);

        const weatherResponse =
          await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric`
          );

        if (!weatherResponse.ok) {
          throw new Error(
            `HTTP error: ${weatherResponse.status}`
          );
        }

        const currentWeather =
          await weatherResponse.json();

        const forecastResponse =
          await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric`
          );

        if (!forecastResponse.ok) {
          throw new Error(
            `HTTP error: ${forecastResponse.status}`
          );
        }

        const forecast =
          await forecastResponse.json();

        const today = new Date();

        const todayForecast =
          forecast.list.filter((item) => {
            const date = new Date(
              item.dt * 1000
            );

            return (
              date.getDate() ===
                today.getDate() &&
              date.getMonth() ===
                today.getMonth() &&
              date.getFullYear() ===
                today.getFullYear()
            );
          });

        const temperatures =
          todayForecast.map(
            (item) => item.main.temp
          );

        const minTemp =
          temperatures.length > 0
            ? Math.min(...temperatures)
            : currentWeather.main.temp_min;

        const maxTemp =
          temperatures.length > 0
            ? Math.max(...temperatures)
            : currentWeather.main.temp_max;

        setWeather({
          feelsLike:
            currentWeather.main.feels_like,

          minTemp,

          maxTemp,

          humidity:
            currentWeather.main.humidity,

          pressure:
            currentWeather.main.pressure,

          windSpeed:
            currentWeather.wind.speed,

          visibility:
            currentWeather.visibility,
        });
      } catch (error) {
        console.error(
          "Ошибка загрузки подробной информации:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, [city]);

  const getTemperatureIcon = (
    temperature
  ) => {
    if (temperature < 16) {
      return cold;
    }

    if (temperature <= 19) {
      return ideal;
    }

    return hot;
  };

  return (
    <MoreWeatherSection>
      <MoreWeatherHeader>
        <div>
          <MoreWeatherTitle>
            Weather details
          </MoreWeatherTitle>

          <MoreWeatherCity>
            {city.name}
          </MoreWeatherCity>
        </div>

        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close weather details"
        >
          <FiX />
        </CloseButton>
      </MoreWeatherHeader>

      {loading && (
        <Loading>
          Loading...
        </Loading>
      )}

      {error && !loading && (
        <ErrorMessage>
          Failed to load weather details.
        </ErrorMessage>
      )}

      {weather &&
        !loading &&
        !error && (
          <MoreWeatherGrid>
            <MoreWeatherCard>
              <MoreWeatherLabel>
                Feels like
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.feelsLike.toFixed(1)}
                °C
              </MoreWeatherValue>

              <MoreWeatherIcon>
                <img
                  src={getTemperatureIcon(
                    weather.feelsLike
                  )}
                  alt="Temperature"
                />
              </MoreWeatherIcon>
            </MoreWeatherCard>

            <MoreWeatherCard>
              <MoreWeatherLabel>
                Min °C
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.minTemp.toFixed(1)}
                °C
              </MoreWeatherValue>

              <MoreWeatherLabel>
                Max °C
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.maxTemp.toFixed(1)}
                °C
              </MoreWeatherValue>
            </MoreWeatherCard>

            <MoreWeatherCard>
              <MoreWeatherLabel>
                Humidity
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.humidity}%
              </MoreWeatherValue>

              <MoreWeatherIcon>
                <img
                  src={humidity}
                  alt="Humidity"
                />
              </MoreWeatherIcon>
            </MoreWeatherCard>

            <MoreWeatherCard>
              <MoreWeatherLabel>
                Pressure
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.pressure} Pa
              </MoreWeatherValue>

              <MoreWeatherIcon>
                <img
                  src={pressure}
                  alt="Pressure"
                />
              </MoreWeatherIcon>
            </MoreWeatherCard>

            <MoreWeatherCard>
              <MoreWeatherLabel>
                Wind speed
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.windSpeed.toFixed(2)}
                {" "}
                m/s
              </MoreWeatherValue>

              <MoreWeatherIcon>
                <img
                  src={wind}
                  alt="Wind speed"
                />
              </MoreWeatherIcon>
            </MoreWeatherCard>

            <MoreWeatherCard>
              <MoreWeatherLabel>
                Visibility
              </MoreWeatherLabel>

              <MoreWeatherValue>
                {weather.visibility >=
                10000
                  ? "Unlimited"
                  : `${(
                      weather.visibility /
                      1000
                    ).toFixed(1)} km`}
              </MoreWeatherValue>

              <MoreWeatherIcon>
                <img
                  src={visibility}
                  alt="Visibility"
                />
              </MoreWeatherIcon>
            </MoreWeatherCard>
          </MoreWeatherGrid>
        )}
    </MoreWeatherSection>
  );
}