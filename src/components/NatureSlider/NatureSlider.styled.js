import styled, { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const lightAnimationOne = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(150px, 60px) scale(1.2);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`;

const lightAnimationTwo = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }

  50% {
    transform: translate(-120px, -80px) scale(1.15);
  }

  100% {
    transform: translate(0, 0) scale(1);
  }
`;

export const NatureSection = styled.section`
  position: relative;

  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 60px;

  padding: 55px 0 65px;

  box-sizing: border-box;

  overflow: hidden;

  background:
    linear-gradient(
      120deg,
      #f2f5f4,
      #e4ece9,
      #f8f8f8,
      #e6efec,
      #f2f5f4
    );

  background-size: 300% 300%;

  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #e5e5e5;

  box-shadow:
    0 -10px 35px rgba(0, 0, 0, 0.04),
    0 10px 35px rgba(0, 0, 0, 0.05);

  animation: ${backgroundAnimation}
    14s ease-in-out infinite;

  &::before {
    content: "";

    position: absolute;

    width: 450px;
    height: 450px;

    top: -220px;
    left: -160px;

    border-radius: 50%;

    background: rgba(
      255,
      255,
      255,
      0.65
    );

    filter: blur(35px);

    animation:
      ${lightAnimationOne}
      12s ease-in-out infinite;

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    right: -220px;
    bottom: -280px;

    border-radius: 50%;

    background: rgba(
      210,
      225,
      220,
      0.5
    );

    filter: blur(40px);

    animation:
      ${lightAnimationTwo}
      15s ease-in-out infinite;

    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 45px;
    padding: 45px 0 50px;
  }

  @media (max-width: 550px) {
    margin-top: 35px;
    padding: 35px 0 40px;
  }
`;

export const NatureHeader = styled.div`
  position: relative;

  z-index: 10;

  width: calc(100% - 80px);

  margin: 0 auto 40px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  @media (max-width: 768px) {
    width: calc(100% - 50px);

    margin-bottom: 30px;
  }

  @media (max-width: 550px) {
    width: calc(100% - 30px);

    margin-bottom: 25px;

    gap: 10px;
  }
`;

export const NatureTitle = styled.h2`
  margin: 0;

  font-size: 28px;

  font-weight: 500;

  line-height: 1.2;

  letter-spacing: 2px;

  color: #111111;

  transition:
    letter-spacing 0.5s ease,
    transform 0.5s ease;

  @media (max-width: 768px) {
    font-size: 24px;

    letter-spacing: 1.5px;
  }

  @media (max-width: 550px) {
    font-size: 21px;

    letter-spacing: 1px;
  }

  @media (max-width: 380px) {
    font-size: 19px;
  }
`;

export const PauseButton = styled.button`
  flex-shrink: 0;

  padding: 9px 16px;

  border: 1px solid
    rgba(17, 17, 17, 0.15);

  border-radius: 20px;

  background: rgba(
    255,
    255,
    255,
    0.7
  );

  color: #111111;

  font-size: 13px;

  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background: #ffffff;

    transform: translateY(-2px);

    box-shadow:
      0 5px 15px
      rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 550px) {
    padding: 7px 12px;

    font-size: 11px;
  }
`;

export const Slider = styled.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: visible;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;
  }

  @media (max-width: 380px) {
    height: 215px;
  }
`;

export const Slide = styled.div`
  position: absolute;

  left: 50%;

  width: ${({ $position }) =>
    $position === 0
      ? "590px"
      : "340px"};

  height: ${({ $position }) =>
    $position === 0
      ? "350px"
      : "220px"};

  overflow: hidden;

  cursor: pointer;

  background: #dddddd;

  transform:
    translateX(
      ${({ $position }) => {
        if ($position === 0) {
          return "-50%";
        }

        if ($position === -1) {
          return "calc(-50% - 390px)";
        }

        if ($position === 1) {
          return "calc(-50% + 390px)";
        }

        if ($position === -2) {
          return "calc(-50% - 780px)";
        }

        return "calc(-50% + 780px)";
      }}
    )
    scale(
      ${({ $position }) =>
        $position === 0
          ? "1"
          : "0.86"}
    );

  opacity: ${({ $position }) =>
    Math.abs($position) > 2
      ? "0"
      : $position === 0
        ? "1"
        : "0.65"};

  z-index: ${({ $position }) =>
    20 - Math.abs($position)};

  filter: ${({ $position }) =>
    $position === 0
      ? "none"
      : "brightness(0.72)"};

  box-shadow: ${({ $position }) =>
    $position === 0
      ? "0 30px 70px rgba(0, 0, 0, 0.25)"
      : "0 12px 30px rgba(0, 0, 0, 0.12)"};

  transition:
    transform 0.7s ease,
    width 0.7s ease,
    height 0.7s ease,
    opacity 0.6s ease,
    filter 0.6s ease,
    box-shadow 0.7s ease;

  &::before {
    content: "";

    position: absolute;

    inset: 0;

    z-index: 2;

    pointer-events: none;

    background:
      linear-gradient(
        120deg,
        rgba(
          255,
          255,
          255,
          0.18
        ),
        transparent 35%,
        transparent 65%,
        rgba(
          255,
          255,
          255,
          0.08
        )
      );
  }

  &::after {
    content: "";

    position: absolute;

    inset: 0;

    z-index: 3;

    pointer-events: none;

    background: ${({ $position }) =>
      $position === 0
        ? "linear-gradient(to bottom, transparent 55%, rgba(0, 0, 0, 0.2))"
        : "rgba(0, 0, 0, 0.08)"};
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform 0.8s ease;
  }

  &:hover img {
    transform: scale(1.06);
  }

  &:hover {
    box-shadow:
      0 35px 80px
      rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 768px) {
    width: ${({ $position }) =>
      $position === 0
        ? "420px"
        : "240px"};

    height: ${({ $position }) =>
      $position === 0
        ? "260px"
        : "160px"};

    transform:
      translateX(
        ${({ $position }) => {
          if ($position === 0) {
            return "-50%";
          }

          if ($position === -1) {
            return "calc(-50% - 260px)";
          }

          if ($position === 1) {
            return "calc(-50% + 260px)";
          }

          if ($position === -2) {
            return "calc(-50% - 520px)";
          }

          return "calc(-50% + 520px)";
        }}
      )
      scale(
        ${({ $position }) =>
          $position === 0
            ? "1"
            : "0.8"}
      );
  }

  @media (max-width: 550px) {
    width: ${({ $position }) =>
      $position === 0
        ? "300px"
        : "190px"};

    height: ${({ $position }) =>
      $position === 0
        ? "200px"
        : "130px"};

    transform:
      translateX(
        ${({ $position }) => {
          if ($position === 0) {
            return "-50%";
          }

          if ($position === -1) {
            return "calc(-50% - 190px)";
          }

          if ($position === 1) {
            return "calc(-50% + 190px)";
          }

          if ($position === -2) {
            return "calc(-50% - 380px)";
          }

          return "calc(-50% + 380px)";
        }}
      )
      scale(
        ${({ $position }) =>
          $position === 0
            ? "1"
            : "0.75"}
      );
  }

  @media (max-width: 380px) {
    width: ${({ $position }) =>
      $position === 0
        ? "270px"
        : "170px"};

    height: ${({ $position }) =>
      $position === 0
        ? "180px"
        : "115px"};

    transform:
      translateX(
        ${({ $position }) => {
          if ($position === 0) {
            return "-50%";
          }

          if ($position === -1) {
            return "calc(-50% - 170px)";
          }

          if ($position === 1) {
            return "calc(-50% + 170px)";
          }

          if ($position === -2) {
            return "calc(-50% - 340px)";
          }

          return "calc(-50% + 340px)";
        }}
      )
      scale(
        ${({ $position }) =>
          $position === 0
            ? "1"
            : "0.75"}
      );
  }
`;

export const Loading = styled.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;
    font-size: 14px;
  }

  @media (max-width: 380px) {
    height: 215px;
    font-size: 13px;
  }
`;

export const ErrorMessage = styled.div`
  position: relative;

  z-index: 5;

  width: 100%;

  height: 390px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 15px;

  color: #555555;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 550px) {
    height: 240px;

    padding: 0 20px;

    box-sizing: border-box;

    font-size: 14px;

    text-align: center;
  }

  @media (max-width: 380px) {
    height: 215px;

    font-size: 13px;
  }
`;