import { createGlobalStyle } from "styled-components"
import * as Styles from "./variables"

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: ${Styles.magnolia}
  }

  #root {
    @media (min-width: 65em) {
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`