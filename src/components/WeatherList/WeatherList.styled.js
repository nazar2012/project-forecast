import styled, { keyframes } from "styled-components";

const cardAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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

const iconFloat = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
`;

export const WeatherSection = styled.section`
  width: 100%;
  padding: 30px 0 50px;

  background: ${({ theme }) =>
    theme.background};

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
  padding: 14px 22px 28px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 18px;
  background: ${({ theme }) => theme.card};
  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.08);
  transform: translateY(0) scale(1);
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

@media screen and (min-width: 564px) {
  max-width: 330px;
  min-height: 455px;
  padding: 15px 24px 38px;
}

@media screen and (min-width: 1160px) {
  width: 375px;
  max-width: 375px;
  height: 500px;
  min-height: 500px;
  padding: 16px 30px 40px;
  border-radius: 20px;
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

  z-index: -3;

  transform: scale(1.01);

  filter: saturate(1.08);

  transition:
    transform 1s
      cubic-bezier(0.22, 1, 0.36, 1),
    filter 1s ease;

  ${WeatherCard}:hover & {
    transform: scale(1.09);
    filter: saturate(1.2);
  }
`;

export const WeatherOverlay = styled.div`
  position: absolute;

  inset: 0;

  z-index: -2;

  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.18) 0%,
      rgba(0, 0, 0, 0.08) 45%,
      rgba(0, 0, 0, 0.35) 100%
    );

  pointer-events: none;
`;

export const WeatherGlass = styled.div`
  position: absolute;

  inset: 0;

  z-index: -1;

  border-radius: inherit;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18),
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.02)
    );

  backdrop-filter:
    blur(2px)
    saturate(115%);

  -webkit-backdrop-filter:
    blur(2px)
    saturate(115%);

  box-shadow:
    inset 0 1px 0
      rgba(255, 255, 255, 0.22),
    inset 0 0 30px
      ${({ $accent }) =>
    `${$accent}08`};

  pointer-events: none;
`;

export const WeatherCardContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardTop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.span`
  color: #ffffff;

  font-size: 14px;
  font-weight: 500;

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
  color: rgba(255, 255, 255, 0.9);

  font-size: 14px;
  font-weight: 500;

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

  color: #ffffff;

  font-size: 25px;
  font-weight: 500;

  line-height: 1;

  letter-spacing: -0.5px;

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

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    ${({ $accent }) =>
    `${$accent}dd`};

  color: #111111;

  font-size: 10px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.12);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(0.92);

    box-shadow:
      0 8px 20px
        ${({ $accent }) =>
    `${$accent}55`};
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

  color: rgba(255, 255, 255, 0.92);

  font-size: 12px;
  font-weight: 500;

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

  background:
    rgba(255, 255, 255, 0.65);

  @media screen and (min-width: 1160px) {
    height: 18px;
  }
`;

export const WeatherIcon = styled.img`
  width: 110px;
  height: 110px;

  margin-top: 12px;

  object-fit: contain;

  filter:
    drop-shadow(
      0 10px 15px
      rgba(0, 0, 0, 0.2)
    );

  transition:
    transform 0.45s
      cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.45s ease;

  ${WeatherCard}:hover & {
    transform:
      translateY(-4px)
      scale(1.06);

    filter:
      drop-shadow(
        0 14px 22px
        rgba(0, 0, 0, 0.3)
      );
  }

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

  color: #ffffff;

  font-size: 32px;
  font-weight: 500;

  line-height: 1;

  letter-spacing: -1px;

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
  padding-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  box-sizing: border-box;

  @media screen and (min-width: 1160px) {
    padding-top: 14px;
  }
`;

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color: #ffffff;

  cursor: pointer;

  transition:
    color 0.25s ease,
    transform 0.3s ease,
    background 0.25s ease;

  svg {
    width: 21px;
    height: 21px;

    stroke-width: 2;
  }

  &:hover {
    color: #111111;

    background:
      ${({ theme }) =>
    theme.button};

    transform: rotate(180deg);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 23px;
      height: 23px;
    }
  }
`;

export const FavoriteButton = styled.button`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color:
    ${({ $active }) =>
    $active
      ? "#ff4141"
      : "#ffffff"};

  cursor: pointer;

  animation:
    ${({ $active }) =>
    $active
      ? favoritePop
      : "none"}
    0.45s ease;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    color 0.25s ease;

  svg {
    width: 22px;
    height: 22px;

    stroke-width: 1.8;

    fill:
      ${({ $active }) =>
    $active
      ? "#ff4141"
      : "transparent"};
  }

  &:hover {
    transform: scale(1.1);

    background:
      rgba(255, 255, 255, 0.2);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 24px;
      height: 24px;
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

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.15);

  backdrop-filter: blur(8px);

  color: #ffffff;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;

  &:hover {
    background:
      ${({ $accent }) =>
    $accent};

    color: #111111;

    transform: translateY(-2px);
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

  border: 1px solid
    rgba(255, 255, 255, 0.18);

  border-radius: 10px;

  background:
    ${({ $accent }) =>
    `${$accent}dd`};

  color: #111111;

  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.12);

  transition:
    transform 0.25s ease,
    filter 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    filter: brightness(0.92);

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
        ${({ $accent }) =>
    `${$accent}50`};
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

  border: 1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 10px;

  background:
    rgba(255, 255, 255, 0.10);

  backdrop-filter: blur(8px);

  color: #ffffff;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease,
    background 0.2s ease;

  svg {
    width: 21px;
    height: 21px;

    stroke-width: 2;
  }

  &:hover {
    color: #ffffff;

    background:
      rgba(255, 65, 65, 0.75);

    transform:
      translateY(-2px)
      scale(1.05);
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;

    svg {
      width: 23px;
      height: 23px;
    }
  }
`;