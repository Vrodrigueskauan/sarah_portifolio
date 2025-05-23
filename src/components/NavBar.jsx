import React, { useState } from 'react';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo"><img src="" alt="" /></div>

      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#">Projetos</a>
        <a href="#contato">Agendar</a>
      </nav>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Overlay no mobile */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;