import { useEffect } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
    WeatherMapSection,
    WeatherMapContainer,
    WeatherMapHeader,
    WeatherMapTitle,
    WeatherMapSubtitle,
    MapBadge,
    MapWrapper,
    MapTopControls,
    MapControl,
    MapCitiesButton,
    PopupContent,
    PopupHeader,
    PopupCity,
    PopupCountry,
    PopupWeather,
    PopupWeatherIcon,
    PopupTemperature,
    PopupDescription,
    PopupDetails,
    PopupDetail,
    EmptyMessage,
} from "./WeatherMap.styled";

const createWeatherIcon = (
    city,
    darkMode,
    accentColor
) => {
    const temperature = Math.round(
        city.temperature
    );

    return L.divIcon({
        className:
            "weather-marker-wrapper",

        html: `
      <div
        class="weather-marker ${darkMode ? "dark" : ""
            }"
        style="
          --accent-color: ${accentColor};
        "
      >
        <div class="weather-marker-icon">
          <img
            src="https://openweathermap.org/img/wn/${city.icon}@2x.png"
            alt=""
          />
        </div>

        <div class="weather-marker-info">
          <span class="weather-marker-temperature">
            ${temperature}°C
          </span>

          <span class="weather-marker-city">
            ${city.name}
          </span>
        </div>
      </div>

      <div
        class="weather-marker-point ${darkMode ? "dark" : ""
            }"
        style="
          --accent-color: ${accentColor};
        "
      ></div>
    `,

        iconSize: [150, 58],
        iconAnchor: [75, 58],
        popupAnchor: [0, -58],
    });
};

function MapBounds({ cities }) {
    const map = useMap();

    useEffect(() => {
        if (!cities.length) return;

        if (cities.length === 1) {
            map.setView(
                [
                    Number(cities[0].latitude),
                    Number(cities[0].longitude),
                ],
                8,
                {
                    animate: true,
                }
            );

            return;
        }

        const bounds = L.latLngBounds(
            cities.map((city) => [
                Number(city.latitude),
                Number(city.longitude),
            ])
        );

        map.fitBounds(bounds, {
            padding: [80, 80],
            maxZoom: 8,
            animate: true,
        });
    }, [cities, map]);

    return null;
}

function MapControls({
    accentColor,
}) {
    const map = useMap();

    return (
        <MapTopControls>
            <MapControl
                type="button"
                $accentColor={accentColor}
                onClick={() =>
                    map.zoomIn()
                }
            >
                +
            </MapControl>

            <MapControl
                type="button"
                $accentColor={accentColor}
                onClick={() =>
                    map.zoomOut()
                }
            >
                −
            </MapControl>
        </MapTopControls>
    );
}

export default function WeatherMap({
    cities,
    darkMode,
    accentColor = "#ffb36c",
}) {
    const validCities = cities.filter(
        (city) =>
            Number.isFinite(
                Number(city.latitude)
            ) &&
            Number.isFinite(
                Number(city.longitude)
            )
    );

    return (
        <WeatherMapSection
            $dark={darkMode}
            $accentColor={accentColor}
        >
            <WeatherMapContainer>
                <WeatherMapHeader>
                    <div>
                        <MapBadge
                            $dark={darkMode}
                            $accentColor={accentColor}
                        >
                            <span>●</span>
                            Interactive map
                        </MapBadge>

                        <WeatherMapTitle
                            $dark={darkMode}
                        >
                            Weather Map
                        </WeatherMapTitle>

                        <WeatherMapSubtitle
                            $dark={darkMode}
                        >
                            Explore weather conditions
                            in your cities
                        </WeatherMapSubtitle>
                    </div>

                    {validCities.length > 0 && (
                        <MapCitiesButton
                            $dark={darkMode}
                            $accentColor={accentColor}
                        >
                            <span>
                                {validCities.length}
                            </span>

                            My cities
                        </MapCitiesButton>
                    )}
                </WeatherMapHeader>

                {validCities.length === 0 ? (
                    <EmptyMessage
                        $dark={darkMode}
                        $accentColor={accentColor}
                    >
                        <div>
                            <span>📍</span>

                            <strong>
                                No cities on the map
                            </strong>

                            <p>
                                Add a city to see its
                                weather here
                            </p>
                        </div>
                    </EmptyMessage>
                ) : (
                    <MapWrapper
                        $dark={darkMode}
                        $accentColor={accentColor}
                    >
                        <MapContainer
                            center={[
                                50.4501,
                                30.5234,
                            ]}
                            zoom={5}
                            scrollWheelZoom
                            zoomControl={false}
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            <MapBounds
                                cities={validCities}
                            />

                            <MapControls
                                accentColor={
                                    accentColor
                                }
                            />

                            {validCities.map(
                                (city) => (
                                    <Marker
                                        key={city.id}
                                        position={[
                                            Number(
                                                city.latitude
                                            ),
                                            Number(
                                                city.longitude
                                            ),
                                        ]}
                                        icon={createWeatherIcon(
                                            city,
                                            darkMode,
                                            accentColor
                                        )}
                                    >
                                        <Popup>
                                            <PopupContent
                                                $dark={darkMode}
                                                $accentColor={
                                                    accentColor
                                                }
                                            >
                                                <PopupHeader>
                                                    <div>
                                                        <PopupCity
                                                            $dark={
                                                                darkMode
                                                            }
                                                        >
                                                            {city.name}
                                                        </PopupCity>

                                                        <PopupCountry
                                                            $dark={
                                                                darkMode
                                                            }
                                                        >
                                                            {city.country}
                                                        </PopupCountry>
                                                    </div>
                                                </PopupHeader>

                                                <PopupWeather
                                                    $dark={
                                                        darkMode
                                                    }
                                                    $accentColor={
                                                        accentColor
                                                    }
                                                >
                                                    <PopupWeatherIcon
                                                        src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
                                                        alt={
                                                            city.description
                                                        }
                                                    />

                                                    <div>
                                                        <PopupTemperature
                                                            $dark={
                                                                darkMode
                                                            }
                                                        >
                                                            {Math.round(
                                                                city.temperature
                                                            )}
                                                            °C
                                                        </PopupTemperature>

                                                        <PopupDescription>
                                                            {
                                                                city.description
                                                            }
                                                        </PopupDescription>
                                                    </div>
                                                </PopupWeather>

                                                <PopupDetails>
                                                    <PopupDetail
                                                        $dark={
                                                            darkMode
                                                        }
                                                    >
                                                        <span>
                                                            🌡️
                                                        </span>

                                                        <div>
                                                            <small>
                                                                Temperature
                                                            </small>

                                                            <strong>
                                                                {Math.round(
                                                                    city.temperature
                                                                )}
                                                                °C
                                                            </strong>
                                                        </div>
                                                    </PopupDetail>

                                                    <PopupDetail
                                                        $dark={
                                                            darkMode
                                                        }
                                                    >
                                                        <span>
                                                            📍
                                                        </span>

                                                        <div>
                                                            <small>
                                                                Location
                                                            </small>

                                                            <strong>
                                                                {
                                                                    city.country
                                                                }
                                                            </strong>
                                                        </div>
                                                    </PopupDetail>
                                                </PopupDetails>
                                            </PopupContent>
                                        </Popup>
                                    </Marker>
                                )
                            )}
                        </MapContainer>
                    </MapWrapper>
                )}
            </WeatherMapContainer>
        </WeatherMapSection>
    );
}