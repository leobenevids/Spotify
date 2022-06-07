import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Api } from "../Services/Api";

import {
  PlaylistDetailsWrapper,
  PlaylistDetailsContainer,
} from "./styles/PlaylistDetails";

import { useParams } from "react-router-dom";

const PlaylistDetails = () => {
  const [playlists, setPlaylists] = useState([]);
  const { _id } = useParams();

  console.log(_id);

  const params = new URLSearchParams([['id', _id]]);

  useEffect(() => {

    Api.get("playlists", { params }).then(({ data }) => {
        setPlaylists(data);
         console.log(playlists)
      });
    

    console.log(playlists);
  }, []);

  return (
    <>
      <Navbar />
      <PlaylistDetailsWrapper>
        <PlaylistDetailsContainer>
          {playlists.map((playlist) => {
            console.log(playlist);
            return (
              <div>
                <img src={playlist.cover} alt="aaa" />
                <section>
                  {playlist.tracks.map((track) => {
                    return (
                      <ul>
                        <li>
                          {" "}
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
            );
          })}
        </PlaylistDetailsContainer>
      </PlaylistDetailsWrapper>
      <Footer />
    </>
  );
};

export default PlaylistDetails;
