import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
export default function HeroSection({ head, image }) {
  const name = useContext(AppContext);
  return (
    <Wrapper>
      <div className="container grid">
        <div className="hero-cont">
          <p className="top-para">Hy It's me</p>
          <h1 className="hero-head">{head}</h1>
          <p className="hero-para">
            I am {name}.I am a Full Stack Web Application Developer, Youtuber
            and Free lancer
          </p>
          <Button>
            <Link to="/contact">Hire Me</Link>
          </Button>
        </div>
        <div className="hero-img">
          <picture>
            <img src={image} alt="Developer" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  margin-top: 4em;
  div.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3em;
  }
  div.hero-img img {
    width: 100%;
    height: 35rem;
  }
  .top-para {
    font-size: 1.7rem;
    font-weight: 500;
  }
  .hero-para {
    font-size: 1.8rem;
  }
`;
