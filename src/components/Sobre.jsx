import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import "./Sobre.css";

const paragraphs = [
  {
    id: 1,
    title: "A Arte do Mistério",
    text: "No coração do Ghostcat habita a fusão entre o digital e o espiritual. Cada detalhe visual foi concebido para provocar curiosidade e introspecção, guiando o visitante por uma jornada sensorial.",
    image: "../public/img/teste1.jpg"
  },
  {
    id: 2,
    title: "Estética em Movimento",
    text: "Nada aqui é estático. A interatividade não é apenas um recurso – é uma linguagem visual que se revela conforme o usuário interage, criando uma dança entre luz e sombra.",
    image: "../public/img/teste1.jpg"
  },
  {
    id: 3,
    title: "O Propósito Oculto",
    text: "Ghostcat é uma expressão viva do oculto digital. Uma experiência imersiva onde design, emoção e misticismo se fundem em uma entidade pulsante e mutável.",
    image: "../public/img/teste1.jpg"
  }
];

const AboutSection = () => {
  // Inicia AOS ao montar
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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

const SectionBlock = ({ id, title, text, image, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  // Define a animação AOS com base no id
  const aosAnimation =
    id === 1 || id === 3 ? "zoom-in-left" : "zoom-in-right";

  return (
    <div
      ref={ref}
      className={`section-block ${reverse ? "reverse" : ""}`}
    >
      <div className="text-area">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-area">
        <div
          className="image-wrapper"
          data-aos={aosAnimation}
        >
          <img src={image} alt={title} />
          <span className="led-glow"></span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
