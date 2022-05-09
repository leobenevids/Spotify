import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FormContainer, FormWrapper } from "./styles/SignUp";
import axios from "axios";
import { AuthContext } from "../Providers/Auth";

const url = "http://localhost:5000";

const SignUp = () => {
  const { user, setUser } = React.useContext(AuthContext);
  console.log(user);

  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    axios.post(`${url}/userList`, formValues).then((res) => console.log(res));
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).lenght === 0 && isSubmit) {
      // axios.post(`${url}/userList`, formValues).then((res) => console.log(res));
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Nome de usuário obrigatório";
    }
    if (!values.email) {
      errors.email = "Email obrigatório";
    } else if (!regex.test(values.email)) {
      errors.email = "Este não é um formato válido de e-mail";
    }
    if (!values.password) {
      errors.password = "Senha obrigatória";
    } else if (values.password.length < 4) {
      errors.password = "A senha deve ser maior que 4 caracteres";
    } else if (values.password.length > 10) {
      errors.password = "A senha não deve ser maior que 10 caracteres";
    }
    if (!values.emailconfirm) {
      errors.emailconfirm = "Confirmação de e-mail obrigatória";
    } else if (values.emailconfirm != values.email) {
      errors.emailconfirm = "Os e-mails não coincidem";
    }

    return errors;
  };

  return (
    <>
      <Navbar />
      <FormWrapper>
        <FormContainer onSubmit={handleSubmit}>
          <h2>Inscreva-se grátis e comece a curtir.</h2>
          <div>
            <p>Qual é o seu e-mail?</p>
            <input
              type="email"
              placeholder="Insira seu e-mail."
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <i>{formErrors.email}</i>
          </div>
          <div>
            <p>Confirme seu e-mail</p>
            <input
              type="email"
              placeholder="Insira o e-mail novamente."
              name="emailconfirm"
              value={formValues.emailconfirm}
              onChange={handleChange}
            />
            <i>{formErrors.emailconfirm}</i>
          </div>
          <div>
            <p>Crie uma senha</p>
            <input
              type="password"
              placeholder="Crie uma senha."
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <i>{formErrors.password}</i>
          </div>
          <div>
            <p>Como devemos chamar você?</p>
            <input
              type="text"
              placeholder="Insira um nome de perfil."
              id="name"
              name="username"
              value={formValues.username}
              onChange={handleChange}
            />
            <small>Isso será exibido no seu perfil</small>
            <i>{formErrors.username}</i>
          </div>
          <button>Inscrever-se</button>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="success">Signed in successfully!</div>
          ) : (
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
          )}{" "}
        </FormContainer>
      </FormWrapper>
      <Footer />
    </>
  );
};

export default SignUp;
