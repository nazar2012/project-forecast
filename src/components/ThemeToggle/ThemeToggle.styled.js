import styled, { keyframes, css } from "styled-components";

const iconPop = keyframes`
  0% {
    transform: scale(0.7) rotate(-20deg);
    opacity: 0.5;
  }

  60% {
    transform: scale(1.15) rotate(10deg);
    opacity: 1;
  }

  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

export const Toggle = styled.button`
  position: relative;

  width: 82px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px;

  box-sizing: border-box;

  border: none;
  border-radius: 999px;

  background: ${({ $dark }) =>
    $dark ? "#111111" : "#e8e8e8"};

  cursor: pointer;

  box-shadow:
    0 3px 10px rgba(0, 0, 0, 0.12);

  transition:
    background 0.5s ease,
    transform 0.25s ease,
    box-shadow 0.35s ease;

  &:hover {
    transform: scale(1.04);

    box-shadow:
      0 6px 18px rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid
      ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

    outline-offset: 3px;
  }
`;

export const Icon = styled.span`
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) =>
    $active ? "#111111" : "#777777"};
  opacity: ${({ $active }) =>
    $active ? 1 : 0.55};
  transform: ${({ $active }) =>
    $active
      ? "scale(1.05)"
      : "scale(0.9)"};
  transition:
    color 0.4s ease,
    opacity 0.4s ease,
    transform 0.4s ease;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  ${({ $active }) =>
    $active &&
    css`
      animation: ${iconPop} 0.5s ease;
    `}
`;

export const ToggleCircle = styled.span`
  position: absolute;
  z-index: 2;
  top: 4px;
  left: 4px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 50%;
  background: #ffffff;
  color: #111111;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transform: ${({ $dark }) =>
    $dark
      ? "translateX(44px) rotate(360deg)"
      : "translateX(0) rotate(0deg)"};
  transition:
    transform 0.65s
      cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  svg {
    width: 15px;
    height: 15px;
    display: block;
    transition:
      transform 0.45s ease;
  }

  ${Toggle}:hover & {
    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.22);
  }

  ${Toggle}:active & {
    transform: ${({ $dark }) =>
    $dark
      ? "translateX(44px) rotate(360deg) scale(0.92)"
      : "translateX(0) rotate(0deg) scale(0.92)"};
  }
`;