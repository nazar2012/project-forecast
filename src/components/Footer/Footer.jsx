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

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoWrapper>
          <Logo src={logo} alt="247 forecast" />
        </LogoWrapper>

        <InfoBlock>
          <Title>Address</Title>

          <Address>
            Svobody str. 35
            <br />
            Kyiv
            <br />
            Ukraine
          </Address>
        </InfoBlock>

        <InfoBlock className="contacts">
          <Title>Contact us</Title>

          <Socials>
            <SocialLink
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon
                src={instagram}
                alt="Instagram"
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
              />
            </SocialLink>
          </Socials>
        </InfoBlock>
      </FooterContainer>
    </FooterWrapper>
  );
}