import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ModalForm from "../Components/ModalForm";

import { Api } from "../Services/Api";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  PlaylistDetailsWrapper,
  PlaylistDetailsContainer,
  EditForm,
  EditButton,
  DeleteButton,
} from "./styles/PlaylistDetails";

import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState({
    cover: "",
    tracks: [{ name: "", audio: "" }],
  });
  const [updatedPlaylist, setUpdatedPlaylist] = useState({ playlist });

  const trackName = playlist.tracks.map((track) => track.name);
  const trackAudio = playlist.tracks.map((track) => track.audio);

  console.log(trackName, trackAudio);

  const { _id } = useParams();

  const params = new URLSearchParams([["id", _id]]);

  const handleChange = (e) => {
    setUpdatedPlaylist({
      ...updatedPlaylist,
      [e.target.name]: e.target.value.trim(),
    });
  };

  useEffect(() => {
    Api.get("/playlists", { params }).then(({ data }) => {
      setPlaylist(data);

      // console.log(data);
    });
  }, []);

  // PUT
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(updatedPlaylist);

    Api.put(`/playlists/${_id}`, updatedPlaylist)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(updatedPlaylist);

    window.location.reload();
  };

  // DELETE
  const handleDelete = () => {
    Api.delete(`/playlists/${_id}`).then(() =>
      console.log("Deletado com sucesso")
    );
  };

  return (
    <>
      <Navbar />
      <PlaylistDetailsWrapper>
        <h2>
          Esta é a playlist <span>{playlist.name}</span>
        </h2>

        <PlaylistDetailsContainer>
          <div>
            <img src={playlist.cover} alt="playlist cover" />
            <section>
              {playlist.tracks.map((track) => {
                return (
                  <ul key={playlist._id}>
                    <li>
                      {track.name}
                      <audio controls="controls">
                        <source src={track.audio} type="audio/mpeg" />
                      </audio>
                    </li>
                  </ul>
                );
              })}
            </section>
          </div>

          {/* <ModalForm /> */}

          <section>
            {" "}
            <EditButton>
              Editar <FaEdit />
            </EditButton>
            <DeleteButton onClick={handleDelete}>
              Deletar <MdDelete />
            </DeleteButton>
          </section>

          <EditForm onSubmit={handleSubmit}>
            <label>Nome da playlist:</label>
            <input
              type="text"
              placeholder="insira o novo nome"
              name="name"
              value={updatedPlaylist.name}
              onChange={handleChange}
            />

            <label>Capa da playlist:</label>
            <input
              type="text"
              placeholder="insira a nova url de capa"
              name="cover"
              value={updatedPlaylist.cover}
              onChange={handleChange}
            />

            <label>Adicione um música:</label>
            <input
              type="text"
              placeholder="insira o nome da música"
              name="cover"
           //   value={updatedPlaylist.tracks.map((track) => track.name)}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="insira a url da música"
              name="cover"
          //    value={updatedPlaylist.tracks.map((track) => track.audio)}
              onChange={handleChange}
            />
            <button type="submit">salvar</button>
          </EditForm>
        </PlaylistDetailsContainer>
      </PlaylistDetailsWrapper>
      <Footer />
    </>
  );
};

export default PlaylistDetails;
