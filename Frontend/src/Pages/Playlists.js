import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  PlaylistsWrapper,
  PlaylistsContainer,
  PlaylistCard,
} from "./styles/Playlists";
import Api from "../Services/Api";

const Playlists = () => {
  const [publicPlaylists, setPublicPlaylists] = useState([]);

  useEffect(() => {
    Api.get("publicPlaylists").then(({ data }) => {
      setPublicPlaylists(data);
    });
    console.log(publicPlaylists);
  }, [setPublicPlaylists]);

  return (
    <>
      <Navbar />
      <PlaylistsWrapper>
        <h1>Você tem bom gosto!</h1>
        <PlaylistsContainer>
          {publicPlaylists.map((playlist, key) => {
            return (
              <Link to={`/playlistdetails/${playlist.id}`}>
                <PlaylistCard key={key}>
                  <p>{playlist.name}</p>
                  <img src={playlist.cover} alt="playlist cover" />
                </PlaylistCard>
              </Link>
            );
          })}
        </PlaylistsContainer>
      </PlaylistsWrapper>
      <Footer />
    </>
  );
};

export default Playlists;
