import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Help from "../Pages/Help";
import Plans from "../Pages/Plans";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Playlists from "../Pages/Playlists";
import PlaylistDetails from "../Pages/PlaylistDetails";


export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/playlists" element={<Playlists />} />
      <Route
        path="/playlistdetails/:id"
        element={<PlaylistDetails  />}
      />
    </Routes>
  );
}
