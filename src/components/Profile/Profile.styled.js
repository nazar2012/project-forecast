import styled from "styled-components";

const staggerItem = `
  opacity: 0;
  transform: translateY(12px);
  animation: profileItemAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    forwards;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  z-index: 1100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
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

export const ProfileWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  max-width: 350px;

  padding: 21px 25px;

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
    `${$accent}35`},
  inset 0 1px 1px
    rgba(255, 255, 255, 0.25);

  overflow: hidden;

  animation:
    profileAppear 0.35s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes profileAppear {
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

  @keyframes profileItemAppear {
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

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2),
        transparent 35%,
        transparent 70%,
        rgba(255, 255, 255, 0.05)
      );

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media screen and (min-width: 564px) {
    max-width: 370px;
    padding: 20px 25px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 450px;
    padding: 32px 36px;
    border-radius: 22px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::after {
      animation: none;
    }

    > div:first-of-type::before {
      animation: none;
    }

    > * {
      animation: none !important;
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;

export const Glow = styled.div`
  position: absolute;

  width: 240px;
  height: 240px;

  border-radius: 50%;

  background: ${({ $accent }) => `
    radial-gradient(
      circle,
      ${$accent}d9 0%,
      ${$accent}a8 22%,
      ${$accent}70 45%,
      ${$accent}35 68%,
      transparent 100%
    )
  `};

  filter: blur(20px);

  opacity: 1;

  pointer-events: none;

  z-index: 0 !important;

  mix-blend-mode: screen;

  transition:
    background 0.8s ease,
    opacity 0.5s ease,
    filter 0.5s ease;

  animation:
    profileBubbleFloat 8s ease-in-out infinite;

  ${({ $position }) =>
    $position === "top" &&
    `
      top: -105px;
      right: -85px;

      width: 250px;
      height: 250px;

      animation-delay: 0s;
    `}

  ${({ $position }) =>
    $position === "bottom" &&
    `
      bottom: -105px;
      left: -85px;

      width: 230px;
      height: 230px;

      animation-delay: -2.5s;
    `}

  ${({ $position }) =>
    $position === "center" &&
    `
      top: 38%;
      left: 40%;

      width: 170px;
      height: 170px;

      opacity: 0.8;

      animation-delay: -5s;
    `}

  @keyframes profileBubbleFloat {
    0%,
    100% {
      transform:
        translate3d(0, 0, 0)
        scale(1);
    }

    25% {
      transform:
        translate3d(-20px, 16px, 0)
        scale(1.08);
    }

    50% {
      transform:
        translate3d(18px, 28px, 0)
        scale(0.94);
    }

    75% {
      transform:
        translate3d(28px, -16px, 0)
        scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 29px;
  height: 29px;
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
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
    `${theme.button}35`};

    color: ${({ theme }) =>
    theme.text};

    transform: rotate(90deg);

    box-shadow:
      0 0 15px
        ${({ theme }) =>
    `${theme.button}35`};
  }

  &:active {
    transform: scale(0.9);
  }

  svg {
    width: 17px;
    height: 17px;
  }

  @media screen and (min-width: 1160px) {
    top: 14px;
    right: 14px;

    width: 34px;
    height: 34px;
  }
`;

export const Title = styled.h2`
  ${staggerItem}

  animation-delay: 0.08s;

  margin: 0 0 13px;

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 23px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  text-shadow:
    0 0 8px ${({ $accent }) => `${$accent}80`},
    0 0 20px ${({ $accent }) => `${$accent}65`},
    0 0 40px ${({ $accent }) => `${$accent}45`},
    0 0 70px ${({ $accent }) => `${$accent}25`};

  transition:
    color 0.5s ease,
    text-shadow 0.6s ease;

  @media screen and (min-width: 1160px) {
    margin-bottom: 20px;

    font-size: 29px;
  }
`;

export const AvatarWrapper = styled.div`
  ${staggerItem}

  animation-delay: 0.14s;

  position: relative;

  width: 76px;
  height: 76px;

  margin: 0 auto 13px;

  &::before {
    content: "";

    position: absolute;

    inset: -6px;

    border-radius: 50%;

    background:
      ${({ theme }) =>
    `${theme.button}35`};

    filter: blur(8px);

    animation:
      avatarGlow 3s
      ease-in-out infinite;
  }

  @keyframes avatarGlow {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(0.95);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 564px) {
    width: 80px;
    height: 80px;
  }

  @media screen and (min-width: 1160px) {
    width: 105px;
    height: 105px;

    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  position: relative;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  border: 3px solid
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.18)"
      : "rgba(255,255,255,0.8)"};

  border-radius: 50%;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.18);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 10px 30px
        ${({ theme }) =>
    `${theme.button}40`};
  }
`;

export const AvatarPlaceholder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    ${({ theme }) =>
    `linear-gradient(
        135deg,
        ${theme.button},
        ${theme.button}bb
      )`};

  color: #111111;

  font-size: 30px;
  font-weight: 800;

  box-shadow:
    0 8px 25px
      ${({ theme }) =>
    `${theme.button}40`};

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 12px 30px
        ${({ theme }) =>
    `${theme.button}55`};
  }

  @media screen and (min-width: 1160px) {
    font-size: 42px;
  }
`;

export const UploadButton = styled.label`
  position: absolute;

  right: -2px;
  bottom: -2px;

  width: 27px;
  height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ $dark }) =>
    $dark ? "#202020" : "#ffffff"};

  border-radius: 50%;

  background:
    ${({ theme }) =>
    theme.button};

  color: #111111;

  cursor: pointer;

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.18);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      scale(1.12)
      rotate(8deg);

    box-shadow:
      0 7px 20px
        ${({ theme }) =>
    `${theme.button}55`};
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  animation: profileInfoAppear 0.55s
    cubic-bezier(0.22, 1, 0.36, 1)
    0.20s both;

  @keyframes profileInfoAppear {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (min-width: 1160px) {
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  padding: 8px 10px;

  border: 1px solid
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.09)"
      : "rgba(255,255,255,0.65)"};

  border-radius: 9px;

  background:
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.045)"
      : "rgba(255,255,255,0.32)"};

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      ${({ theme }) =>
    `${theme.button}12`};

    border-color:
      ${({ theme }) =>
    `${theme.button}70`};

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
        rgba(0, 0, 0, 0.08);
  }

  @media screen and (min-width: 1160px) {
    padding: 12px 14px;
    border-radius: 11px;
  }
`;

export const Label = styled.div`
  margin-bottom: 2px;

  color: ${({ $dark }) =>
    $dark ? "#777777" : "#888888"};

  font-size: 9px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 1160px) {
    font-size: 10px;
  }
`;

export const Value = styled.div`
  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 12px;
  font-weight: 600;

  word-break: break-word;

  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`;

export const EditInput = styled.input`
  width: 100%;
  height: 33px;

  padding: 0 9px;

  border: 1px solid
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.12)"
      : "rgba(255,255,255,0.7)"};

  border-radius: 7px;

  outline: none;

  background:
    ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.06)"
      : "rgba(255,255,255,0.5)"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  backdrop-filter: blur(10px);

  font-size: 12px;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &:focus {
    border-color:
      ${({ theme }) =>
    theme.button};

    box-shadow:
      0 0 0 3px
        ${({ theme }) =>
    `${theme.button}22`},
      0 0 18px
        ${({ theme }) =>
    `${theme.button}12`};

    background:
      ${({ $dark }) =>
    $dark
      ? "rgba(255,255,255,0.09)"
      : "rgba(255,255,255,0.7)"};
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
    padding: 0 12px;
  }
`;

export const EditButton = styled.button`
  ${staggerItem}

  animation-delay: 0.30s;

  width: 100%;
  height: 35px;

  margin-top: 10px;

  border: none;

  border-radius: 8px;

  background:
    ${({ theme }) =>
    theme.button};

  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);

    box-shadow:
      0 8px 22px
        ${({ theme }) =>
    `${theme.button}45`};
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`;

export const SaveButton = styled(EditButton)`
  margin-top: 9px;
`;

export const LogoutButton = styled.button`
  ${staggerItem}

  animation-delay: 0.44s;

  width: 100%;
  height: 35px;

  margin-top: 6px;

  border: 1px solid
    rgba(255, 107, 107, 0.55);

  border-radius: 8px;

  background:
    rgba(255, 107, 107, 0.06);

  color: ${({ $dark }) =>
    $dark ? "#ff8585" : "#ff5c5c"};

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      rgba(255, 107, 107, 0.9);

    color: #ffffff;

    transform: translateY(-1px);

    box-shadow:
      0 8px 20px
        rgba(255, 107, 107, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;

  width: 100%;
`;

export const PasswordButton = styled.button`
  position: absolute;

  top: 50%;
  right: 8px;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

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
    color:
      ${({ theme }) =>
    theme.button};

    transform:
      translateY(-50%)
      scale(1.08);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ColorButton = styled.button`
  ${staggerItem}

  animation-delay: 0.37s;

  width: 100%;
  height: 35px;

  margin-top: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  border: 1px solid
    ${({ theme }) =>
    `${theme.button}80`};

  border-radius: 8px;

  background:
    ${({ theme }) =>
    `${theme.button}0d`};

  color:
    ${({ theme }) =>
    theme.text};

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  backdrop-filter: blur(10px);

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background:
      ${({ theme }) =>
    theme.button};

    color: #111111;

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
        ${({ theme }) =>
    `${theme.button}40`};
  }

  &:active {
    transform: scale(0.98);
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
  }
`;