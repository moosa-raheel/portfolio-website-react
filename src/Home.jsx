import React from "react";
import HeroSection from "./components/HeroSection";
import heroImage from "./assets/hero.svg";
const Home = () => {
  return (
    <>
      <HeroSection head={"Moosa Raheel"} image={heroImage} />
    </>
  );
};

export default Home;
