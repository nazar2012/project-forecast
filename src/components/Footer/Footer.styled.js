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
  padding: 10px 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 564px) {
    padding: 40px 50px;

    gap: 50px;
  }

  @media screen and (min-width: 1160px) {
    padding: 10px 70px;
    gap: 30px;
  }

  @media screen and (max-width: 563px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    column-gap: 35px;
    row-gap: 30px;
    padding: 35px 30px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;

  @media screen and (max-width: 563px) {
    min-width: 0;
    grid-column: 1;
    grid-row: 1;
  }
`;

export const Logo = styled.img`
  width: 82px;
  height: 56px;
  object-fit: contain;
  display: block;

  @media screen and (max-width: 563px) {
    width: 75px;

    height: 52px;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 170px;
  @media screen and (max-width: 563px) {
    min-width: 0;
  }

  &.contacts {
    @media screen and (max-width: 563px) {
      grid-column: 1 / -1;
      grid-row: 2;
      align-items: center;
      justify-self: center;
      text-align: center;
    }
  }
`;

export const Title = styled.h3`
  margin: 0 0 12px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #111111;

  @media screen and (max-width: 563px) {
    font-size: 15px;
  }
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

  &:hover {
    transform: translateY(-3px);
  }
`;

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  display: block;
`;