import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FormWrapper, FormContainer } from "./styles/SignIn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import { AuthContext } from "../Contexts/Auth";

const SignIn = () => {
  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited: ", { email, password });
    login(email, password);
  };

  return (
    <>
      <Navbar />
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <h3>Para continuar, faça login no Spotify.</h3>
            <p>{String(authenticated)}</p>
            <button className="whiteButton">
              <FcGoogle size={20} />
              <p>Continuar com o google</p>
            </button>
            <small>Endereço de e-mail ou nome de usuário</small>
            <input
              placeholder="Endereço de e-mail ou nome de usuário"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small>Senha</small>
            <input
              placeholder="Senha"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
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
