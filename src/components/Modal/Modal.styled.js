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

  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 360px;

  padding: 30px;

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 15px;

  box-sizing: border-box;

  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.18);

  animation: modalAppear 0.2s ease;

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

  /* Планшет */
  @media screen and (min-width: 564px) {
    max-width: 450px;
    padding: 38px;
    border-radius: 17px;
  }

  /* Десктоп */
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

  background: #f7f7f7;
  color: #333333;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #eeeeee;
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

  color: #111111;

  font-size: 25px;
  font-weight: 800;

  letter-spacing: -0.5px;
  text-align: center;

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

  border: 1px solid #dddddd;
  border-radius: 8px;

  outline: none;

  background: #fafafa;
  color: #111111;

  font-size: 14px;

  box-sizing: border-box;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #999999;
  }

  &:focus {
    background: #ffffff;
    border-color: #ffb36c;

    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.15);
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

  background: #ffb36c;
  color: #111111;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  box-shadow: 0 5px 15px rgba(255, 179, 108, 0.25);

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
    box-shadow: 0 7px 18px rgba(255, 179, 108, 0.35);
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
  color: #111111;
  font-weight: 700;

  &:hover {
    color: #ff9d4d;
  }
`;