import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "GothamMedium";
    src: url("../Assets/Fonts/GothamMedium_1.ttf");
  }
  
  @font-face {
    font-family: "GothamThin";
    src: url("../Assets/Fonts/Gotham-Thin.otf");
  }
  
  @font-face {
    font-family: "GothamLight";
    src: url("../Assets/Fonts/GothamLight.ttf");
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "GothamMedium", sans-serif;
  }
  
  :root {
    --default-green: #1db954;
    --light-green: #1ed760;
    --default-blue: #2d46b9;
    --default-gray: #919496;
    --default-red: #ff6961;
  }

  button {
    background: var(--default-green);
  color: white;
  text-transform: uppercase;
  padding: 15px 60px;
  border: none;
  border-radius: 30px;
  letter-spacing: 1px;
  font-weight: bold;
  transition: all 300ms ease;
  }
  
  button:hover {
    background: var(--light-green);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.3s ease;
  }
  
`;

export default GlobalStyle;