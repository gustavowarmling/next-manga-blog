import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
        font-font: size 93.75%
    }
    @media (max-width: 720px) {
        font-font: size 87.5%;
    }
  }

  body {
    background: #0D1017;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }
`