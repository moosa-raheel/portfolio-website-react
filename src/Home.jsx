import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { Link } from "react-router-dom";
import heroImg from "./assets/hero.svg";
const Home = () => {
  return (
    <>
      <Wrapper>
        <div className="container grid">
          <div className="hero-cont">
            <p className="top-para">Hy It's me</p>
            <h1 className="hero-head">Moosa Raheel</h1>
            <p className="hero-para">
              I am a Full Stack Web Application Developer, Youtuber and Free
              lancer
            </p>
            <Button>
              <Link to="/contact">Hire Me</Link>
            </Button>
          </div>
          <div className="hero-img">
            <picture>
              <img src={heroImg} alt="" />
            </picture>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  margin-top: 4em;
  div.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    gap: 3em;
  }
  div.hero-img img {
    width: 100%;
  }
  .top-para {
    font-size: 1.7rem;
    font-weight: 500;
  }
  .hero-para {
    font-size: 1.8rem;
  }
`;
export default Home;
