import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

html,body {
  height:100%;
}

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #BE3455;
  }

  body, input, button, a {
    font: 1rem 'Roboto Condensed', sans-serif;
    border: none;
    text-decoration: none;
    color: #F9F9F9;
  }

  button {
    cursor: pointer;
  }

`;
