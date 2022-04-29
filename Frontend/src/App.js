import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
