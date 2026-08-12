import styled from "styled-components";

export const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  background: #ffffff;
  color: #111111;

  box-sizing: border-box;
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