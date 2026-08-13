import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 564px) {
    height: 70px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    height: 82px;
    padding: 0 64px;
  }
`;

export const Logo = styled.a`
  width: 34px;
  height: 22px;
  display: flex;
  align-items: center;
  text-decoration: none;

  img {
    width: 50px;
    height: 50px;
    display: block;
    object-fit: contain;
  }

  @media screen and (min-width: 564px) {
    width: 54px;
    height: 36px;

    img {
      width: 54px;
      height: 36px;
    }
  }

  @media screen and (min-width: 1160px) {
    width: 82px;
    height: 56px;

    img {
      width: 82px;
      height: 56px;
    }
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 564px) {
    display: flex;
    align-items: center;
    gap: 46px;
    margin-left: 40px;
    margin-right: auto;
  }

  @media screen and (min-width: 1160px) {
    gap: 42px;
    margin-left: 150px;
  }
`;

export const NavLink = styled.a`
  position: relative;
  color: #111111;
  font-size: 10px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: #ff9d4d;
  }

  @media screen and (min-width: 1160px) {
    font-size: 14px;
  }
`;

export const Actions = styled.div`
  display: none;

  @media screen and (min-width: 564px) {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  @media screen and (min-width: 1160px) {
    gap: 20px;
  }
`;

export const SignUpButton = styled.button`
  width: 74px;
  height: 38px;
  border: none;
  border-radius: 9px;
  background: #ffb36c;
  color: #111111;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ffa451;
  }

  @media screen and (min-width: 564px) {
    width: auto;
    height: auto;
    padding: 8px 16px;
  }

  @media screen and (min-width: 1160px) {
    width: 74px;
    height: 38px;
    padding: 0;
    font-size: 13px;
  }
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  background: #f5f5f5;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 1160px) {
    width: 42px;
    height: 42px;
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  background: none;
  color: #111111;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  @media screen and (min-width: 564px) {
    display: none;
  }
`;

export const MobileNavigation = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: 268px;
  display: flex;
  justify-content: space-between;
  padding: 48px 50px 40px;
  background: #e9e9e9;
  box-sizing: border-box;
  z-index: 999;

  box-shadow: inset 0 20px 30px rgba(0, 0, 0, 0.25); 
  @media screen and (min-width: 564px) {
    display: none;
  }
`;

export const MobileLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 36px;

  ${NavLink} {
    font-size: 16px;
    font-weight: 500;
    color: #111111;

    &::after {
      display: none;
    }
  }
`;

export const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const MobileUserIcon = styled.div`
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 50%;
  background: #59698f;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MobileSignUpButton = styled.button`
  width: 110px;
  height: 44px;
  border: none;
  border-radius: 14px;
  background: #ffb36c;
  color: #111111;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ffa451;
  }
`;