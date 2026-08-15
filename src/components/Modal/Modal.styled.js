import styled from "styled-components";

const staggerItem = `
  opacity: 0;
  transform: translateY(12px);
  animation: modalItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;

  background: ${({ $dark }) =>
    $dark
      ? "rgba(0, 0, 0, 0.32)"
      : "rgba(17, 17, 17, 0.18)"};

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  animation: overlayAppear 0.3s ease;

  @keyframes overlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  isolation: isolate;

  width: 100%;
  max-width: 360px;

  padding: 30px;

  box-sizing: border-box;

  background: ${({ $dark }) =>
    $dark
      ? "rgba(25, 25, 25, 0.55)"
      : "rgba(255, 255, 255, 0.5)"};

  backdrop-filter: blur(24px) saturate(150%);
  -webkit-backdrop-filter: blur(24px) saturate(150%);

  border: 1px solid
    ${({ $dark }) =>
    $dark
      ? "rgba(255, 255, 255, 0.14)"
      : "rgba(255, 255, 255, 0.7)"};

  border-radius: 18px;

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.25),
    0 0 40px
      ${({ $accent }) =>
    `${$accent}18`},
    inset 0 1px 1px
      rgba(255, 255, 255, 0.25);

  overflow: hidden;

  animation:
    modalAppear 0.35s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform:
        translateY(18px)
        scale(0.96);
      filter: blur(5px);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
      filter: blur(0);
    }
  }

  @keyframes modalItemAppear {
    from {
      opacity: 0;
      transform:
        translateY(12px)
        scale(0.985);
    }

    to {
      opacity: 1;
      transform:
        translateY(0)
        scale(1);
    }
  }

  /* Glass shine */

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        transparent 32%,
        transparent 68%,
        rgba(255, 255, 255, 0.05)
      );

    z-index: 1;
  }

  /* All modal content stays above bubbles */

  > * {
    position: relative;
    z-index: 2;
  }

  @media screen and (min-width: 564px) {
    max-width: 450px;

    padding: 38px;

    border-radius: 20px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 500px;

    padding: 42px;

    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

export const Glow = styled.div`
  position: absolute;

  width: 190px;
  height: 190px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      ${({ $accent }) => `${$accent}85`} 0%,
      ${({ $accent }) => `${$accent}55`} 30%,
      ${({ $accent }) => `${$accent}28`} 55%,
      transparent 75%
    );

  filter: blur(25px);

  opacity: 0.95;

  pointer-events: none;

  z-index: 0 !important;

  animation:
    modalBubbleFloat 8s
    ease-in-out infinite;

  ${({ $position }) =>
    $position === "top" &&
    `
      top: -85px;
      right: -65px;

      width: 210px;
      height: 210px;

      animation-delay: 0s;
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    `
      bottom: -90px;
      left: -70px;

      width: 190px;
      height: 190px;

      animation-delay: -2.5s;
    `}

  ${({ $position }) =>
    $position === "center" &&
    `
      top: 42%;
      left: 43%;

      width: 130px;
      height: 130px;

      opacity: 0.55;

      animation-delay: -5s;
    `}

  @keyframes modalBubbleFloat {
    0%,
    100% {
      transform:
        translate3d(0, 0, 0)
        scale(1);
    }

    25% {
      transform:
        translate3d(-18px, 14px, 0)
        scale(1.08);
    }

    50% {
      transform:
        translate3d(16px, 24px, 0)
        scale(0.94);
    }

    75% {
      transform:
        translate3d(25px, -14px, 0)
        scale(1.05);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 11px;
  right: 11px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 1px solid
    rgba(255, 255, 255, 0.12);

  border-radius: 50%;

  background: ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.08)"
      : "rgba(255,255,255,0.45)"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#333333"};

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ $accent }) =>
    `${$accent}35`};

    transform: rotate(90deg);

    box-shadow:
      0 0 15px
        ${({ $accent }) =>
    `${$accent}35`};
  }

  &:active {
    transform: scale(0.94);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 564px) {
    top: 14px;
    right: 14px;

    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1160px) {
    top: 16px;
    right: 16px;

    width: 34px;
    height: 34px;
  }
`;

export const Title = styled.h2`
  ${staggerItem}

  animation-delay: 0.08s;

  margin: 0 0 22px;

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 25px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

text-shadow:
  0 0 8px ${({ $accent }) => `${$accent}80`},
  0 0 20px ${({ $accent }) => `${$accent}65`},
  0 0 40px ${({ $accent }) => `${$accent}45`},
  0 0 70px ${({ $accent }) => `${$accent}25`};

transition: text-shadow 0.6s ease;

  @media screen and (min-width: 564px) {
    margin-bottom: 27px;
    font-size: 29px;
  }

  @media screen and (min-width: 1160px) {
    margin-bottom: 30px;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 11px;

  @media screen and (min-width: 564px) {
    gap: 14px;
  }

  @media screen and (min-width: 1160px) {
    gap: 16px;
  }
`;

export const Input = styled.input`
  ${staggerItem}

  &:nth-child(1) {
    animation-delay: 0.14s;
  }

  &:nth-child(2) {
    animation-delay: 0.20s;
  }

  &:nth-child(3) {
    animation-delay: 0.26s;
  }

  width: 100%;
  height: 44px;

  padding: 0 14px;

  border: 1px solid
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.12)"
      : "rgba(255,255,255,0.7)"};

  border-radius: 9px;

  outline: none;

  box-sizing: border-box;

  background: ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.06)"
      : "rgba(255,255,255,0.45)"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  backdrop-filter: blur(10px);

  font-size: 14px;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;

  &::placeholder {
    color: ${({ $dark }) =>
    $dark ? "#777777" : "#888888"};
  }

  &:hover {
    background: ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.08)"
      : "rgba(255,255,255,0.58)"};
  }

  &:focus {
    background: ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.09)"
      : "rgba(255,255,255,0.65)"};

    border-color: ${({ $accent }) =>
    $accent};

    box-shadow:
      0 0 0 3px
        ${({ $accent }) =>
    `${$accent}22`},
      0 0 18px
        ${({ $accent }) =>
    `${$accent}15`};
  }

  @media screen and (min-width: 564px) {
    height: 50px;
    padding: 0 16px;
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    height: 54px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  ${staggerItem}

  animation-delay: 0.34s;

  width: 92px;
  height: 37px;

  margin: 4px auto 0;

  border: none;

  border-radius: 9px;

  background: ${({ $accent }) =>
    $accent};

  color: #111111;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  box-shadow:
    0 7px 20px
      ${({ $accent }) =>
    `${$accent}35`};

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    filter: brightness(1.04);

    box-shadow:
      0 10px 25px
        ${({ $accent }) =>
    `${$accent}55`};
  }

  &:active {
    transform:
      translateY(0)
      scale(0.97);
  }

  @media screen and (min-width: 564px) {
    width: 105px;
    height: 41px;
    font-size: 15px;
  }

  @media screen and (min-width: 1160px) {
    width: 115px;
    height: 44px;
    font-size: 16px;
  }
`;

export const LoginText = styled.p`
  ${staggerItem}

  animation-delay: 0.40s;

  margin: 17px 0 0;

  color: #888888;

  font-size: 12px;

  text-align: center;

  @media screen and (min-width: 564px) {
    margin-top: 21px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 24px;
    font-size: 14px;
  }
`;

export const LoginLink = styled.a`
  color: ${({ $accent }) =>
    $accent};

  font-weight: 700;

  text-decoration: none;

  transition:
    filter 0.2s ease,
    text-shadow 0.2s ease;

  &:hover {
    filter: brightness(0.85);

    text-shadow:
      0 0 12px
        ${({ $accent }) =>
    `${$accent}55`};
  }
`;

export const PasswordWrapper = styled.div`
  ${staggerItem}

  animation-delay: 0.26s;

  position: relative;

  width: 100%;
`;

export const PasswordButton = styled.button`
  position: absolute;

  top: 50%;
  right: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;

  padding: 0;

  border: none;

  background: transparent;

  color: ${({ $dark }) =>
    $dark ? "#888888" : "#777777"};

  cursor: pointer;

  transform: translateY(-50%);

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ $accent }) =>
    $accent};

    transform:
      translateY(-50%)
      scale(1.08);
  }

  svg {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 564px) {
    right: 14px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;