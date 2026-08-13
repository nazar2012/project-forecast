import styled from "styled-components";

export const NewsSection = styled.section`
  width: 100%;
  padding: 50px 52px;
  box-sizing: border-box;
  overflow: hidden;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 40px 30px;
  }

  @media (max-width: 600px) {
    padding: 30px 15px;
  }

  @media (max-width: 380px) {
    padding: 25px 12px;
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

export const NewsTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 21px;
  }

  @media (max-width: 380px) {
    font-size: 19px;
  }
`;

export const CategoryButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 30px;
  margin-bottom: 38px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 8px;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`;

export const CategoryButton = styled.button`
  height: 42px;
  padding: 0 20px;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "#ffb36c"
        : "#dddddd"};

  border-radius: 999px;

  background: ${({ $active }) =>
    $active
      ? "#ffb36c"
      : "#ffffff"};

  color: #111111;

  font-size: 15px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    border-color: #ffb36c;
    transform: translateY(-2px);

    box-shadow:
      0 6px 16px
      rgba(255, 179, 108, 0.2);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    height: 38px;
    padding: 0 15px;
    font-size: 14px;
  }
`;

export const NewsCards = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(4, minmax(0, 1fr));

  gap: 24px;

  margin: 0 0 28px;

  @media (max-width: 1100px) {
    grid-template-columns:
      repeat(3, minmax(0, 1fr));

    gap: 22px;
  }

  @media (max-width: 850px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 24px 18px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 28px;
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

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 1100px) {
    height: 230px;
  }

  @media (max-width: 850px) {
    height: 250px;
  }

  @media (max-width: 600px) {
    height: 240px;
    border-radius: 12px;
  }

  @media (max-width: 380px) {
    height: 210px;
  }
`;

export const NewsCardTitle = styled.h3`
  margin: 20px 0 0;

  color: #111111;

  font-size: 19px;
  font-weight: 500;
  line-height: 1.25;

  @media (max-width: 900px) {
    font-size: 18px;
    margin-top: 16px;
  }

  @media (max-width: 600px) {
    font-size: 17px;
    margin-top: 14px;
  }

  @media (max-width: 380px) {
    font-size: 16px;
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

    box-shadow:
      0 8px 20px
      rgba(255, 179, 108, 0.3);
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

    flex-shrink: 0;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 280px;

    height: 46px;

    padding: 0 25px;

    font-size: 15px;
  }

  @media (max-width: 380px) {
    max-width: 100%;
    height: 44px;
    font-size: 14px;
  }
`;