import styled, { keyframes } from "styled-components";

export const WeatherSection = styled.section`
  width: 100%;
  padding: 30px 0 50px;
  background: ${({ theme }) => theme.background};
  box-sizing: border-box;

  @media screen and (min-width: 564px) {
    padding: 40px 0 55px;
  }

  @media screen and (min-width: 1160px) {
    padding: 45px 0 60px;
  }
`;

export const WeatherListWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-wrap: wrap;

  gap: 30px;

  padding: 0 16px;

  box-sizing: border-box;

  @media screen and (min-width: 564px) {
    gap: 30px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    gap: 40px;
    padding: 0 64px;
  }
`;

export const WeatherCard = styled.article`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 340px;
  min-height: 455px;
  padding: 14px 22px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 18px;
  background: ${({ theme }) => theme.card};
  transform: translateY(0) scale(1);
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.015);
    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.18);
  }

  &::before {
    content: "";
    position: absolute;
    top: -120%;
    left: -70%;
    width: 50%;
    height: 300%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.18),
      transparent
    );

    transform: rotate(20deg);
    opacity: 0;
    pointer-events: none;
    transition:
      left 0.7s ease,
      opacity 0.3s ease;
    z-index: 3;
  }

  &:hover::before {
    left: 120%;
    opacity: 1;
  }

  ${({ theme }) =>
    theme.background === "#111111" &&
    `box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.35);
      &:hover {
        box-shadow:
          0 20px 45px rgba(0, 0, 0, 0.55);
      }
    `}

  @media screen and (min-width: 564px) {
    max-width: 330px;
    min-height: 455px;
    padding: 15px 24px 18px;
  }

  @media screen and (min-width: 1160px) {
    width: 375px;
    max-width: 375px;
    height: 500px;
    min-height: 500px;
    padding: 16px 30px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
    &::before {
      display: none;
    }
  }
`;

export const WeatherBackground = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  transform: scale(1);
  transition: transform 0.8s ease, filter 0.8s ease;
  ${WeatherCard}:hover & {
    transform: scale(1.06);
  }
`;

export const WeatherOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1;
`;

export const WeatherCardContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const CardTop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.span`
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: 400;

  line-height: 1;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  max-width: 60%;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`;

export const Country = styled.span`
  color: ${({ theme }) => theme.text};

  font-size: 14px;
  font-weight: 400;

  line-height: 1;

  text-align: right;

  @media screen and (min-width: 564px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 16px;
  }
`;

export const Time = styled.div`
  margin-top: 20px;

  color: ${({ theme }) => theme.text};

  font-size: 25px;
  font-weight: 400;

  line-height: 1;

  @media screen and (min-width: 564px) {
    margin-top: 22px;
    font-size: 27px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 24px;
    font-size: 28px;
  }
`;

export const ForecastButtons = styled.div`
  margin-top: 15px;

  display: flex;
  align-items: center;

  gap: 12px;

  @media screen and (min-width: 564px) {
    gap: 18px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 17px;
    gap: 30px;
  }
`;

export const ForecastButton = styled.button`
  width: 125px;
  height: 32px;

  padding: 0;

  border: none;
  border-radius: 10px;

  background: ${({ theme }) => theme.button};

  color: #111111;

  font-size: 10px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
    `color-mix(in srgb, ${theme.button} 82%, black)`};

    color: #111111;
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 564px) {
    width: 125px;
    height: 33px;

    font-size: 11px;
  }

  @media screen and (min-width: 1160px) {
    width: 134px;
    height: 34px;

    font-size: 12px;
  }
`;

export const DateInfo = styled.div`
  margin-top: 17px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  color: ${({ theme }) => theme.text};

  font-size: 12px;
  font-weight: 400;

  line-height: 1;

  @media screen and (min-width: 564px) {
    gap: 11px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 20px;

    gap: 13px;

    font-size: 14px;
  }
`;

export const DateDivider = styled.span`
  width: 1px;
  height: 16px;

  background: ${({ theme }) => theme.text};

  @media screen and (min-width: 1160px) {
    height: 18px;
  }
`;

export const WeatherIcon = styled.img`
  width: 110px;
  height: 110px;

  margin-top: 12px;

  object-fit: contain;

  @media screen and (min-width: 564px) {
    width: 115px;
    height: 115px;

    margin-top: 14px;
  }

  @media screen and (min-width: 1160px) {
    width: 125px;
    height: 125px;

    margin-top: 17px;
  }
`;

export const Temperature = styled.div`
  margin-top: 2px;

  color: ${({ theme }) => theme.text};

  font-size: 32px;
  font-weight: 400;

  line-height: 1;

  @media screen and (min-width: 564px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 3px;

    font-size: 36px;
  }
`;

export const CardActions = styled.div`
  width: 100%;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({ theme }) => theme.text};

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.3s ease;

  svg {
    width: 25px;
    height: 25px;

    stroke-width: 2;
  }

  &:hover {
    color: ${({ theme }) => theme.button};

    transform: rotate(180deg);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

const favoritePop = keyframes`
  0% {
    transform: scale(1);
  }

  45% {
    transform: scale(1.35);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
`;

export const FavoriteButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: #ff4141;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease;
    animation: ${({ $active }) =>
    $active ? favoritePop : "none"} 0.45s ease;
  svg {
    width: 28px;
    height: 28px;

    stroke-width: 1.8;

    fill: ${({ $active }) =>
    $active ? "#ff4141" : "transparent"};
  }

  &:hover {
    transform: scale(1.08);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 31px;
      height: 31px;
    }
  }
`;

export const UnitButton = styled.button`
  min-width: 42px;
  height: 32px;

  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 10px;

  background: ${({ theme }) => theme.text};

  color: ${({ theme }) => theme.background};

  font-size: 11px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.button};

    color: #111111;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 1160px) {
    min-width: 45px;
    height: 34px;

    font-size: 12px;
  }
`;

export const MoreButton = styled.button`
  width: 105px;
  height: 31px;

  padding: 0;

  border: none;
  border-radius: 10px;

  background: ${({ theme }) => theme.button};

  color: #111111;

  font-size: 11px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: ${({ theme }) =>
    `color-mix(in srgb, ${theme.button} 82%, black)`};

    color: #111111;
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (min-width: 1160px) {
    width: 116px;
    height: 33px;

    font-size: 12px;
  }
`;

export const DeleteButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({ theme }) => theme.text};

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 25px;
    height: 25px;

    stroke-width: 2;
  }

  &:hover {
    color: #ff4141;

    transform: scale(1.08);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;