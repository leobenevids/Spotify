import React from "react";
import { PopupContainer } from "./Styles/Popup";

const Popup = (props) => {
  return props.trigger ? (
    <PopupContainer>
      <div>
        <h2>Não consigo redefinir a senha</h2>
        <h3>Endereço de e-mail antigo?</h3>
        <p>
          Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta
          do Spotify para abrir o link de redefinição de senha que nós enviamos.
        </p>
        <p>
          Caso você não tenha acesso, estas são algumas opções:
          <ul>
            <li>Recupere o acesso ao endereço de e-mail, se possível.</li>
            <li>Crie uma nova conta e comece do zero.</li>
          </ul>
        </p>
        <h3>Nenhuma conta associada ao endereço de e-mail?</h3>
        <p>
          Tente inserir qualquer outro endereço de e-mail que você possa ter
          usado para criar uma conta.
        </p>
        <p>
          <b>Observação:</b>existem várias maneiras de criar uma conta: usando
          um e-mail, um número de telefone, o Facebook, a Apple ou o Google.
          Tente fazer login usando essas opções para localizar sua conta.
        </p>
      </div>
      <button onClick={() => props.setTrigger(false)}>X</button>
      {props.children}
    </PopupContainer>
  ) : (
    ""
  );
};

export default Popup;
