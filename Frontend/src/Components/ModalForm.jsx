import React from "react";
import { ModalWrapper } from "./Styles/ModalForm";

const ModalForm = () => {
  return (
    <ModalWrapper>
      <div>
        <p>Adicione uma nova música</p>
        <form>
          <label>Nome da música:</label>
          <input type="text" placeholder="insira um nome"></input>
          <label>Url da música:</label>
          <input type="text" placeholder="insira uma url"></input>
          <button>Adicionar</button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default ModalForm;
