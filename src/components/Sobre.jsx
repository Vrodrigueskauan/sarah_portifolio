import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Sobre.css";

const paragraphs = [
  {
    id: 1,
    title: "A Arte do Mistério",
    text: "No coração do Ghostcat habita a fusão entre o digital e o espiritual. Cada detalhe visual foi concebido para provocar curiosidade e introspecção, guiando o visitante por uma jornada sensorial.",
    image: "/img/icon.jpg"
  },
  {
    id: 2,
    title: "Estética em Movimento",
    text: "Nada aqui é estático. A interatividade não é apenas um recurso – é uma linguagem visual que se revela conforme o usuário interage, criando uma dança entre luz e sombra.",
    image: "/img/teste1.jpg"
  },
  {
    id: 3,
    title: "O Propósito Oculto",
    text: "Ghostcat é uma expressão viva do oculto digital. Uma experiência imersiva onde design, emoção e misticismo se fundem em uma entidade pulsante e mutável.",
    image: "/img/teste1.jpg"
  }
];

const AboutSection = () => {
  useEffect(() => {
    // Aguarda o DOM montar antes de iniciar o AOS
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: false,   // ✅ animação acontece sempre que entra na tela
        mirror: true   // ✅ animação reversa ao sair e voltar
      });
    }, 100); // Pequeno delay para garantir que o layout esteja montado
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
  const aosImage = id === 1 || id === 3 ? "zoom-in-left" : "zoom-in-right";

  return (
    <div className={`section-block ${reverse ? "reverse" : ""}`}>
      <div
        className="text-area"
        data-aos="fade-up"
      >
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="image-area">
        <div
          className="image-wrapper"
          data-aos={aosImage}
        >
          <img src={image} alt={title} />
          <span className="led-glow"></span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
