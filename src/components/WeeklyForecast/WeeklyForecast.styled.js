import styled from "styled-components";

export const WeeklySection = styled.section`
  width: 100%;
  max-width: 1200px;

  margin: 15px auto 0;

  padding: 27px 35px 35px;

  box-sizing: border-box;

  border-radius: 20px;

  background: #e9e9e9;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.06);

  animation: weeklyIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

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
    margin-top: 20px;

    padding: 22px 22px 28px;

    border-radius: 17px;
  }
`;

export const WeeklyHeader = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 18px;
`;

export const WeeklyTitle = styled.h2`
  margin: 0;

  color: #111111;

  font-size: 16px;
  font-weight: 500;

  line-height: 1.2;
`;

export const WeeklyCity = styled.p`
  margin: 6px 0 0;

  color: #666666;

  font-size: 13px;
  font-weight: 400;
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

  transition:
    background 0.2s ease,
    transform 0.2s ease;

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
    transform:
      translate(-50%, -53%)
      scale(1.1);
  }

  &:active span {
    transform:
      translate(-50%, -53%)
      scale(0.9);
  }
`;

export const ForecastList = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 9px;
`;

export const ForecastRow = styled.div`
  width: 100%;
  min-height: 43px;

  display: grid;

  grid-template-columns:
    1fr 240px 1fr;

  align-items: center;

  padding: 0 42px;

  box-sizing: border-box;

  border-radius: 10px;

  background: #dcdcdc;

  color: #111111;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #d6d6d6;

    transform: translateX(2px);
  }

  @media (max-width: 768px) {
    grid-template-columns:
      1fr 160px 1fr;

    padding: 0 20px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr 100px;

    min-height: 52px;

    padding: 0 12px;
  }
`;

export const ForecastDate = styled.div`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  text-align: left;
`;

export const ForecastWeather = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 9px;
`;

export const WeatherIcon = styled.img`
  width: 48px;
  height: 48px;

  object-fit: contain;

  flex-shrink: 0;
`;

export const Temperature = styled.span`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  white-space: nowrap;
`;

export const Description = styled.div`
  color: #111111;

  font-size: 14px;
  font-weight: 400;

  text-align: right;

  text-transform: lowercase;

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
`;

export const ErrorMessage = styled.div`
  width: 100%;
  min-height: 280px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 14px;
`;