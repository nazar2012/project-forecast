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

export const UserArea = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 4px 5px 4px 14px;

  min-height: 42px;

  border-radius: 999px;

  background: ${({ theme }) =>
    `${theme.background}B8`};

  border: 1px solid
    ${({ theme }) =>
    `${theme.text}18`};

  box-shadow:
    0 4px 16px
      rgba(0, 0, 0, 0.08),
    inset 0 1px 0
      rgba(255, 255, 255, 0.16);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  cursor: pointer;

  user-select: none;

  transition:
    transform 0.28s ease,
    background 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) =>
    `${theme.background}D6`};

    border-color: ${({ theme }) =>
    `${theme.accent}44`};

    box-shadow:
      0 8px 24px
        rgba(0, 0, 0, 0.13),
      0 0 0 1px
        ${({ theme }) =>
    `${theme.accent}18`},
      inset 0 1px 0
        rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;

    box-shadow:
      0 0 0 2px
        ${({ theme }) =>
    `${theme.accent}55`},
      0 8px 24px
        rgba(0, 0, 0, 0.12);
  }
`;

export const UserName = styled.span`
  max-width: 135px;

  color: ${({ theme }) =>
    theme.text};

  font-size: 13px;
  font-weight: 500;

  line-height: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;

  transition:
    color 0.25s ease,
    opacity 0.25s ease;

  ${UserArea}:hover & {
    opacity: 0.9;
  }
`;

export const UserIcon = styled.div`
  width: 34px;
  height: 34px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) =>
    theme.secondary};

  overflow: hidden;

  position: relative;

  border: 1px solid
    ${({ theme }) =>
    `${theme.text}20`};

  box-shadow:
    0 2px 8px
      rgba(0, 0, 0, 0.1);

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;

  ${UserArea}:hover & {
    transform: scale(1.04);

    box-shadow:
      0 3px 12px
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
    `${theme.background}E6`};

  color: ${({ theme }) =>
    theme.text};

  border-top: 1px solid
    ${({ theme }) =>
    `${theme.text}12`};

  box-shadow:
    0 8px 24px
    rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

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

export const MobileUserInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  padding: 4px 5px 4px 13px;

  min-height: 42px;

  border-radius: 999px;

  background: ${({ theme }) =>
    `${theme.background}B8`};

  border: 1px solid
    ${({ theme }) =>
    `${theme.text}18`};

  box-shadow:
    0 4px 16px
      rgba(0, 0, 0, 0.08),
    inset 0 1px 0
      rgba(255, 255, 255, 0.16);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  cursor: pointer;

  user-select: none;

  transition:
    transform 0.28s ease,
    background 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease;

  &:hover {
    transform: translateY(-2px);

    background: ${({ theme }) =>
    `${theme.background}D6`};

    border-color: ${({ theme }) =>
    `${theme.accent}44`};

    box-shadow:
      0 8px 24px
        rgba(0, 0, 0, 0.13),
      0 0 0 1px
        ${({ theme }) =>
    `${theme.accent}18`},
      inset 0 1px 0
        rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: none;

    box-shadow:
      0 0 0 2px
        ${({ theme }) =>
    `${theme.accent}55`},
      0 8px 24px
        rgba(0, 0, 0, 0.12);
  }
`;

export const MobileUserName = styled.span`
  max-width: 120px;

  color: ${({ theme }) =>
    theme.text};

  font-size: 13px;
  font-weight: 500;

  line-height: 1;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  text-align: center;
`;

export const MobileUserIcon = styled.div`
  width: 36px;
  height: 36px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: ${({ theme }) =>
    theme.secondary};

  overflow: hidden;

  border: 1px solid
    ${({ theme }) =>
    `${theme.text}20`};

  box-shadow:
    0 2px 8px
      rgba(0, 0, 0, 0.1);

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;

  ${MobileUserInfo}:hover & {
    transform: scale(1.04);

    box-shadow:
      0 3px 12px
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