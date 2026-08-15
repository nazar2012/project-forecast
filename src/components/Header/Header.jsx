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
  onGame,
  darkMode,
  onToggle,
}) {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 80
      ) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }

      if (currentScrollY <= 40) {
        setIsScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  const handleGameClick = (event) => {
    event.preventDefault();

    if (onGame) {
      onGame();
    }

    setMenu(false);
  };

  return (
    <HeaderWrapper
      $scrolled={isScrolled}
      $scrollingDown={isScrollingDown}
    >
      <Logo
        href="/"
        $dark={darkMode}
        $scrolled={isScrolled}
        $scrollingDown={isScrollingDown}
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

        <NavLink
          href="#game"
          onClick={handleGameClick}
        >
          🎮 Game
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
        $open={menu}
        onClick={() =>
          setMenu((prev) => !prev)
        }
      >
        Menu

        <span className="menu-arrow">
          {menu ? "↑" : "↓"}
        </span>
      </MobileMenuButton>

      <MobileNavigation $open={menu}>
        <MobileMenuContent>
          <MobileLinks>
            <NavLink
              href="#about"
              $mobileIndex={0}
              $open={menu}
            >
              Who we are
            </NavLink>

            <NavLink
              href="#contacts"
              $mobileIndex={1}
              $open={menu}
            >
              Contacts
            </NavLink>

            <NavLink
              href="#menu"
              $mobileIndex={2}
              $open={menu}
            >
              Menu
            </NavLink>

            <NavLink
              href="#game"
              onClick={handleGameClick}
              $mobileIndex={3}
              $open={menu}
            >
              🎮 Game
            </NavLink>
          </MobileLinks>

          <MobileActions $open={menu}>
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

        <MobileTheme $open={menu}>
          <ThemeToggle
            darkMode={darkMode}
            onToggle={onToggle}
          />
        </MobileTheme>
      </MobileNavigation>
    </HeaderWrapper>
  );
}