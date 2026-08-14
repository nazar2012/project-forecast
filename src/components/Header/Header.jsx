import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import {
  HeaderWrapper,
  Logo,
  Navigation,
  NavLink,
  Actions,
  DesktopThemeToggle,
  SignUpButton,
  UserIcon,
  UserAvatar,
  MobileMenuButton,
  MobileNavigation,
  MobileMenuContent,
  MobileLinks,
  MobileActions,
  MobileUserIcon,
  MobileSignUpButton,
  MobileTheme,
} from "./Header.styled";

export default function Header({
  user,
  avatar,
  onSignUp,
  onProfile,
  darkMode,
  onToggle,
}) {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <HeaderWrapper $scrolled={isScrolled}>
      <Logo
        href="/"
        $dark={darkMode}
        $scrolled={isScrolled}
      >
        <img
          src={logo}
          alt="24 forecast"
        />
      </Logo>

      <Navigation>
        <NavLink href="#about">
          Who we are
        </NavLink>

        <NavLink href="#contacts">
          Contacts
        </NavLink>

        <NavLink href="#menu">
          Menu
        </NavLink>
      </Navigation>

      <DesktopThemeToggle>
        <ThemeToggle
          darkMode={darkMode}
          onToggle={onToggle}
        />
      </DesktopThemeToggle>

      <Actions>
        {!user && (
          <SignUpButton
            type="button"
            onClick={onSignUp}
          >
            Sign up
          </SignUpButton>
        )}

        <UserIcon
          onClick={onProfile}
          role="button"
          tabIndex={0}
          aria-label="Open profile"
        >
          {avatar ? (
            <UserAvatar
              src={avatar}
              alt="Profile"
            />
          ) : (
            <img
              src={userIcon}
              alt="Profile"
            />
          )}
        </UserIcon>
      </Actions>

      <MobileMenuButton
        type="button"
        onClick={() =>
          setMenu((prev) => !prev)
        }
      >
        Menu
        {menu ? " →" : " ↓"}
      </MobileMenuButton>

      <MobileNavigation $open={menu}>
        <MobileMenuContent>
          <MobileLinks>
            <NavLink href="#about">
              Who we are
            </NavLink>

            <NavLink href="#contacts">
              Contacts
            </NavLink>

            <NavLink href="#menu">
              Menu
            </NavLink>
          </MobileLinks>

          <MobileActions>
            <MobileUserIcon onClick={onProfile}>
              {avatar ? (
                <UserAvatar
                  src={avatar}
                  alt="Profile"
                />
              ) : (
                <img
                  src={userIcon}
                  alt="Profile"
                />
              )}
            </MobileUserIcon>

            {!user && (
              <MobileSignUpButton
                type="button"
                onClick={onSignUp}
              >
                Sign Up
              </MobileSignUpButton>
            )}
          </MobileActions>
        </MobileMenuContent>

        <MobileTheme>
          <ThemeToggle
            darkMode={darkMode}
            onToggle={onToggle}
          />
        </MobileTheme>
      </MobileNavigation>
    </HeaderWrapper>
  );
}