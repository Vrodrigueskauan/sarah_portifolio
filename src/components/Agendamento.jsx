// src/components/Agendamento.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Agendamento.css";

export default function Agendamento() {
  // Aumentamos o threshold para disparar a animação só quando uma parte significativa da seção estiver visível
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% da seção precisa estar visível
  });

  const animation = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };

  return (
    <section ref={ref} className="agendamento-section">
      <motion.div
        className="agendamento-container"
        variants={animation}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="agendamento-title">Reserve seu momento com o oculto</h2>
        <p className="agendamento-subtitle">
          Conecte-se com a essência do desconhecido.<br />
          Agende uma experiência única guiada pela estética e pelo misticismo.
        </p>

        <motion.a
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <strong>SAIBA MAIS</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
