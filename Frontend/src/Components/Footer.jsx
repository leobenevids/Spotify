import React from "react";
import logo from "../Assets/Images/logo.png";
import brazil from "../Assets/Images/brazil.png";
import {
  FooterWrapper,
  FooterContent,
  Socials,
  FooterInfo,
  Rights,
} from "./Styles/Footer.js";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const current = new Date();
const date = `${current.getDate()}/0${
  current.getMonth() + 1
}/${current.getFullYear()}`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <img src={logo} alt="spotify-logo" />
        <ul>
          <p>Empresa</p>
          <li>Sobre</li>
          <li>Empregos</li>
          <li>For the record</li>
        </ul>

        <ul>
          <p>Comunidades</p>
          <li>Para Artistas</li>
          <li>Desenvolvedores</li>
          <li>Marcas</li>
          <li>Investidores</li>
          <li>Fornecedores</li>
        </ul>

        <ul>
          <p>Links úteis</p>
          <li>Ajuda</li>
          <li>Player da Web</li>
          <li>Aplicativo móvel grátis</li>
        </ul>

        <Socials>
          <i>
            <AiOutlineInstagram />
          </i>
          <i>
            <AiOutlineTwitter />
          </i>
          <i>
            <AiOutlineFacebook />
          </i>
        </Socials>
      </FooterContent>

      <FooterInfo>
        <ul>
          <li>Legal</li>
          <li>Centro de Privacidade</li>
          <li>Política de privacidade</li>
          <li>Cookies</li>
          <li>Sobre anúncios</li>
        </ul>

        <Rights>
          <div>
            <p>Brasil</p>
            <img src={brazil} alt="brazil-flag" />
          </div>
          <p>&copy; {date} Spotify</p>
        </Rights>
      </FooterInfo>
    </FooterWrapper>
  );
};

export default Footer;
