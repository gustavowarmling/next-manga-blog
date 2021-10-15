import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
        --main-color: #A92C2B;

        --blue-300: #202b36;
        --blue-500: #141924;
        --blue-900: #0D1017;
        --title: #F4F5F6;
        --subtitle: #C5CED3;
        --description: #96a7b0;
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
    color: var(--title);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--title);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Poppins", sans-serif;
  }

  ::selection {
    background: var(--main-color);
    color: var(--title);
  }

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
        width: 100%;
        max-width: 40rem;
        background: var(--blue-500);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
`;
