import { useEffect, useState } from "react";

import {
  WeeklySection,
  WeeklyHeader,
  WeeklyTitle,
  WeeklyCity,
  CloseButton,
  ForecastList,
  ForecastRow,
  ForecastDate,
  ForecastWeather,
  WeatherIcon,
  Temperature,
  Description,
  Loading,
  ErrorMessage,
} from "./WeeklyForecast.styled";

const API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY;

export default function WeeklyForecast({
  city,
  onClose,
}) {
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadWeeklyForecast = async () => {
      try {
        setLoading(true);
        setError(false);
        const oneCallResponse = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`
        );

        if (oneCallResponse.ok) {
          const data =
            await oneCallResponse.json();

          if (
            Array.isArray(data.daily) &&
            data.daily.length > 0
          ) {
            const days = data.daily
              .slice(0, 8)
              .map((item) => ({
                date: new Date(
                  item.dt * 1000
                ),

                icon:
                  item.weather?.[0]?.icon,

                description:
                  item.weather?.[0]
                    ?.description || "",

                maxTemp: Math.round(
                  item.temp.max
                ),

                minTemp: Math.round(
                  item.temp.min
                ),
              }));

            setForecast(days);

            return;
          }
        }

        // Если One Call недоступен,
        // используем обычный forecast
        const forecastResponse =
          await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric`
          );

        if (!forecastResponse.ok) {
          throw new Error(
            `HTTP error: ${forecastResponse.status}`
          );
        }

        const data =
          await forecastResponse.json();

        if (
          !Array.isArray(data.list) ||
          data.list.length === 0
        ) {
          throw new Error(
            "Forecast data is unavailable"
          );
        }

        // Группируем прогнозы по дням
        const groupedDays = {};

        data.list.forEach((item) => {
          const date = new Date(
            item.dt * 1000
          );

          const key =
            date.toLocaleDateString(
              "en-CA"
            );

          if (!groupedDays[key]) {
            groupedDays[key] = [];
          }

          groupedDays[key].push(item);
        });

        const days = Object.values(
          groupedDays
        )
          .slice(0, 5)
          .map((items) => {
            const temperatures =
              items.map(
                (item) => item.main.temp
              );

            const middle =
              items[
                Math.floor(
                  items.length / 2
                )
              ];

            return {
              date: new Date(
                middle.dt * 1000
              ),

              icon:
                middle.weather?.[0]?.icon,

              description:
                middle.weather?.[0]
                  ?.description || "",

              maxTemp: Math.round(
                Math.max(...temperatures)
              ),

              minTemp: Math.round(
                Math.min(...temperatures)
              ),
            };
          });

        setForecast(days);
      } catch (error) {
        console.error(
          "Ошибка загрузки недельного прогноза:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadWeeklyForecast();
  }, [city]);

  // Полное название дня
  const formatDate = (date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

  return (
    <WeeklySection>
      <WeeklyHeader>
        <div>
          <WeeklyTitle>
            5-day forecast
          </WeeklyTitle>

          <WeeklyCity>
            {city.name}
          </WeeklyCity>
        </div>

        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close weekly forecast"
        >
          <span>×</span>
        </CloseButton>
      </WeeklyHeader>

      {loading && (
        <Loading>
          Loading...
        </Loading>
      )}

      {error && !loading && (
        <ErrorMessage>
          Failed to load forecast.
        </ErrorMessage>
      )}

      {!loading &&
        !error &&
        forecast.length > 0 && (
          <ForecastList>
            {forecast.map(
              (day, index) => (
                <ForecastRow
                  key={`${day.date.getTime()}-${index}`}
                >
                  <ForecastDate>
                    {formatDate(
                      day.date
                    )}
                  </ForecastDate>

                  <ForecastWeather>
                    <WeatherIcon
                      src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                      alt={
                        day.description
                      }
                    />

                    <Temperature>
                      {day.maxTemp}°
                      /
                      {day.minTemp}°C
                    </Temperature>
                  </ForecastWeather>

                  <Description>
                    {day.description}
                  </Description>
                </ForecastRow>
              )
            )}
          </ForecastList>
        )}
    </WeeklySection>
  );
}