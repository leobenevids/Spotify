import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Wrapper } from "./styles/SignUp";
import { Api } from "../Services/Api";

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const [userForm, setUserForm] = useState(initialValues);

  const handleChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Api.post("/users/create", userForm)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <h2>Inscreva-se grátis e comece a curtir.</h2>

          <div>
            <label>Como devemos chamar você?</label>
            <input
              type="text"
              placeholder="Insira um nome de perfil."
              name="name"
              value={userForm.name}
              onChange={handleChange}
            />
            <small>Isso será exibido no seu perfil</small>
          </div>

          <div>
            <label>Qual é o seu e-mail?</label>
            <input
              type="email"
              placeholder="Insira seu e-mail."
              name="email"
              value={userForm.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Confirme seu e-mail</label>
            <input
              type="email"
              placeholder="Insira o e-mail novamente."
              name="emailconfirm"
            />
          </div>

          <div>
            <label>Crie uma senha</label>
            <input
              type="password"
              placeholder="Crie uma senha."
              name="password"
              value={userForm.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Inscrever-se</button>
        </form>
      </Wrapper>
      <Footer />
    </>
  );
};

export default SignUp;
