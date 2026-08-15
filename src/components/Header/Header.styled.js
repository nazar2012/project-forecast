import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  min-height: ${({ $scrollingDown }) =>
    $scrollingDown ? "54px" : "72px"};

  display: flex;
  align-items: center;

  padding: ${({ $scrollingDown }) =>
    $scrollingDown ? "0 26px" : "0 40px"};

  z-index: 1000;

  box-sizing: border-box;

  background: ${({ theme, $scrolled }) =>
    $scrolled
      ? `${theme.background}E6`
      : theme.background};

  color: ${({ theme }) =>
    theme.text};

  box-shadow: ${({ $scrolled }) =>
    $scrolled
      ? "0 6px 22px rgba(0, 0, 0, 0.16)"
      : "0 4px 16px rgba(0, 0, 0, 0.12)"};

  backdrop-filter: ${({ $scrolled }) =>
    $scrolled
      ? "blur(14px)"
      : "blur(0px)"};

  -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled
      ? "blur(14px)"
      : "blur(0px)"};

  transition:
    min-height 0.35s ease,
    padding 0.35s ease,
    background 0.35s ease,
    color 0.3s ease,
    box-shadow 0.35s ease,
    backdrop-filter 0.5s ease,
    -webkit-backdrop-filter 0.5s ease;

  @media (max-width: 768px) {
    min-height: ${({ $scrollingDown }) =>
    $scrollingDown ? "52px" : "64px"};

    padding: ${({ $scrollingDown }) =>
    $scrollingDown ? "0 14px" : "0 20px"};

    backdrop-filter: ${({ $scrolled }) =>
    $scrolled
      ? "blur(12px)"
      : "blur(0px)"};

    -webkit-backdrop-filter: ${({ $scrolled }) =>
    $scrolled
      ? "blur(12px)"
      : "blur(0px)"};
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;

  img {
    width: 82px;
    height: 56px;

    display: block;

    filter: ${({ $dark }) =>
    $dark
      ? "brightness(0) invert(1)"
      : "none"};

    transition:
      transform 0.3s ease,
      filter 0.3s ease,
      width 0.35s ease,
      height 0.35s ease;
  }

  &:hover img {
    transform:
      translateY(-2px)
      scale(1.06);
  }

  &:active img {
    transform:
      translateY(0)
      scale(0.98);
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  gap: 30px;

  margin-left: 130px;
  margin-right: auto;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-left: 35px;
    gap: 22px;
  }
`;

export const NavLink = styled.a`
  position: relative;

  color: ${({ theme }) =>
    theme.text};

  font-size: 14px;
  font-weight: 400;

  text-decoration: none;

  padding: 5px 0;

  transition:
    color 0.25s ease,
    opacity 0.25s ease,
    transform 0.25s ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;

    background: ${({ theme }) =>
    theme.button};

    border-radius: 10px;

    transform: scaleX(0);
    transform-origin: center;

    transition:
      transform 0.3s ease;
  }

  &:hover {
    opacity: 1;

    transform:
      translateY(-1px);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:active {
    transform:
      translateY(0);
  }

  @media (max-width: 768px) {
    opacity: ${({ $open }) =>
    $open ? 1 : 0};

    transform: ${({ $open }) =>
    $open
      ? "translateY(0)"
      : "translateY(8px)"};

    ${({ $open, $mobileIndex }) =>
    $open &&
    `
        transition-delay:
          ${0.05 + $mobileIndex * 0.06}s;
      `}
  }
`;

export const DesktopThemeToggle = styled.div`
  display: flex;
  align-items: center;

  margin-right: 25px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1100px) {
    margin-right: 18px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SignUpButton = styled.button`
  height: 36px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: ${({ theme }) =>
    theme.button};

  color: #111111;

  font-size: 13px;
  font-weight: 400;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      translateY(-2px)
      scale(1.03);

    box-shadow:
      0 8px 20px
      rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform:
      scale(0.94);

    box-shadow:
      0 2px 6px
      rgba(0, 0, 0, 0.1);
  }
`;

export const UserIcon = styled.div`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) =>
    theme.secondary};

  cursor: pointer;
  overflow: hidden;

  position: relative;

  transition:
    transform 0.25s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: scale(1.08);

    box-shadow:
      0 0 0 3px
        ${({ theme }) =>
    `${theme.accent}33`},
      0 0 18px
        ${({ theme }) =>
    `${theme.accent}88`},
      0 5px 20px
        rgba(0, 0, 0, 0.18);
  }

  &:active {
    transform: scale(0.96);
  }

  &::after {
    content: "";

    position: absolute;

    inset: -2px;

    border-radius: 50%;

    border: 1px solid
      ${({ theme }) =>
    theme.accent};

    opacity: 0;

    transform: scale(0.8);

    transition:
      opacity 0.3s ease,
      transform 0.3s ease;

    pointer-events: none;
  }

  &:hover::after {
    opacity: 0.7;

    transform: scale(1);
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;

    position: relative;
    z-index: 2;
  }
`;

export const UserAvatar = styled.img`
  width: 100% !important;
  height: 100% !important;

  display: block;

  object-fit: cover;
  object-position: center;

  border-radius: 50%;
`;

export const MobileMenuButton = styled.button`
  display: none;

  margin-left: auto;

  border: none;

  background: transparent;

  color: ${({ theme }) =>
    theme.text};

  font-size: 14px;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    opacity 0.2s ease;

  .menu-arrow {
    display: inline-block;

    margin-left: 3px;

    transition:
      transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);

    opacity: 0.7;
  }

  &:active {
    transform: scale(0.94);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNavigation = styled.div`
  position: absolute;

  top: 100%;
  left: 0;

  width: 100%;

  padding: 20px;

  box-sizing: border-box;

  background: ${({ theme }) =>
    theme.background};

  color: ${({ theme }) =>
    theme.text};

  border-top: 1px solid
    ${({ theme }) =>
    theme.secondary};

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.12);

  z-index: 100;

  transform-origin: top;

  transform: ${({ $open }) =>
    $open
      ? "translateY(0) scaleY(1)"
      : "translateY(-18px) scaleY(0.96)"};

  opacity: ${({ $open }) =>
    $open ? 1 : 0};

  visibility: ${({ $open }) =>
    $open
      ? "visible"
      : "hidden"};

  filter: ${({ $open }) =>
    $open
      ? "blur(0)"
      : "blur(5px)"};

  pointer-events: ${({ $open }) =>
    $open ? "auto" : "none"};

  transition:
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.25s ease,
    filter 0.35s ease,
    visibility 0.35s ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuContent = styled.div`
  display: grid;

  grid-template-columns: 1fr auto;

  align-items: start;

  column-gap: 20px;
`;

export const MobileLinks = styled.nav`
  display: flex;

  flex-direction: column;

  gap: 15px;

  a {
    opacity: ${({ children }) =>
    children ? undefined : 1};
  }
`;

export const MobileActions = styled.div`
  display: flex;

  flex-direction: column;

  align-items: flex-end;

  gap: 15px;

  opacity: ${({ $open }) =>
    $open ? 1 : 0};

  transform: ${({ $open }) =>
    $open
      ? "translateX(0)"
      : "translateX(12px)"};

  transition:
    opacity 0.35s ease 0.2s,
    transform 0.4s
      cubic-bezier(0.22, 1, 0.36, 1)
      0.2s;
`;

export const MobileUserIcon = styled.div`
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) =>
    theme.secondary};

  cursor: pointer;
  overflow: hidden;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.06);

    box-shadow:
      0 5px 15px
      rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;
  }
`;

export const MobileSignUpButton = styled.button`
  height: 36px;

  padding: 0 18px;

  border: none;
  border-radius: 10px;

  background: ${({ theme }) =>
    theme.button};

  color: #111111;

  font-size: 13px;

  cursor: pointer;

  box-shadow:
    0 4px 12px
    rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform:
      translateY(-2px)
      scale(1.03);

    box-shadow:
      0 8px 20px
      rgba(0, 0, 0, 0.14);
  }

  &:active {
    transform: scale(0.94);

    box-shadow:
      0 2px 6px
      rgba(0, 0, 0, 0.1);
  }
`;

export const MobileTheme = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  margin-top: 20px;

  opacity: ${({ $open }) =>
    $open ? 1 : 0};

  transform: ${({ $open }) =>
    $open
      ? "translateY(0)"
      : "translateY(8px)"};

  transition:
    opacity 0.35s ease 0.35s,
    transform 0.35s ease 0.35s;
`;