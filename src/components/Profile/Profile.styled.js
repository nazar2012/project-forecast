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

  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`;

export const ProfileWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 350px;

  padding: 21px 25px;

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 14px;

  box-sizing: border-box;

  box-shadow: 0 20px 55px rgba(0, 0, 0, 0.18);

  animation: profileAppear 0.2s ease;

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

  /* TABLET */
  @media screen and (min-width: 564px) {
    max-width: 370px;
    padding: 20px 25px;
  }

  /* DESKTOP */
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

  background: #f7f7f7;
  color: #333333;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #eeeeee;
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

  color: #111111;

  font-size: 23px;
  font-weight: 800;

  letter-spacing: -0.5px;
  text-align: center;

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

  border: 3px solid #ffffff;
  border-radius: 50%;

  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.12);
`;

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #ffb36c;
  color: #111111;

  font-size: 30px;
  font-weight: 800;

  box-shadow: 0 7px 20px rgba(255, 179, 108, 0.25);

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

  border: 2px solid #ffffff;
  border-radius: 50%;

  background: #ffb36c;
  color: #111111;

  cursor: pointer;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: scale(1.08);
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

  border: 1px solid #eeeeee;
  border-radius: 8px;

  background: #fafafa;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #ffffff;
    border-color: #ffcfaa;
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

  color: #999999;

  font-size: 9px;
  font-weight: 600;

  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media screen and (min-width: 1160px) {
    margin-bottom: 4px;
    font-size: 10px;
  }
`;

export const Value = styled.div`
  color: #111111;

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

  border: 1px solid #dddddd;
  border-radius: 6px;

  outline: none;

  background: #ffffff;
  color: #111111;

  font-size: 12px;

  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #ffb36c;

    box-shadow: 0 0 0 2px rgba(255, 179, 108, 0.15);
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

  background: #ffb36c;
  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
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

  background: #ffb36c;
  color: #111111;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
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

  border: 1px solid #ff6b6b;
  border-radius: 7px;

  background: #ffffff;
  color: #ff6b6b;

  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ff6b6b;
    color: #ffffff;

    transform: translateY(-1px);
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