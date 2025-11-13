import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageSlider.css"; // 👈 importa o estilo

export default function ImageSlider({ images = [], interval = 3000, height = "400px" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-400 p-4">Nenhuma imagem disponível</div>;
  }

  return (
    <div className="image-slider" style={{ height }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`slide-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
