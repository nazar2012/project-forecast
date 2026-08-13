import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 82px;
  box-sizing: border-box;

  @media screen and (max-width: 563px) {
    padding-top: 70px;
  }
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