import styled from "styled-components";

export const WeeklySection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 15px auto 0;
  padding: 27px 35px 35px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #e9e9e9;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  animation: weeklyIn 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  @keyframes weeklyIn {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 768px) {
    width: calc(100% - 30px);
    max-width: 700px;
    margin: 20px auto 0;
    padding: 22px 20px 28px;
    border-radius: 17px;
  }
  @media (max-width: 550px) {
    width: calc(100% - 20px);
    margin: 15px auto 0;
    padding: 18px 12px 22px;
    border-radius: 14px;
  }
`;

export const WeeklyHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  @media (max-width: 550px) {
    margin-bottom: 14px;
  }
`;

export const WeeklyTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;

export const WeeklyCity = styled.p`
  margin: 6px 0 0;
  color: #666666;
  font-size: 13px;
  font-weight: 400;
  @media (max-width: 550px) {
    margin-top: 4px;
    font-size: 12px;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: #111111;
  cursor: pointer;
  box-sizing: border-box;
  transition: background 0.2s ease, transform 0.2s ease;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    font-size: 26px;
    font-weight: 300;
    line-height: 25px;
    transform: translate(-50%, -53%);
    transition: transform 0.2s ease;
  }
  &:hover {
    background: rgba(255, 179, 108, 0.35);
  }
  &:hover span {
    transform: translate(-50%, -53%) scale(1.1);
  }
  &:active span {
    transform: translate(-50%, -53%) scale(0.9);
  }
  @media (max-width: 550px) {
    width: 32px;
    height: 32px;
    span {
      font-size: 23px;
    }
  }
`;

export const ForecastList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  @media (max-width: 550px) {
    gap: 7px;
  }
`;

export const ForecastRow = styled.div`
  width: 100%;
  min-height: 43px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px minmax(0, 1fr);
  align-items: center;
  padding: 0 42px;
  box-sizing: border-box;
  border-radius: 10px;
  background: #dcdcdc;
  color: #111111;
  transition: background 0.2s ease, transform 0.2s ease;
  &:hover {
    background: #d6d6d6;
    transform: translateX(2px);
  }
  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr) 190px minmax(0, 1fr);
    min-height: 46px;
    padding: 0 20px;
  }
  @media (max-width: 650px) {
    grid-template-columns: minmax(0, 1fr) 150px minmax(0, 1fr);
    padding: 0 15px;
  }
  @media (max-width: 550px) {
    grid-template-columns: minmax(0, 1fr) auto;
    min-height: 54px;
    padding: 0 12px;
    border-radius: 8px;
  }
`;

export const ForecastDate = styled.div`
  min-width: 0;
  color: #111111;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 650px) {
    font-size: 13px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

export const ForecastWeather = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  @media (max-width: 550px) {
    gap: 5px;
  }
`;

export const WeatherIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  flex-shrink: 0;
  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 380px) {
    width: 36px;
    height: 36px;
  }
`;

export const Temperature = styled.span`
  color: #111111;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  @media (max-width: 650px) {
    font-size: 13px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

export const Description = styled.div`
  min-width: 0;
  color: #111111;
  font-size: 14px;
  font-weight: 400;
  text-align: right;
  text-transform: lowercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 650px) {
    font-size: 13px;
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Loading = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 14px;
  @media (max-width: 550px) {
    min-height: 220px;
    font-size: 13px;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  min-height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
  font-size: 14px;
  text-align: center;
  @media (max-width: 550px) {
    min-height: 220px;
    padding: 0 20px;
    font-size: 13px;
  }
`;