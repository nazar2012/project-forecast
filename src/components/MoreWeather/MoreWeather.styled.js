import styled from "styled-components";

export const MoreWeatherSection =
  styled.section`
    position: relative;

    width: 100%;
    max-width: 668px;

    margin: 35px auto 0;
    padding: 24px 45px;

    box-sizing: border-box;

    border-radius: 10px;

    background: #e9e9e9;

    animation: showMoreWeather 0.3s ease;

    @keyframes showMoreWeather {
      from {
        opacity: 0;
        transform: translateY(10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

export const MoreWeatherHeader =
  styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-bottom: 18px;
  `;

export const MoreWeatherTitle =
  styled.h2`
    margin: 0;

    font-size: 18px;
    font-weight: 500;

    color: #111;
  `;

export const MoreWeatherCity =
  styled.p`
    margin: 4px 0 0;

    font-size: 13px;

    color: #555;
  `;

export const CloseButton =
  styled.button`
    width: 32px;
    height: 32px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
    border-radius: 50%;

    background: transparent;

    color: #111;

    cursor: pointer;

    font-size: 22px;

    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: #d5d5d5;

      transform: rotate(90deg);
    }
  `;

export const MoreWeatherGrid =
  styled.div`
    display: grid;

    grid-template-columns:
      repeat(3, 170px);

    grid-template-rows:
      repeat(2, 127px);

    gap: 23px 34px;

    justify-content: center;
  `;

export const MoreWeatherCard =
  styled.div`
    width: 170px;
    height: 127px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-start;

    padding-top: 12px;

    box-sizing: border-box;

    border-radius: 6px;

    background: rgb(217, 217, 217);
  `;

export const MoreWeatherLabel =
  styled.span`
    font-size: 11px;

    line-height: 1;

    color: #111;

    margin-bottom: 7px;
  `;

export const MoreWeatherValue =
  styled.span`
    font-size: 19px;

    line-height: 1;

    color: #111;
  `;

export const MoreWeatherIcon =
  styled.div`
    margin-top: 9px;

    height: 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    img {
      width: 55px;
      height: 55px;

      object-fit: contain;
    }
  `;

export const Loading =
  styled.div`
    min-height: 276px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #555;
  `;

export const ErrorMessage =
  styled.div`
    min-height: 276px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #555;
  `;