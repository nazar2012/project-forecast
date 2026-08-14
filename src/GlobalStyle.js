import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: 90px;
}

body {
  margin: 0;

  background: ${({ theme }) =>
    theme.background};

  color: ${({ theme }) =>
    theme.text};

  transition:
    background-color 0.6s ease,
    color 0.6s ease;

  font-family:
    "Poppins",
    sans-serif;
}

  button,
  input {
    font-family: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
`;