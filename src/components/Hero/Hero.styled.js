import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  min-height: 560px;
  margin: 0;
  overflow: visible;
  display: flex;
  justify-content: center;
  background: #111111;

  @media screen and (min-width: 564px) {
    height: calc(100vh - 70px);
    min-height: 600px;
  }

  @media screen and (min-width: 1160px) {
    height: calc(100vh - 82px);
    min-height: 650px;
  }
`;

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.48);
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 16px;

  @media screen and (min-width: 564px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1160px) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 564px) {
    font-size: 36px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 42px;
  }
`;

export const Info = styled.div`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 564px) {
    margin-top: 45px;
    gap: 30px;
  }

  @media screen and (min-width: 1160px) {
    margin-top: 55px;
    gap: 40px;
  }
`;

export const Description = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-align: right;

  @media screen and (min-width: 564px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1160px) {
    font-size: 20px;
    line-height: 1.15;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 75px;
  flex-shrink: 0;
  background: #ffffff;

  @media screen and (min-width: 564px) {
    height: 90px;
  }

  @media screen and (min-width: 1160px) {
    height: 110px;
  }
`;

export const DateBlock = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;

  sup {
    position: relative;
    top: -2px;
    font-size: 9px;
  }

  @media screen and (min-width: 564px) {
    font-size: 17px;

    sup {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 1160px) {
    font-size: 20px;
    line-height: 1.15;

    sup {
      top: -3px;
      font-size: 12px;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: calc(100% - 20px);
  max-width: 420px;
  margin-top: 55px;

  @media screen and (min-width: 564px) {
    width: 520px;
    max-width: 100%;
    margin-top: 70px;
  }

  @media screen and (min-width: 1160px) {
    width: 625px;
    margin-top: 90px;
  }
`;

export const SearchWrapper = styled.form`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: stretch;

  overflow: hidden;

  border-radius: 8px;

  background: #ffffff;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 564px) {
    height: 42px;
  }

  @media screen and (min-width: 1160px) {
    height: 42px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  min-width: 0;
  height: 40px;

  padding: 0 14px;

  border: none;
  outline: none;

  background: #ffffff;
  color: #222222;

  font-size: 12px;
  font-weight: 400;

  box-sizing: border-box;

  &::placeholder {
    color: #999999;
  }

  @media screen and (min-width: 564px) {
    height: 42px;
    padding: 0 18px;
    font-size: 13px;
  }

  @media screen and (min-width: 1160px) {
    padding: 0 20px;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: #ffb36c;
  color: #111111;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 564px) {
    width: 42px;
    height: 42px;

    svg {
      width: 19px;
      height: 19px;
    }
  }

  @media screen and (min-width: 1160px) {
    width: 42px;
    height: 42px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Suggestions = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 260px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  z-index: 100;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ffa451;
  }
`;

export const Suggestion = styled.button`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 12px;

  padding: 10px 14px;

  border: none;

  background: #ffffff;
  color: #111111;

  text-align: left;

  cursor: pointer;

  transition: background 0.2s ease;

  svg {
    width: 17px;
    height: 17px;

    flex-shrink: 0;

    color: #ff9d4d;
  }

  &:hover {
    background: #f5f5f5;
  }

  @media screen and (min-width: 564px) {
    padding: 12px 16px;

    gap: 13px;
  }
`;

export const SuggestionText = styled.span`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 3px;
`;

export const SuggestionCity = styled.span`
  color: #111111;

  font-size: 13px;
  font-weight: 600;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 14px;
  }
`;

export const SuggestionCountry = styled.span`
  color: #888888;

  font-size: 11px;
  font-weight: 400;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 564px) {
    font-size: 12px;
  }
`;

export const SuggestionLoading = styled.div`
  padding: 13px 16px;

  color: #888888;

  font-size: 12px;

  text-align: center;
`;