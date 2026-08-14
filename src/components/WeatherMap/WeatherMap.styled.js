import styled from "styled-components";

export const WeatherMapSection = styled.section`
  width: 100%;
  padding: 65px 64px 80px;
  box-sizing: border-box;

  background: ${({ theme }) =>
        theme.background};

  color: ${({ theme }) =>
        theme.text};

  transition:
    background 0.3s ease,
    color 0.3s ease;

  position: relative;
  z-index: 1;

  @media screen and (max-width: 900px) {
    padding: 50px 32px 65px;
  }

  @media screen and (max-width: 563px) {
    padding: 40px 16px 50px;
  }
`;

export const WeatherMapContainer =
    styled.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
  `;

export const WeatherMapHeader =
    styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    gap: 30px;
    margin-bottom: 25px;

    @media screen and (max-width: 563px) {
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
    }
  `;

export const MapBadge = styled.div`
  width: fit-content;

  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 10px;
  padding: 7px 12px;

  border-radius: 20px;

  background: ${({ $dark, $accentColor }) =>
        $dark
            ? `${$accentColor}22`
            : `${$accentColor}18`};

  color: ${({ $accentColor }) =>
        $accentColor};

  font-size: 11px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  transition:
    background 0.3s ease,
    color 0.3s ease;

  span {
    font-size: 9px;
  }
`;

export const WeatherMapTitle =
    styled.h2`
    margin: 0;

    color: ${({ $dark }) =>
            $dark ? "#ffffff" : "#111111"};

    font-size: 32px;
    font-weight: 600;
    line-height: 1.1;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 25px;
    }
  `;

export const WeatherMapSubtitle =
    styled.p`
    margin: 8px 0 0;

    color: ${({ $dark }) =>
            $dark ? "#999999" : "#858585"};

    font-size: 14px;
    font-weight: 400;

    transition: color 0.3s ease;

    @media screen and (max-width: 563px) {
      font-size: 12px;
    }
  `;

export const MapCitiesButton =
    styled.div`
    display: flex;
    align-items: center;
    gap: 9px;

    padding: 10px 15px;

    border-radius: 12px;

    background: ${({ $dark }) =>
            $dark ? "#ffffff" : "#111111"};

    color: ${({ $dark }) =>
            $dark ? "#111111" : "#ffffff"};

    font-size: 12px;
    font-weight: 500;

    transition:
      background 0.3s ease,
      color 0.3s ease;

    span {
      width: 24px;
      height: 24px;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: ${({ $accentColor }) =>
            $accentColor};

      color: #111111;

      font-size: 11px;
      font-weight: 600;
    }
  `;

export const MapWrapper =
    styled.div`
    position: relative;

    width: 100%;
    height: 560px;

    overflow: hidden;

    border-radius: 24px;

    background: ${({ $dark }) =>
            $dark ? "#252525" : "#e8f3f7"};

    box-shadow: ${({ $dark }) =>
            $dark
                ? `
          0 15px 45px rgba(0, 0, 0, 0.4),
          0 3px 10px rgba(0, 0, 0, 0.25)
        `
                : `
          0 15px 45px rgba(0, 0, 0, 0.12),
          0 3px 10px rgba(0, 0, 0, 0.05)
        `};

    isolation: isolate;

    transition:
      background 0.3s ease,
      box-shadow 0.3s ease;

    .leaflet-container {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      font-family: inherit;
    }

    .leaflet-pane,
    .leaflet-top,
    .leaflet-bottom {
      z-index: 10;
    }

    .leaflet-control-attribution {
      font-size: 9px;
      padding: 2px 6px;
      border-radius: 6px 0 0 0;
    }

    .leaflet-popup-content-wrapper {
      padding: 0;
      overflow: hidden;

      border-radius: 18px;

      background: ${({ $dark }) =>
            $dark ? "#1c1c1c" : "#ffffff"};

      box-shadow: ${({ $dark }) =>
            $dark
                ? "0 15px 40px rgba(0, 0, 0, 0.5)"
                : "0 15px 40px rgba(0, 0, 0, 0.18)"};
    }

    .leaflet-popup-content {
      margin: 0;
      width: 260px !important;
    }

    .leaflet-popup-tip {
      background: ${({ $dark }) =>
            $dark ? "#1c1c1c" : "#ffffff"};

      box-shadow:
        0 4px 8px
        rgba(0, 0, 0, 0.08);
    }

    .leaflet-popup-close-button {
      top: 10px !important;
      right: 12px !important;

      color: ${({ $dark }) =>
            $dark ? "#aaaaaa" : "#777777"} !important;

      font-size: 20px !important;
      font-weight: 400 !important;

      z-index: 5;
    }

    .weather-marker-wrapper {
      background: transparent !important;
      border: none !important;
    }

    .weather-marker {
      --accent-color: #ffb36c;

      position: relative;

      width: 145px;
      height: 52px;

      display: flex;
      align-items: center;

      padding: 4px 12px 4px 4px;
      box-sizing: border-box;

      border-radius: 30px;

      background: rgba(
        255,
        255,
        255,
        0.96
      );

      box-shadow:
        0 7px 20px
          rgba(0, 0, 0, 0.16),
        0 0 0 2px
          color-mix(
            in srgb,
            var(--accent-color) 90%,
            transparent
          );

      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

      cursor: pointer;
    }

    .weather-marker.dark {
      background: rgba(
        30,
        30,
        30,
        0.97
      );
    }

    .weather-marker:hover {
      transform: translateY(-3px);

      box-shadow:
        0 12px 25px
          rgba(0, 0, 0, 0.2),
        0 0 0 3px
          color-mix(
            in srgb,
            var(--accent-color) 90%,
            transparent
          );
    }

    .weather-marker-icon {
      width: 44px;
      height: 44px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #fff3df;
    }

    .weather-marker-icon img {
      width: 43px;
      height: 43px;
      object-fit: contain;
    }

    .weather-marker-info {
      min-width: 0;

      display: flex;
      flex-direction: column;

      margin-left: 8px;
    }

    .weather-marker-temperature {
      color: #111111;

      font-size: 15px;
      font-weight: 700;
      line-height: 1.1;
    }

    .weather-marker.dark
      .weather-marker-temperature {
      color: #ffffff;
    }

    .weather-marker-city {
      max-width: 78px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      margin-top: 3px;

      color: #777777;

      font-size: 10px;
      font-weight: 500;
    }

    .weather-marker.dark
      .weather-marker-city {
      color: #aaaaaa;
    }

    .weather-marker-point {
      --accent-color: #ffb36c;

      position: absolute;

      left: 50%;
      bottom: -7px;

      width: 14px;
      height: 14px;

      transform:
        translateX(-50%)
        rotate(45deg);

      background: #ffffff;

      box-shadow:
        3px 3px 7px
        rgba(0, 0, 0, 0.1);

      z-index: -1;
    }

    .weather-marker-point.dark {
      background: #1e1e1e;
    }

    @media screen and (max-width: 900px) {
      height: 480px;
    }

    @media screen and (max-width: 563px) {
      height: 360px;
      border-radius: 17px;

      .leaflet-popup-content {
        width: 230px !important;
      }

      .weather-marker {
        width: 125px;
        height: 46px;
      }

      .weather-marker-icon {
        width: 38px;
        height: 38px;
      }

      .weather-marker-icon img {
        width: 37px;
        height: 37px;
      }

      .weather-marker-temperature {
        font-size: 13px;
      }

      .weather-marker-city {
        font-size: 9px;
        max-width: 65px;
      }
    }
  `;

export const MapTopControls =
    styled.div`
    position: absolute;

    top: 20px;
    right: 20px;

    z-index: 1000;

    display: flex;
    flex-direction: column;
    gap: 7px;
  `;

export const MapControl = styled.button`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 12px;

  background: rgba(
    255,
    255,
    255,
    0.96
  );

  color: #111111;

  font-size: 22px;
  font-weight: 400;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.14);

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ $accentColor }) =>
        $accentColor};
  }

  &:active {
    transform: scale(0.94);
  }

  @media screen and (max-width: 563px) {
    width: 36px;
    height: 36px;
    font-size: 19px;
  }
`;

export const PopupContent =
    styled.div`
    padding: 18px;

    background: ${({ $dark }) =>
            $dark ? "#1c1c1c" : "#ffffff"};

    transition: background 0.3s ease;
  `;

export const PopupHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopupCity = styled.div`
  color: ${({ $dark }) =>
        $dark ? "#ffffff" : "#111111"};

  font-size: 18px;
  font-weight: 700;
`;

export const PopupCountry = styled.div`
  margin-top: 3px;

  color: ${({ $dark }) =>
        $dark ? "#999999" : "#888888"};

  font-size: 11px;
`;

export const PopupWeather =
    styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    margin-top: 12px;
    padding: 10px;

    border-radius: 13px;

    /*
     * ФОН ТЕПЕРЬ ЦВЕТ ПОЛЬЗОВАТЕЛЯ
     */
    background: ${({ $accentColor }) =>
            `${$accentColor}22`};

    transition:
      background 0.3s ease;
  `;

export const PopupWeatherIcon =
    styled.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
  `;

export const PopupTemperature =
    styled.div`
    color: ${({ $dark }) =>
            $dark ? "#ffffff" : "#111111"};

    font-size: 25px;
    font-weight: 700;
  `;

export const PopupDescription =
    styled.div`
    margin-top: 2px;

    color: #888888;

    font-size: 11px;
    text-transform: capitalize;
  `;

export const PopupDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 8px;
  margin-top: 10px;
`;

export const PopupDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 8px;

  border-radius: 10px;

  background: ${({ $dark }) =>
        $dark ? "#292929" : "#f6f6f6"};

  transition:
    background 0.3s ease;

  span {
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  small {
    color: ${({ $dark }) =>
        $dark ? "#888888" : "#999999"};

    font-size: 8px;
  }

  strong {
    margin-top: 2px;

    color: ${({ $dark }) =>
        $dark ? "#eeeeee" : "#333333"};

    font-size: 10px;
    font-weight: 600;
  }
`;

export const EmptyMessage =
    styled.div`
    width: 100%;
    height: 420px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 24px;

    background: ${({ $dark }) =>
            $dark
                ? "radial-gradient(circle at center, #292929, #181818 65%)"
                : "radial-gradient(circle at center, #fff4e8, #f5f5f5 65%)"};

    text-align: center;

    transition:
      background 0.3s ease;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      width: 65px;
      height: 65px;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 15px;

      border-radius: 50%;

      background: ${({ $accentColor }) =>
            $accentColor};

      font-size: 27px;
    }

    strong {
      color: ${({ $dark }) =>
            $dark ? "#ffffff" : "#222222"};

      font-size: 17px;
      font-weight: 600;
    }

    p {
      margin: 6px 0 0;

      color: #888888;

      font-size: 12px;
    }

    @media screen and (max-width: 563px) {
      height: 300px;
      border-radius: 17px;
    }
  `;