// src/App.jsx
import React from "react";
import Nav from "./components/NavBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import AboutSection from "./components/Sobre";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <AboutSection />
      <Gallery />
    </>
  );
}

export default App;
