import React from "react";
import "./Styles/GlobalStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
