import {
  FooterWrapper,
  FooterContainer,
  LogoWrapper,
  Logo,
  InfoBlock,
  Title,
  Address,
  Socials,
  SocialLink,
  SocialIcon,
} from "./Footer.styled";

import logo from "./photos/qwerty.png";
import instagram from "./photos/instagram.png";
import facebook from "./photos/facebook.png";
import whatsapp from "./photos/whatsapp.png";

export default function Footer({
  darkMode,
  accentColor = "#ffb56b",
}) {
  return (
    <FooterWrapper
      id="contacts"
      $dark={darkMode}
      $accentColor={accentColor}
    >
      <FooterContainer>
        <LogoWrapper>
          <Logo
            src={logo}
            alt="247 forecast"
            $dark={darkMode}
          />
        </LogoWrapper>

        <InfoBlock>
          <Title $dark={darkMode}>
            Address
          </Title>

          <Address $dark={darkMode}>
            Svobody str. 35
            <br />
            Kyiv
            <br />
            Ukraine
          </Address>
        </InfoBlock>

        <InfoBlock className="contacts">
          <Title $dark={darkMode}>
            Contact us
          </Title>

          <Socials>
            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                src={instagram}
                alt="Instagram"
                $dark={darkMode}
              />
            </SocialLink>

            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                src={facebook}
                alt="Facebook"
                $dark={darkMode}
              />
            </SocialLink>

            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                src={whatsapp}
                alt="WhatsApp"
                $dark={darkMode}
              />
            </SocialLink>
          </Socials>
        </InfoBlock>
      </FooterContainer>
    </FooterWrapper>
  );
}