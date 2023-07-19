import React from "react";
import HeroSection from "./components/HeroSection";
import aboutImage from "./assets/about.svg";

const About = () => {
  return (
    <>
      <HeroSection head={"Moosa Raheel"} image={aboutImage} />
    </>
  );
};

export default About;
