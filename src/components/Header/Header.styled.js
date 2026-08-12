import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  padding: 0 64px;
  background: #ffffff;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
`;

export const Logo = styled.a`
  width: 82px;
  height: 56px;
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    width: 82px;
    height: 56px;
    display: block;
    object-fit: contain;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 42px;
  margin-left: 150px;
  margin-right: auto;
`;

export const NavLink = styled.a`
  position: relative;
  color: #111111;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -7px;
    width: 0;
    height: 2px;
    border-radius: 2px;
    background: #ffb36c;
    transition: width 0.2s ease;
  }

  &:hover {
    color: #ff9d4d;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SignUpButton = styled.button`
  width: 74px;
  height: 38px;
  border: none;
  border-radius: 9px;
  background: #ffb36c;
  color: #111111;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:hover {
    background: #ffa451;
    transform: translateY(-1px);
    box-shadow: 0 5px 14px rgba(255, 179, 108, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const UserIcon = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e7e7e7;
  border-radius: 50%;
  background: #f5f5f5;
  color: #555555;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffb36c;
    color: #111111;
    border-color: #ffb36c;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;