import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import { Api, createSession } from "../Services/Api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await createSession(email, password);

    console.log("login", response.data);

    const loggedUser = response.data.user;

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret123") {
      setUser(loggedUser);
      navigate("/");
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider
      value={{ uthenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
