import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  padding: 50px 52px;
  box-sizing: border-box;
  overflow: hidden;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const NewsContainer = styled.div`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
`;

export const NewsContent = styled.div`
  opacity: 0;
  transform: translateY(30px);

  transition:
    opacity 1s ease,
    transform 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const NewsLabel = styled.span`
  display: none;
`;

export const NewsTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

export const NewsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  width: 100%;
  margin: 48px 0 28px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const NewsCard = styled.article`
  width: 100%;
  min-width: 0;
`;

export const NewsCardImage = styled.img`
  display: block;

  width: 100%;
  height: 250px;

  object-fit: cover;

  border-radius: 14px;

  background: #eeeeee;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1100px) {
    height: 280px;
  }

  @media (max-width: 600px) {
    height: 240px;
  }
`;

export const NewsCardTitle = styled.h3`
  margin: 24px 0 0;

  color: #111111;

  font-size: 19px;
  font-weight: 500;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NewsButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 48px;
  padding: 0 40px;

  border: none;
  border-radius: 12px;

  background: #ffb36c;
  color: #111111;

  font-size: 16px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  &:hover {
    background: #ffa45a;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 179, 108, 0.3);
  }

  &:active {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    transform: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;