import React, { useState } from "react";
import { Wrapper, Container } from "./styles/YourPlaylists";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Api } from "../Services/Api";

import { Navigate } from "react-router-dom";

const YourPlaylists = () => {
  const initialValues = {
    name: "",
    cover: "",
    // tracks: [
    //   {
    //     name: "",
    //     audio: "",
    //   },
    // ],
  };

  const [playlistForm, setPlaylist] = useState(initialValues);

  const handleChange = (e) => {
    setPlaylist({ ...playlistForm, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(playlistForm);

    Api.post("/playlists/create", playlistForm)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const confirmAdd = () => {
    alert("Playlist adicionada!").then(() => {
      <Navigate to="/playlists" />;
    });
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
              value={playlistForm.name}
              onChange={handleChange}
            />

            <label>Capa da playlist:</label>
            <input
              type="text"
              placeholder="insira a url de uma capa"
              name="cover"
              value={playlistForm.cover}
              onChange={handleChange}
            />

            <button type="submit" onClick={confirmAdd}>
              salvar
            </button>
          </form>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default YourPlaylists;
