import styled from "styled-components";

export const ForecastSection = styled.section`
  width: 100%;
  max-width: 1150px;

  margin: 10px auto 0;

  padding: 22px 30px 30px;

  box-sizing: border-box;

  border-radius: 18px;

  background: #e9e9e9;

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.06);

  animation: forecastIn 0.45s
    cubic-bezier(0.22, 1, 0.36, 1);

  @keyframes forecastIn {
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

    padding: 18px 18px 22px;

    border-radius: 15px;
  }
`;

export const ForecastHeader = styled.div`
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;
`;

export const ForecastTitle = styled.h2`
  margin: 0;

  color: #111111;

  font-size: 20px;
  font-weight: 500;

  line-height: 1.2;
`;

export const ForecastCity = styled.p`
  margin: 5px 0 0;

  color: #666666;

  font-size: 12px;
  font-weight: 400;
`;

export const CloseButton = styled.button`
  width: 34px;
  height: 34px;

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

    width: 24px;
    height: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;

    font-size: 25px;
    font-weight: 300;
    line-height: 24px;

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

export const ChartWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 330px;

  margin-top: 5px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 270px;
  }
`;

export const ForecastLoading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 13px;
`;

export const ForecastError = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #666666;

  font-size: 13px;
`;