import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <>
      <MainHeader>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </MainHeader>
    </>
  );
};
const MainHeader = styled.header`
  padding: 0 4.8rem;
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 7rem;
  .logo img {
    width: 25rem;
    height: 4rem;
  }
  nav ul li {
    font-size: 2rem;
    float: left;
    padding: 0 1em;
  }
  nav ul li a {
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
    &:hover {
      color: red;
    }
  }
`;
export default Navbar;
