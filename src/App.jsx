import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./components/Footer";
import { GlobalStyle } from "./GlobalStyle";
const App = () => {
  const theme = {
    colors: {
      text: "#000",
      black: "#212529",
      white: "#fff",
      bg: "#f1f1fd",
      heading: "rgb(24,24,29)",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
