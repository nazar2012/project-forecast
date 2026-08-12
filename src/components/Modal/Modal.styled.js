import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 430px;
  padding: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 18px;
  box-sizing: border-box;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);
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
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
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
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  outline: none;
  background: #fafafa;
  color: #111111;
  font-size: 15px;
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
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 6px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  background: #ffb36c;
  color: #111111;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(255, 179, 108, 0.25);

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(255, 179, 108, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const LoginText = styled.p`
  margin: 22px 0 0;
  color: #888888;
  font-size: 14px;
  text-align: center;

  
`;

export const LoginLink = styled.a`
  color: #111111;
  font-weight: 700;

  &:hover {
    color: #ff9d4d;
  }
`;