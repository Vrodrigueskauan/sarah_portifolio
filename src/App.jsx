// src/App.jsx
import React from "react";
import Nav from "./components/NavBar";
import Banner from "./components/Banner";
import AboutSection from "./components/Sobre";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Agendamento from "./components/Agendamento"; 


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <AboutSection />
      <Gallery />
      <Agendamento />
      <Footer />
    </>
  );
}

export default App;
