import React, { useState } from "react";
import { Wrapper, Container } from "./styles/YourPlaylists";
import axios from "axios";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const url = "http://localhost:5000";

const YourPlaylists = () => {
  const initialValues = {
    name: "",
    cover: "",
    tracks: [
      {
        name: "",
        audio: "",
      },
    ],
  };

  const [playlist, setPlaylist] = useState(initialValues);

  const handleChange = (e) => {
    setPlaylist({ ...playlist, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(playlist);
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <h2>Cadastre uma playlist</h2>

          <form onSubmit={handleSubmit}>
            <label>Nome da playlist:</label>
            <input
              type="text"
              placeholder="insira o nome da playlist"
              name="name"
              value={playlist.name}
              onChange={handleChange}
            />

            <label>Capa da playlist:</label>
            <input
              type="text"
              placeholder="insira a url de uma capa"
              name="cover"
              value={playlist.cover}
              onChange={handleChange}
            />

            <label>Música:</label>
            <input
              type="text"
              placeholder="insira o nome de uma música"
              name="tracks"
              value={playlist.tracks.name}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="insira a url da música"
              name="tracks"
              value={playlist.tracks.audio}
              onChange={handleChange}
            />

            <button type="submit">salvar</button>
          </form>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default YourPlaylists;
