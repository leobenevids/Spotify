import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Showcase from "../Components/Showcase";
import Profile from "../Components/Profile";

const Home = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <Showcase />
      <Footer />
    </>
  );
};

export default Home;
