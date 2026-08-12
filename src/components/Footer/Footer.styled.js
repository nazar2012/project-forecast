import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #ffb56b;
  color: #111111;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 190px;
  margin: 0 auto;
  padding: 42px 70px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 1000px) {
    padding: 40px 50px;
    gap: 50px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 30px;
    gap: 35px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;
`;

export const Logo = styled.img`
  width: 82px;
  height: 56px;
  object-fit: contain;
  display: block;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;
`;

export const Title = styled.h3`
  margin: 0 0 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;
`;

export const Address = styled.p`
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.6;
  color: #111111;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;
`;

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  display: block;
`;