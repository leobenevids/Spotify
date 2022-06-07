import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Wrapper } from "./styles/SignIn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <form>
          <h3>Para continuar, faça login no Spotify.</h3>
          <button className="whiteButton">
            <FcGoogle size={20} />
            <p>Continuar com o google</p>
          </button>

          <label>Endereço de e-mail ou nome de usuário</label>
          <input
            placeholder="Endereço de e-mail ou nome de usuário"
            type="email"
            name="email"
            id="email"
          />

          <label>Senha</label>
          <input
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
          />

          <button type="submit">Entrar</button>

          <hr />

          <div>
            <h3>Não tem uma conta?</h3>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="whiteButton">inscrever-se no spotify</button>
            </Link>
          </div>
        </form>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SignIn;
