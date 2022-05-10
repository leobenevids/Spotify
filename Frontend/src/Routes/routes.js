import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Help from "../Pages/Help";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Playlists from "../Pages/Playlists";
import PlaylistDetails from "../Pages/PlaylistDetails";
import YourPlaylists from "../Pages/YourPlaylists";

import { AuthProvider, AuthContext } from "../Contexts/Auth";

export default function routes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <h3>Carregando...</h3>;
    }

    if (!authenticated) {
      return <Navigate to="/signin" />;
    }

    return children;
  };
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/playlistdetails/:id" element={<PlaylistDetails />} />
        <Route
          path="/yourplaylists"
          element={
            <Private>
              <YourPlaylists />
            </Private>
          }
        />
      </Routes>
    </AuthProvider>
  );
}
