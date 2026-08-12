import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(17, 17, 17, 0.45);
  backdrop-filter: blur(5px);
`;

export const ProfileWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  padding: 42px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 20px;
  box-sizing: border-box;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);

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
`;

export const Title = styled.h2`
  margin: 0 0 30px;
  color: #111111;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.8px;
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  display: block;
  object-fit: cover;
  border: 4px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
`;

export const AvatarPlaceholder = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffb36c;
  color: #111111;
  font-size: 44px;
  font-weight: 800;
  box-shadow: 0 8px 25px rgba(255, 179, 108, 0.25);
`;

export const UploadButton = styled.label`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
  border-radius: 50%;
  background: #ffb36c;
  color: #111111;
  cursor: pointer;

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;

    transform: scale(1.08);
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoItem = styled.div`
  padding: 14px 16px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background: #fafafa;

  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    background: #ffffff;
    border-color: #ffcfaa;
  }
`;

export const Label = styled.div`
  margin-bottom: 6px;
  color: #999999;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Value = styled.div`
  color: #111111;
  font-size: 15px;
  font-weight: 600;
  word-break: break-word;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 12px;
  border: 1px solid #dddddd;
  border-radius: 7px;
  outline: none;
  background: #ffffff;
  color: #111111;
  font-size: 15px;
  box-sizing: border-box;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    border-color: #ffb36c;

    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.15);
  }
`;

export const EditButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  color: #111111;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;

    transform: translateY(-1px);
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 8px;
  background: #ffb36c;
  color: #111111;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;

    transform: translateY(-1px);
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 12px;
  border: 1px solid #ff6b6b;
  border-radius: 8px;
  background: #ffffff;
  color: #ff6b6b;
  font-size: 15px;
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
`;