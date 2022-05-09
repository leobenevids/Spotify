import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { AuthProvider } from "./Providers/Auth";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <Routes />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
