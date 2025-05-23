import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Sobre.css";

const paragraphs = [
  {
    id: 1,
    title: "A Arte do Mistério",
    text: "No coração do Ghostcat habita a fusão entre o digital e o espiritual. Cada detalhe visual foi concebido para provocar curiosidade e introspecção, guiando o visitante por uma jornada sensorial.",
    image: "/img/ghost1.png"
  },
  {
    id: 2,
    title: "Estética em Movimento",
    text: "Nada aqui é estático. A interatividade não é apenas um recurso – é uma linguagem visual que se revela conforme o usuário interage, criando uma dança entre luz e sombra.",
    image: "/img/ghost2.png"
  },
  {
    id: 3,
    title: "O Propósito Oculto",
    text: "Ghostcat é uma expressão viva do oculto digital. Uma experiência imersiva onde design, emoção e misticismo se fundem em uma entidade pulsante e mutável.",
    image: "/img/ghost3.png"
  }
];

const AboutSection = () => {
  return (
    <section className="about-section">
      {paragraphs.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <SectionBlock key={item.id} {...item} reverse={!isEven} />
        );
      })}
    </section>
  );
};

const SectionBlock = ({ title, text, image, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className={`section-block ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="text-area">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-area">
        <div className="image-wrapper">
          <img src={image} alt={title} />
          <span className="led-glow"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
