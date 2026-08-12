import styled from "styled-components";

export const WeatherSection = styled.section`
  width: 100%;

  padding: 45px 0 60px;

  background: #ffffff;

  box-sizing: border-box;
`;

export const WeatherListWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 70px;

  padding: 0 20px;

  box-sizing: border-box;

  @media (max-width: 950px) {
    flex-wrap: wrap;

    gap: 40px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    gap: 25px;
  }
`;

export const WeatherCard = styled.article`
  position: relative;

  width: 375px;
  height: 500px;

  flex-shrink: 0;

  padding: 16px 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-sizing: border-box;

  border-radius: 18px;

  background: #e9e9e9;
`;

export const CardTop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const City = styled.span`
  color: #111111;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;
`;

export const Country = styled.span`
  color: #111111;

  font-size: 16px;
  font-weight: 400;

  line-height: 1;

  text-align: right;
`;

export const Time = styled.div`
  margin-top: 24px;

  color: #111111;

  font-size: 28px;
  font-weight: 400;

  line-height: 1;
`;

export const ForecastButtons = styled.div`
  margin-top: 17px;

  display: flex;
  align-items: center;

  gap: 30px;
`;

export const ForecastButton = styled.button`
  width: 134px;
  height: 34px;

  padding: 0;

  border: none;
  border-radius: 11px;

  background: #ffb36c;
  color: #111111;

  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const DateInfo = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 13px;

  color: #111111;

  font-size: 14px;
  font-weight: 400;

  line-height: 1;
`;

export const DateDivider = styled.span`
  width: 1px;
  height: 18px;

  background: #111111;
`;

export const WeatherIcon = styled.img`
  width: 125px;
  height: 125px;

  margin-top: 17px;

  object-fit: contain;
`;

export const Temperature = styled.div`
  margin-top: 3px;

  color: #111111;

  font-size: 36px;
  font-weight: 400;

  line-height: 1;
`;

export const CardActions = styled.div`
  width: 100%;

  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ActionButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;

    stroke-width: 2;
  }

  &:hover {
    transform: rotate(180deg);
  }
`;

export const FavoriteButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: #ff4141;

  cursor: pointer;

  svg {
    width: 31px;
    height: 31px;

    stroke-width: 1.8;

    fill: ${(props) =>
      props.$active
        ? "#ff4141"
        : "transparent"};
  }
`;

export const MoreButton = styled.button`
  width: 116px;
  height: 33px;

  padding: 0;

  border: none;
  border-radius: 11px;

  background: #ffb36c;
  color: #111111;

  font-size: 12px;
  font-weight: 400;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #ffa451;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const DeleteButton = styled.button`
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;
  color: #111111;

  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;

    stroke-width: 2;
  }

  &:hover {
    color: #ff4141;
  }
`;