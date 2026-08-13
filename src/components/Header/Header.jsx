import { useState } from "react";

import logo from "../../assets/logo.png";
import userIcon from "../../assets/user.png";

import {
  HeaderWrapper,
  Logo,
  Navigation,
  NavLink,
  Actions,
  SignUpButton,
  UserIcon,
  UserAvatar,
  MobileMenuButton,
  MobileNavigation,
  MobileLinks,
  MobileActions,
  MobileUserIcon,
  MobileSignUpButton,
} from "./Header.styled";

export default function Header({
  user,
  avatar,
  onSignUp,
  onProfile,
}) {
  const [menu, setMenu] = useState(false);

  return (
    <HeaderWrapper>
      <Logo href="/">
        <img src={logo} alt="24 forecast" />
      </Logo>

      <Navigation>
        <NavLink href="#about">Who we are</NavLink>
        <NavLink href="#contacts">Contacts</NavLink>
        <NavLink href="#menu">Menu</NavLink>
      </Navigation>

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
            <UserAvatar src={avatar} alt="Profile" />
          ) : (
            <img src={userIcon} alt="Profile" />
          )}
        </UserIcon>
      </Actions>

      <MobileMenuButton
        type="button"
        onClick={() => setMenu((prev) => !prev)}
      >
        Menu
        {menu ? " →" : " ↓"}
      </MobileMenuButton>
      {menu && (
        <MobileNavigation>
          <MobileLinks>
            <NavLink href="#about">Who we are</NavLink>
            <NavLink href="#contacts">Contacts</NavLink>
            <NavLink href="#menu">Menu</NavLink>
          </MobileLinks>

          <MobileActions>
            <MobileUserIcon onClick={onProfile}>
              {avatar ? (
                <UserAvatar src={avatar} alt="Profile" />
              ) : (
                <img src={userIcon} alt="Profile" />
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
        </MobileNavigation>
      )}
    </HeaderWrapper>
  );
}