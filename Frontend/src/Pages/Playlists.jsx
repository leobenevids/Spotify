import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  PlaylistsWrapper,
  PlaylistsContainer,
  PlaylistCard,
  PlaylistButton,
  DeleteButton,
} from "./styles/Playlists";
import { Api } from "../Services/Api";

import { TbPlaylistAdd } from "react-icons/tb";
import { AiFillDelete } from "react-icons/ai";

const Playlists = () => {
  const [publicPlaylists, setPublicPlaylists] = useState([]);

  useEffect(() => {
    Api.get("playlists").then(({ data }) => {
      setPublicPlaylists(data);
    });
    console.log(publicPlaylists);
  }, [setPublicPlaylists]);

  const handleConfirmDelete = () => {
    window.confirm("Você deseja excluir?");
  };

  return (
    <>
      <Navbar />
      <PlaylistsWrapper>
        <h1>Você tem bom gosto!</h1>
        <PlaylistsContainer>
          {publicPlaylists.map((playlist, key) => {
            return (
              <PlaylistCard key={key}>
                <div>
                  <p>{playlist.name}</p>
                  <DeleteButton
                    onClick={() => {
                      let result = window.confirm(
                        `Deseja excluir ${playlist.name}?`
                      );
                      if (result === true) {
                        Api.delete(`/playlists/${playlist._id}`).then(() => {
                          console.log("Deletado com sucesso");

                          window.location.reload();
                        });
                      }
                    }}
                  >
                    <AiFillDelete />
                  </DeleteButton>
                </div>
                <Link to={`/playlists/${playlist._id}`}>
                  <img src={playlist.cover} alt="playlist cover" />
                </Link>
              </PlaylistCard>
            );
          })}
        </PlaylistsContainer>
        <Link to="/yourplaylists">
          <PlaylistButton>
            <TbPlaylistAdd size={50} />
          </PlaylistButton>
        </Link>
      </PlaylistsWrapper>
      <Footer />
    </>
  );
};

export default Playlists;
