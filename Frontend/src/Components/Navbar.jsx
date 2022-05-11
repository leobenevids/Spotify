import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/logo.png";
import { NavbarWrapper, NavbarContainer } from "./Styles/Navbar.js";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Link to="/">
          <img src={logo} alt="spotify-logo" />
        </Link>
        <ul>
          <li>
            <Link to="/playlists">Playlists</Link>
          </li>
          <li>
            <Link to="/help">Suporte</Link>
          </li>
          <li>
            <Link to="/signup">Inscrever-se</Link>
          </li>
          <li>
            <Link to="/signin">Entrar</Link>
          </li>
          <li>
            <Link to="/yourplaylists">Suas Playlists</Link>
          </li>
        </ul>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
