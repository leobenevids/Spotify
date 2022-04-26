import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import {
  PlaylistDetailsWrapper,
  PlaylistDetailsContainer,
} from "./styles/PlaylistDetails";

import { useParams } from "react-router-dom";

const PlaylistDetails = ({ PlaylistsData }) => {
  const { id } = useParams();
  console.log(PlaylistsData)

  return (
    <>
      <Navbar />
      <PlaylistDetailsWrapper>
        <PlaylistDetailsContainer>
          {PlaylistsData.filter((playlist) => playlist.id == id).map((playlist) => {
              console.log(playlist)
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
                              <source src={track.audio} type="audio/mp3" />
                            </audio>
                          </li>
                        </ul>
                      );
                    }
                    )}
                  </section>
                </div>
              );
            }
          )}
        </PlaylistDetailsContainer>
      </PlaylistDetailsWrapper>
      <Footer />
    </>
  );
};

export default PlaylistDetails;
