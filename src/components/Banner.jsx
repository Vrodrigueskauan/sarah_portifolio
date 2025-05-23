import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";
import "./banner.css";
import logo from "../assets/img/logo.png"; // Substitua com o nome correto

export default function Banner() {
  const titleRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(titleRef.current, {
      types: "chars",
    });

    const chars = split.chars;
    chars.forEach((char, i) => {
      char.style.animationDelay = `${i * 0.05}s`;
      char.classList.add("char-animate");
    });
  }, []);

  return (
    <div className="banner-container">
      <motion.img
        src={logo}
        alt="Logo Ghostcat"
        className="banner-image"
        initial={{ opacity: 0, rotate: -15, y: -100 }}
        animate={{ opacity: 1, rotate: 0, y: 0 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
      />
      <div className="banner-text">
        <h1 ref={titleRef} className="banner-title">Ghostcat</h1>
        <motion.p
  className="banner-subtitle"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
>
  
</motion.p>

      <motion.button
        className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >  
         
            <strong>SAIBA MAIS</strong>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
        </motion.button>
      </div>
    </div>
  );
}
