// src/components/Gallery.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Gallery.css";

const images = [
  "/img/gallery1.jpg",
  "/img/gallery2.jpg",
  "/img/gallery3.jpg",
  "/img/gallery4.jpg",
  "/img/gallery5.jpg",
  "/img/gallery6.jpg",
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: false });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="gallery-section" ref={ref}>
      <motion.h2
        className="gallery-title"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        Galeria
      </motion.h2>

      <motion.div
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {images.map((img, index) => (
          <motion.div
            className="gallery-item"
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt={`Imagem ${index + 1}`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
