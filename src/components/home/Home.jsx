import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Membership from "../membership/Membership";
import Playlist from "../playlist/Playlist";
import Footer from "../footer/Footer";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <>
      <Fade>
        <Header />
      </Fade>
      <Hero />
      <Membership />
      <Fade bottom>
        <Playlist />
      </Fade>
      <Footer />
    </>
  );
};

export default Home;
