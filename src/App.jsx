import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WeatherList from "./components/WeatherList/WeatherList";
import News from "./components/News/News";
import NatureSlider from "./components/NatureSlider/NatureSlider";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Profile from "./components/Profile/Profile";
import WeatherMap from "./components/WeatherMap/WeatherMap";
import ColorModal from "./components/ColorModal/ColorModal";
import BackToTop from "./components/BackToTop/BackToTop";
import Game from "./components/Game/Game";
// import WeatherTest from "./components/WeatherTest/WeatherTest";

import { GlobalStyle } from "./GlobalStyle";
import { AppWrapper } from "./App.styled";

const lightTheme = {
  background: "#ffffff",
  card: "#e9e9e9",
  secondary: "#dcdcdc",
  text: "#111111",
  muted: "#666666",
};

const darkTheme = {
  background: "#111111",
  card: "#222222",
  secondary: "#2d2d2d",
  text: "#ffffff",
  muted: "#b5b5b5",
};

export default function App() {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [cities, setCities] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [temperatureUnit, setTemperatureUnit] =
    useState(() => {
      return (
        localStorage.getItem(
          "temperatureUnit"
        ) || "C"
      );
    });

  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") ===
      "dark"
    );
  });

  const [accentColor, setAccentColor] =
    useState(() => {
      return (
        localStorage.getItem(
          "accentColor"
        ) || "#ffb36c"
      );
    });

  const [isColorModalOpen, setIsColorModalOpen] =
    useState(() => {
      return (
        !localStorage.getItem(
          "accentColor"
        )
      );
    });

  const [isLoaded, setIsLoaded] =
    useState(false);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [isProfileOpen, setIsProfileOpen] =
    useState(false);

  useEffect(() => {
    const savedUser =
      localStorage.getItem(
        "weatherUser"
      );

    const savedAvatar =
      localStorage.getItem(
        "weatherAvatar"
      );

    const savedFavorites =
      localStorage.getItem(
        "weatherFavorites"
      );

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedAvatar) {
      setAvatar(savedAvatar);
    }

    if (savedFavorites) {
      const parsedFavorites =
        JSON.parse(savedFavorites);

      setFavorites(parsedFavorites);
      setCities(parsedFavorites);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "weatherFavorites",
      JSON.stringify(favorites)
    );
  }, [favorites, isLoaded]);

  const handleSignUp = (userData) => {
    localStorage.setItem(
      "weatherUser",
      JSON.stringify(userData)
    );

    setUser(userData);
    setIsModalOpen(false);
  };

  const handleUserUpdate = (
    updatedUser
  ) => {
    localStorage.setItem(
      "weatherUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
  };

  const openGame = () => {
    setIsGameOpen(true);
  };

  const closeGame = () => {
    setIsGameOpen(false);
  };

  const handleAvatarChange = (
    newAvatar
  ) => {
    localStorage.setItem(
      "weatherAvatar",
      newAvatar
    );

    setAvatar(newAvatar);
  };

  const handleLogout = () => {
    localStorage.removeItem(
      "weatherUser"
    );

    localStorage.removeItem(
      "weatherAvatar"
    );

    setUser(null);
    setAvatar(null);
    setIsProfileOpen(false);
  };

  const openSignUp = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openProfile = () => {
    if (user) {
      setIsProfileOpen(true);
    } else {
      setIsModalOpen(true);
    }
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  const handleTemperatureUnitChange =
    () => {
      setTemperatureUnit((prevUnit) => {
        const newUnit =
          prevUnit === "C"
            ? "F"
            : "C";

        localStorage.setItem(
          "temperatureUnit",
          newUnit
        );

        return newUnit;
      });
    };

  const handleCityAdd = (newCity) => {
    setCities((prevCities) => {
      const alreadyExists =
        prevCities.some(
          (city) =>
            city.id === newCity.id
        );

      if (alreadyExists) {
        return prevCities;
      }

      return [
        ...prevCities,
        newCity,
      ];
    });
  };

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newValue = !prev;

      localStorage.setItem(
        "theme",
        newValue ? "dark" : "light"
      );

      return newValue;
    });
  };

  const openColorModal = () => {
    setIsColorModalOpen(true);
  };

  const closeColorModal = () => {
    setIsColorModalOpen(false);
  };

  const handleColorChange = (
    newColor
  ) => {
    setAccentColor(newColor);

    localStorage.setItem(
      "accentColor",
      newColor
    );
  };

  const handleDeleteCity = (
    cityId
  ) => {
    setCities((prevCities) =>
      prevCities.filter(
        (city) =>
          city.id !== cityId
      )
    );

    setFavorites(
      (prevFavorites) =>
        prevFavorites.filter(
          (city) =>
            city.id !== cityId
        )
    );
  };

  const handleFavorite = (
    cityId
  ) => {
    setFavorites(
      (prevFavorites) => {
        const isFavorite =
          prevFavorites.some(
            (city) =>
              city.id === cityId
          );

        if (isFavorite) {
          const updatedFavorites =
            prevFavorites.filter(
              (city) =>
                city.id !== cityId
            );

          localStorage.setItem(
            "weatherFavorites",
            JSON.stringify(
              updatedFavorites
            )
          );

          return updatedFavorites;
        }

        const city = cities.find(
          (city) =>
            city.id === cityId
        );

        if (!city) {
          return prevFavorites;
        }

        const updatedFavorites = [
          ...prevFavorites,
          city,
        ];

        localStorage.setItem(
          "weatherFavorites",
          JSON.stringify(
            updatedFavorites
          )
        );

        return updatedFavorites;
      }
    );
  };

  const handleRefresh = async (
    city
  ) => {
    try {
      const response =
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}&units=metric`
        );

      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        );
      }

      const weather =
        await response.json();

      const updatedCity = {
        ...city,

        temperature:
          weather.main.temp,

        icon:
          weather.weather[0]
            .icon,

        description:
          weather.weather[0]
            .description,

        timezone:
          weather.timezone,
      };

      setCities(
        (prevCities) =>
          prevCities.map(
            (item) =>
              item.id === city.id
                ? updatedCity
                : item
          )
      );

      setFavorites(
        (prevFavorites) =>
          prevFavorites.map(
            (item) =>
              item.id === city.id
                ? updatedCity
                : item
          )
      );
    } catch (error) {
      console.error(
        "Помилка оновлення погоди:",
        error
      );
    }
  };

  const currentTheme = darkMode
    ? darkTheme
    : lightTheme;

  const theme = {
    ...currentTheme,
    button: accentColor,
    accent: accentColor,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Header
          user={user}
          avatar={avatar}
          onSignUp={openSignUp}
          onProfile={openProfile}
          onGame={openGame}
          darkMode={darkMode}
          onToggle={toggleTheme}
        />

        <Hero
          onCityAdd={handleCityAdd}
        />

        <WeatherList
          cities={cities}
          favorites={favorites}
          onRefresh={handleRefresh}
          onFavorite={handleFavorite}
          onDelete={handleDeleteCity}
          darkMode={darkMode}
          userColor={accentColor}
        />

        <WeatherMap
          cities={cities}
          darkMode={darkMode}
          accentColor={accentColor}
        />

        <News
          darkMode={darkMode}
          accentColor={accentColor}
        />

        <NatureSlider
          darkMode={darkMode}
          accentColor={accentColor}
        />

        <Footer
          darkMode={darkMode}
          accentColor={accentColor}
        />

        {isModalOpen && (
          <Modal
            darkMode={darkMode}
            onClose={closeModal}
            onSubmit={handleSignUp}
          />
        )}

        {isProfileOpen && user && (
          <Profile
            user={user}
            avatar={avatar}
            onClose={closeProfile}
            onUserUpdate={
              handleUserUpdate
            }
            onAvatarChange={
              handleAvatarChange
            }
            onLogout={handleLogout}
            darkMode={darkMode}

            onOpenColor={
              openColorModal
            }

            accentColor={
              accentColor
            }
          />
        )}

        {isColorModalOpen && (
          <ColorModal
            currentColor={
              accentColor
            }
            onColorChange={
              handleColorChange
            }
            onClose={
              closeColorModal
            }
          />
        )}

        {isGameOpen && (<Game onClose={closeGame} />)}

        <BackToTop />
      </AppWrapper>
    </ThemeProvider>
  );
}