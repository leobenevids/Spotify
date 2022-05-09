import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FormWrapper, FormContainer } from "./styles/SignIn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignIn = () => {
 

  return (
    <>
      <Navbar />
      <FormWrapper>
        <FormContainer>
          <div>
            <h3>Para continuar, faça login no Spotify.</h3>
            <button className="whiteButton">
              <FcGoogle size={20} />
              <p>Continuar com o google</p>
            </button>
            <small>Endereço de e-mail ou nome de usuário</small>
            <input placeholder="Endereço de e-mail ou nome de usuário" />
            <small>Senha</small>
            <input placeholder="Senha" />
            <button>Entrar</button>
            <hr />
          </div>
          <div>
            <h3>Não tem uma conta?</h3>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className="whiteButton">inscrever-se no spotify</button>
            </Link>
          </div>
        </FormContainer>
      </FormWrapper>
      <Footer />
    </>
  );
};

export default SignIn;
