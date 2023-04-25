import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Membership from "../membership/Membership";
import Playlist from "../playlist/Playlist";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Membership />
      <Playlist />
      <Footer />
    </>
  );
};

export default Home;
