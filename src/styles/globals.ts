import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --blue-300: #202b36;
        --blue-500: #141924;
        --blue-900: #0D1017;
    }
  
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
    background: var(--blue-900);
    color: #fff;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #fff;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }
`