import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 650px;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #111111;
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
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`;

export const Info = styled.div`
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Description = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;
  text-align: right;
`;

export const Divider = styled.div`
  width: 2px;
  height: 110px;
  flex-shrink: 0;
  background: #ffffff;
`;

export const DateBlock = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.15;
  text-align: left;

  sup {
    position: relative;
    top: -3px;
    font-size: 12px;
  }
`;

export const SearchWrapper = styled.form`
  width: 625px;
  height: 42px;
  margin-top: 90px;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  min-width: 0;
  height: 42px;
  padding: 0 20px;
  border: none;
  outline: none;
  background: #ffffff;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  width: 42px;
  height: 42px;
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
    width: 20px;
    height: 20px;
  }
`;