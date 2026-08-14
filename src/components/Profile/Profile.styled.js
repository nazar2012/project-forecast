import styled from "styled-components";

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
      ? "rgba(0, 0, 0, 0.7)"
      : "rgba(17, 17, 17, 0.45)"};

  backdrop-filter: blur(5px);
  transition:
    background 0.35s ease;
`;

export const ProfileWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 350px;

  padding: 21px 25px;

  background: ${({ $dark }) =>
    $dark ? "#111111" : "#ffffff"};

  border: 1px solid
    ${({ $dark }) =>
    $dark ? "#292929" : "#eeeeee"};

  border-radius: 14px;

  box-sizing: border-box;

  box-shadow: ${({ $dark }) =>
    $dark
      ? "0 20px 55px rgba(0, 0, 0, 0.5)"
      : "0 20px 55px rgba(0, 0, 0, 0.18)"};

  animation: profileAppear 0.25s ease;

  transition:
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  @keyframes profileAppear {
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
    max-width: 370px;
    padding: 20px 25px;
  }

  @media screen and (min-width: 1160px) {
    max-width: 450px;
    padding: 32px 36px;
    border-radius: 18px;
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
    transform 0.25s ease;

  &:hover {
    background: ${({ $dark }) =>
    $dark ? "#303030" : "#eeeeee"};
    transform: rotate(90deg);
  }
  @media screen and (min-width: 1160px) {
    top: 14px;
    right: 14px;
    width: 34px;
    height: 34px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 13px;

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 23px;
  font-weight: 800;

  letter-spacing: -0.5px;

  text-align: center;

  transition: color 0.35s ease;

  @media screen and (min-width: 564px) {
    margin-bottom: 12px;
    font-size: 23px;
  }

  @media screen and (min-width: 1160px) {
    margin-bottom: 20px;
    font-size: 29px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;

  width: 76px;
  height: 76px;

  margin: 0 auto 13px;

  @media screen and (min-width: 564px) {
    width: 80px;
    height: 80px;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1160px) {
    width: 105px;
    height: 105px;
    margin-bottom: 20px;
  }
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  border: 3px solid
    ${({ $dark }) =>
    $dark ? "#111111" : "#ffffff"};

  border-radius: 50%;

  box-shadow:
    0 7px 20px
    rgba(0, 0, 0, 0.12);
`;

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) => theme.button};
  color: #111111;

  font-size: 30px;
  font-weight: 800;

  box-shadow:
    0 7px 20px
    ${({ theme }) => `${theme.button}40`};

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;

  @media screen and (min-width: 564px) {
    font-size: 32px;
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
    $dark ? "#111111" : "#ffffff"};

  border-radius: 50%;

  background: ${({ theme }) => theme.button};
  color: #111111;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0, 0, 0, 0.12);

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.button};
    transform: scale(1.1) rotate(5deg);

    box-shadow:
      0 6px 16px
      ${({ theme }) => `${theme.button}55`};
  }

  &:active {
    transform: scale(0.96);
  }

  @media screen and (min-width: 564px) {
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 1160px) {
    width: 34px;
    height: 34px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  @media screen and (min-width: 1160px) {
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  padding: 8px 10px;

  border: 1px solid
    ${({ $dark }) =>
    $dark ? "#303030" : "#eeeeee"};

  border-radius: 8px;

  background: ${({ $dark }) =>
    $dark ? "#1b1b1b" : "#fafafa"};

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ $dark }) =>
    $dark ? "#222222" : "#ffffff"};

    border-color: ${({ theme }) =>
    `${theme.button}88`};

    box-shadow:
      0 0 0 2px
      ${({ theme }) =>
    `${theme.button}18`};
  }

  @media screen and (min-width: 564px) {
    padding: 7px 10px;
  }

  @media screen and (min-width: 1160px) {
    padding: 12px 14px;
    border-radius: 10px;
  }
`;

export const Label = styled.div`
  margin-bottom: 2px;

  color: ${({ $dark }) =>
    $dark ? "#777777" : "#999999"};

  font-size: 9px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  transition: color 0.25s ease;

  @media screen and (min-width: 1160px) {
    margin-bottom: 4px;
    font-size: 10px;
  }
`;

export const Value = styled.div`
  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 12px;
  font-weight: 600;

  word-break: break-word;

  transition: color 0.25s ease;

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
    $dark ? "#3a3a3a" : "#dddddd"};

  border-radius: 6px;

  outline: none;

  background: ${({ $dark }) =>
    $dark ? "#222222" : "#ffffff"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#111111"};

  font-size: 12px;

  box-sizing: border-box;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: ${({ $dark }) =>
    $dark ? "#777777" : "#999999"};
  }

  &:focus {
    border-color: ${({ theme }) =>
    theme.button};

    box-shadow:
      0 0 0 2px
      ${({ theme }) =>
    `${theme.button}26`};
  }

  @media screen and (min-width: 564px) {
    height: 32px;
    font-size: 12px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    font-size: 14px;
    padding: 0 12px;
  }
`;

export const EditButton = styled.button`
  width: 100%;
  height: 35px;

  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  border: none;
  border-radius: 7px;

  background: ${({ theme }) => theme.button};
  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.button};
    transform: translateY(-2px);

    box-shadow:
      0 7px 18px
      ${({ theme }) =>
    `${theme.button}45`};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media screen and (min-width: 564px) {
    height: 35px;
    margin-top: 9px;
    font-size: 12px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 35px;

  margin-top: 9px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 6px;

  border: none;
  border-radius: 7px;

  background: ${({ theme }) => theme.button};
  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.button};
    transform: translateY(-2px);

    box-shadow:
      0 7px 18px
      ${({ theme }) =>
    `${theme.button}45`};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media screen and (min-width: 564px) {
    height: 35px;
    margin-top: 9px;
    font-size: 12px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  height: 35px;

  margin-top: 6px;

  border: 1px solid
    ${({ $dark }) =>
    $dark ? "#333333" : "#ff6b6b"};

  border-radius: 7px;

  background: ${({ $dark }) =>
    $dark ? "#111111" : "#ffffff"};

  color: ${({ $dark }) =>
    $dark ? "#ffffff" : "#ff6b6b"};

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border-color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #ff6b6b;
    color: #ffffff;
    border-color: #ff6b6b;

    transform: translateY(-1px);

    box-shadow:
      0 6px 15px
      rgba(255, 107, 107, 0.25);
  }

  &:active {
    transform: translateY(0);
  }

  @media screen and (min-width: 564px) {
    height: 35px;
    font-size: 12px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 10px;
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
    color 0.25s ease,
    transform 0.2s ease;

  &:hover {
    color: ${({ theme }) =>
    theme.button};

    transform: translateY(-50%) scale(1.08);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 564px) {
    right: 9px;

    svg {
      width: 19px;
      height: 19px;
    }
  }

  @media screen and (min-width: 1160px) {
    right: 10px;

    svg {
      width: 21px;
      height: 21px;
    }
  }
`;

export const ColorButton = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid
    ${({ theme }) => theme.button};
  border-radius: 7px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
    theme.button};
    color: #111111;
    transform: translateY(-2px);
    box-shadow:
      0 7px 18px
      ${({ theme }) =>
    `${theme.button}40`};
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }

  @media screen and (min-width: 564px) {
    height: 35px;
    font-size: 12px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
    margin-top: 10px;
    font-size: 14px;
  }
`;