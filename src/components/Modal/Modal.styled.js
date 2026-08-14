import styled from "styled-components";

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
      ? "rgba(0, 0, 0, 0.7)"
      : "rgba(17, 17, 17, 0.45)"};

  backdrop-filter: blur(5px);

  transition: background 0.35s ease;
`;

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 360px;

  padding: 30px;

  box-sizing: border-box;

  background: ${({ $dark }) =>
    $dark ? "#111111" : "#ffffff"};

  border: 1px solid
    ${({ $dark }) =>
    $dark ? "#292929" : "#eeeeee"};

  border-radius: 15px;

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 55px rgba(0, 0, 0, 0.5)"
      : "0 20px 55px rgba(0, 0, 0, 0.18)"};

  animation: modalAppear 0.25s ease;

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media screen and (min-width: 564px) {
    max-width: 450px;
    padding: 38px;
    border-radius: 17px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 500px;
    padding: 42px;
    border-radius: 18px;
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
  border: none;
  border-radius: 50%;

  background: ${({ $dark }) =>
    $dark ? "#222222" : "#f7f7f7"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#333333"};

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;

  &:hover {
    color: #111111;
    transform: rotate(3deg);
  }

  &:active {
    transform: scale(0.94);
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
  margin: 0 0 22px;

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 25px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  transition: color 0.35s ease;

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
  width: 100%;
  height: 44px;

  padding: 0 14px;

  border: 1px solid
    ${({ $dark }) =>
    $dark ? "#333333" : "#dddddd"};

  border-radius: 8px;

  outline: none;

  box-sizing: border-box;

  background: ${({ $dark }) =>
    $dark ? "#1b1b1b" : "#fafafa"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 14px;

  transition:
    background 0.3s ease,
    color 0.3s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: ${({ $dark }) =>
    $dark ? "#777777" : "#999999"};

    transition: color 0.3s ease;
  }

  &:focus {
    background: ${({ $dark }) =>
    $dark ? "#202020" : "#ffffff"};

    border-color: ${({ $accent }) =>
    $accent};

    box-shadow: ${({ $accent }) =>
    `0 0 0 3px ${$accent}26`};
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
  width: 92px;
  height: 37px;

  margin: 4px auto 0;

  border: none;
  border-radius: 8px;

  background: ${({ $accent }) =>
    $accent};

  color: #111111;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  box-shadow: ${({ $accent }) =>
    `0 5px 15px ${$accent}40`};

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ $accent }) =>
    `color-mix(
        in srgb,
        ${$accent} 82%,
        black
      )`};

    transform: translateY(-1px);

    box-shadow: ${({ $accent }) =>
    `0 7px 18px ${$accent}59`};
  }

  &:active {
    transform: translateY(0);
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
  margin: 17px 0 0;

  color: ${({ $dark }) =>
    $dark ? "#888888" : "#888888"};

  font-size: 12px;

  text-align: center;

  transition: color 0.35s ease;

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
  color: ${({ $accent, $dark }) =>
    $accent ||
    ($dark ? "#ffffff" : "#111111")};

  font-weight: 700;

  text-decoration: none;

  transition: color 0.25s ease;

  &:hover {
    color: ${({ $accent }) =>
    `color-mix(
        in srgb,
        ${$accent} 75%,
        black
      )`};
  }
`;

export const PasswordWrapper = styled.div`
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
    color 0.25s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ $accent }) =>
    $accent};
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