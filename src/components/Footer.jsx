// src/components/Footer.jsx
import { Instagram, Github, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-logo">Ghostcat</h3>
        <p>Design etéreo. Experiência imersiva. Emoção oculta.</p>
        <div className="footer-icons">
          <a href="#" aria-label="Instagram"><Instagram size={22} /></a>
          <a href="#" aria-label="GitHub"><Github size={22} /></a>
          <a href="mailto:ghostcat@email.com" aria-label="Email"><Mail size={22} /></a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Ghostcat. Todos os direitos reservados.</p>
    </footer>
  );
}
