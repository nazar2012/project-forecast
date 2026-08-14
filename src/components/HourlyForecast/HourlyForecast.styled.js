import styled from "styled-components";

export const ForecastSection = styled.section`
  width: 100%;
  max-width: 1150px;
  margin: 10px auto 0;
  padding: 22px 30px 30px;
  box-sizing: border-box;

  border-radius: 18px;

  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);

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
    width: calc(100% - 30px);
    max-width: 700px;
    margin: 20px auto 0;
    padding: 20px 20px 25px;
    border-radius: 16px;
  }

  @media (max-width: 600px) {
    padding: 18px 16px 22px;
    border-radius: 14px;
  }

  @media (max-width: 450px) {
    width: calc(100% - 20px);
    margin: 15px auto 0;
    padding: 16px 10px 18px;
    border-radius: 12px;
  }
`;

export const ForecastHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 10px;

  @media (max-width: 450px) {
    margin-bottom: 8px;
  }
`;

export const ForecastTitle = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.text};

  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 18px;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const ForecastCity = styled.p`
  margin: 5px 0 0;

  color: ${({ theme }) => theme.muted};

  font-size: 12px;
  font-weight: 400;

  @media (max-width: 450px) {
    margin-top: 4px;
    font-size: 11px;
  }
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
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  box-sizing: border-box;
  transition:
    background 0.25s ease,
    color 0.25s ease;

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
    transform: translate(-50%, -53%) rotate(0deg);
    transform-origin: center;
    transition:
      transform 0.3s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.button};
    transform: rotate(90deg);
  }

  @media (max-width: 450px) {
    width: 30px;
    height: 30px;

    span {
      width: 22px;
      height: 22px;
      font-size: 22px;
    }
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

  @media (max-width: 600px) {
    height: 250px;
  }

  @media (max-width: 450px) {
    height: 220px;
    margin-top: 2px;
  }

  @media (max-width: 360px) {
    height: 200px;
  }
`;

export const ForecastLoading = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.muted};
  font-size: 13px;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

export const ForecastError = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.muted};

  font-size: 13px;
  text-align: center;

  @media (max-width: 450px) {
    padding: 0 15px;
    font-size: 12px;
  }
`;