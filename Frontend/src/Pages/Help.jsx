import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Popup from "../Components/Popup";
import {
  HelpContainer,
  FirstSection,
  SecondSection,
  ThirdSection,
} from "./styles/Help";

const Help = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Navbar />
      <HelpContainer>
        <FirstSection>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
          <h1>Como podemos ajudar?</h1>
          <input type="text" placeholder="Buscar" />
          <div>
            <p>
              <span>COMO ENTRAR</span>
              <small onClick={() => setButtonPopup(true)}>
                Não consigo redefinir a senha
              </small>
            </p>
            <p>
              <span>PLANOS DISPONÍVEIS</span>
              <small onClick={() => setButtonPopup(true)}>
                Criar ou entrar em um plano Família
              </small>
            </p>
            <p>
              <span>COMO ENTRAR</span>
              <small onClick={() => setButtonPopup(true)}>
                Não lembro minhas informações de login
              </small>
            </p>
            <p>
              <span>COMO ENTRAR</span>
              <small onClick={() => setButtonPopup(true)}>
                Ajuda para entrar com o Facebook
              </small>
            </p>
          </div>
        </FirstSection>
        <SecondSection>
          <ul>
            Ajuda com pagamentos
            <li>Gerenciar pagamentos</li>
            <li>Formas de Pagamentos</li>
            <li>Ajuda com a cobrança</li>
          </ul>
          <ul>
            Ajuda com a conta
            <li>Como entrar</li>
            <li>Ajuda com o perfil</li>
            <li>Configurações da conta</li>
            <li>Segurança</li>
          </ul>
          <ul>
            Ajuda com o plano
            <li>Planos disponíveis</li>
            <li>Preferências do plano</li>
            <li>Premium Família e Kids</li>
            <li>Premium Duo</li>
            <li>Premium Universitário</li>
          </ul>
          <ul>
            Ajuda com o app
            <li>Como começar</li>
            <li>Preferências do app</li>
            <li>Solução de problemas</li>
            <li>Playlists</li>
            <li>Recursos</li>
            <li>Recursos de redes sociais</li>
            <li>Assistentes de voz</li>
          </ul>
          <ul>
            Ajuda com dispositivos
            <li>Alto-falantes</li>
            <li>Smartwatches</li>
            <li>TVs</li>
            <li>Videogames</li>
            <li>Carros</li>
          </ul>
          <ul>
            Privacidade e Dados
            <li>Privacidade de reprodução</li>
            <li>Informações de privacidade e dados</li>
          </ul>
        </SecondSection>
        <ThirdSection>
          <h1>Visite a Comunidade</h1>
          <p>
            Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs
            especialistas do mundo todo!
          </p>
          <button>Encontre respostas</button>
        </ThirdSection>
      </HelpContainer>
      <Footer />
    </>
  );
};

export default Help;
