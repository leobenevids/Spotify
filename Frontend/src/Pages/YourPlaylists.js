import React, { useState, useEffect } from "react";
import { Wrapper } from "./styles/YourPlaylists";
import axios from 'axios'

const url = "http://localhost:5000"

const YourPlaylists = () => {
  const [formValues, setFormValues] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${url}/userplaylist`, formValues).then((res) => console.log(res));
  };

  return (
    <Wrapper>
      <h1>Suas Playlists</h1>
      <h2>Cadastre sua playlist</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nome da playlist"
          value={formValues.playlistname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="capa da playlist"
          value={formValues.playlistcover}
          onChange={handleChange}
        />
        <form>
          <input
            type="text"
            placeholder="música"
            value={formValues.playlistmusic}
            onChange={handleChange}
          />
        </form>
        <button>Salvar</button>
      </form>
    </Wrapper>
  );
};

export default YourPlaylists;
