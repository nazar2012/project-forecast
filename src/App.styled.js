import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;

  background: ${({ theme }) =>
    theme.background};

  color: ${({ theme }) =>
    theme.text};

  transition:
    background-color 0.6s ease,
    color 0.6s ease;

  overflow-x: hidden;
`;

export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 82px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px 64px;

  box-sizing: border-box;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(255, 179, 108, 0.08),
      transparent 30%
    ),
    #ffffff;
`;