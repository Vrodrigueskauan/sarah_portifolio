import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import "./Gallery.css"; // Se preferir, incorpore no próprio JSX como style={{ ... }}

const images = [
  {
    id: 1,
    src: "../public/img/teste1.jpg",
    title: "Eclipse Noturno",
    description: "Uma composição inspirada nos sonhos e na escuridão.",
  },
  {
    id: 2,
    src: "/img/teste1.jpg",
    title: "Vulto Lunar",
    description: "Arte feita com base na luz refletida nas sombras.",
  },
  {
    id: 3,
    src: "/img/teste1.jpg",
    title: "Chamado das Sombras",
    description: "O chamado ancestral envolto em mistério.",
  },
];

export default function Gallery() {
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section id="gallery" style={{ padding: "3rem 1rem", textAlign: "center" }}>
      <h2 style={{ color: "#ff4fcb", marginBottom: "2rem" }}>Galeria</h2>

      <div className="gallery-grid">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(img)}
          >
            <img src={img.src} alt={img.title} />
            <div className="gallery-title">{img.title}</div>
            <motion.button
              whileTap={{ scale: 1.3 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(img.id);
              }}
              className="heart-btn"
            >
              <Heart
                color={favorites.includes(img.id) ? "#ff4fcb" : "#ccc"}
                fill={favorites.includes(img.id) ? "#ff4fcb" : "none"}
              />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src={selected.src} alt={selected.title} />
            <div className="modal-text">
              <h3>{selected.title}</h3>
              <p>{selected.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
