import { useEffect, useRef, useState } from "react";

import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from "chart.js";

import {
  ForecastSection,
  ForecastHeader,
  ForecastTitle,
  ForecastCity,
  CloseButton,
  ChartWrapper,
  ForecastLoading,
  ForecastError,
} from "./HourlyForecast.styled";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

const API_KEY =
  import.meta.env.VITE_OPENWEATHER_API_KEY;

const hexToRgba = (hex, alpha = 0.08) => {
  if (!hex) {
    return `rgba(255, 179, 108, ${alpha})`;
  }

  if (
    hex.startsWith("rgb(")
  ) {
    return hex.replace(
      "rgb(",
      "rgba("
    ).replace(
      ")",
      `, ${alpha})`
    );
  }

  if (
    hex.startsWith("rgba(")
  ) {
    return hex.replace(
      /[\d.]+\)$/g,
      `${alpha})`
    );
  }

  let value = hex.replace("#", "");

  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (value.length !== 6) {
    return `rgba(255, 179, 108, ${alpha})`;
  }

  const r = parseInt(
    value.substring(0, 2),
    16
  );

  const g = parseInt(
    value.substring(2, 4),
    16
  );

  const b = parseInt(
    value.substring(4, 6),
    16
  );

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function HourlyForecast({
  city,
  unit = "C",
  onClose,
  darkMode = false,
  chartColor = "#ffb36c",
}) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadForecast = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status}`
          );
        }

        const data = await response.json();

        if (
          !data.list ||
          !Array.isArray(data.list)
        ) {
          throw new Error(
            "Forecast data is unavailable"
          );
        }

        setForecast(data.list.slice(0, 16));
      } catch (error) {
        console.error(
          "Ошибка загрузки почасового прогноза:",
          error
        );

        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadForecast();
  }, [city]);

  useEffect(() => {
    if (
      loading ||
      error ||
      forecast.length === 0 ||
      !canvasRef.current
    ) {
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    const labels = forecast.map((item) => {
      const date = new Date(
        item.dt * 1000
      );

      return date.toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
          hour12: true,
        }
      );
    });

    const temperatures = forecast.map(
      (item) => {
        const temperature =
          item.main.temp;

        if (unit === "F") {
          return Math.round(
            (temperature * 9) / 5 + 32
          );
        }

        return Math.round(temperature);
      }
    );

    /*
     * Эти цвета зависят от darkMode.
     * Они относятся ТОЛЬКО к интерфейсу графика.
     */
    const textColor = darkMode
      ? "#ffffff"
      : "#111111";

    const gridColor = darkMode
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(17, 17, 17, 0.08)";

    /*
     * А ЭТИ цвета всегда принадлежат пользователю.
     * darkMode здесь вообще не участвует.
     */
    const lineColor = chartColor;

    const fillColor =
      hexToRgba(chartColor, 0.08);

    const ctx =
      canvasRef.current.getContext(
        "2d"
      );

    chartRef.current = new Chart(ctx, {
      type: "line",

      data: {
        labels,

        datasets: [
          {
            data: temperatures,

            /*
             * Линия = цвет пользователя
             */
            borderColor: lineColor,

            borderWidth: 2,

            /*
             * Заливка = цвет пользователя
             */
            backgroundColor: fillColor,

            /*
             * Точки = цвет пользователя
             */
            pointBackgroundColor:
              lineColor,

            pointBorderColor:
              lineColor,

            pointRadius: 3,
            pointHoverRadius: 5,

            tension: 0.4,
            fill: true,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        animation: {
          duration: 700,
          easing: "easeOutQuart",
        },

        interaction: {
          intersect: false,
          mode: "index",
        },

        plugins: {
          legend: {
            display: false,
          },

          tooltip: {
            enabled: true,
            displayColors: false,

            backgroundColor: darkMode
              ? "#ffffff"
              : "#111111",

            titleColor: darkMode
              ? "#111111"
              : "#ffffff",

            bodyColor: darkMode
              ? "#111111"
              : "#ffffff",

            padding: 10,
            cornerRadius: 8,

            callbacks: {
              title: (items) => {
                return (
                  items[0]?.label ||
                  ""
                );
              },

              label: (context) => {
                return `${context.raw}°${unit}`;
              },
            },
          },
        },

        scales: {
          x: {
            grid: {
              display: false,
            },

            border: {
              display: false,
            },

            /*
             * Время = darkMode
             */
            ticks: {
              color: textColor,

              font: {
                size: 9,
              },

              maxRotation: 0,
              autoSkip: false,
            },
          },

          y: {
            grid: {
              /*
               * Сетка = darkMode
               */
              color: gridColor,
            },

            border: {
              display: false,
            },

            /*
             * Цифры = darkMode
             */
            ticks: {
              color: textColor,

              font: {
                size: 9,
              },

              callback: (value) =>
                `${value}°${unit}`,
            },
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [
    forecast,
    loading,
    error,
    unit,
    darkMode,
    chartColor,
  ]);

  return (
    <ForecastSection>
      <ForecastHeader>
        <div>
          <ForecastTitle>
            Hourly forecast
          </ForecastTitle>

          <ForecastCity>
            {city.name}
          </ForecastCity>
        </div>

        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close hourly forecast"
        >
          <span>×</span>
        </CloseButton>
      </ForecastHeader>

      <ChartWrapper>
        {loading && (
          <ForecastLoading>
            Loading...
          </ForecastLoading>
        )}

        {error && !loading && (
          <ForecastError>
            Failed to load forecast.
          </ForecastError>
        )}

        {!loading &&
          !error &&
          forecast.length > 0 && (
            <canvas ref={canvasRef} />
          )}
      </ChartWrapper>
    </ForecastSection>
  );
}