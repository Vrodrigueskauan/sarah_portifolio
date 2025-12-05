import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Container } from "lucide-react";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImageSlider from "../components/ImageSlider/ImageSlider";
import TestimonialCarousel from "../components/TestimonialCarousel/TestimonialCarousel"
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useInView } from 'react-intersection-observer';
import TestemunhasBackground from '../components/background/background.jsx';
import RotatingCard from "../components/RotatingCard/RotatingCard.jsx";
import './Home.css'



export default function Home() {

    const [visible, setVisible] = useState(false);
    const aboutRef = useRef(null);
    const bgRef = useRef(null);


    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.set(".anm-img", { scaleX: 1, transformOrigin: "center" });



        gsap.fromTo(".anm-img",
            {
                x: 200,
                opacity: 0,
            },

            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".conteudo",
                    //markers: true,
                    start: "top 60%",
                    end: "bottom 80%",
                    ease: "power2.inOut",
                    scrub: 2.5,

                },
                immediateRender: false,


            },


        )




        gsap.to(".anm-img", {
            y: "145%",
            scale: 0.9,
            scaleX: -1,
            transformOrigin: "center",
            duration: 2,
            scrollTrigger: {
                trigger: ".artes",
                start: "top 400px",
                end: "bottom 890px",
                ease: "power2.inOut",
                scrub: 2.5,
                //markers: true,
            },
        });

        return () => {
            gsap.killTweensOf(".anm-img")
        };

    }, [])





    useEffect(() => {
        const section = aboutRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        section.classList.add("show");
                    } else {
                        section.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.querySelectorAll(".star").forEach(star => {
            star.style.setProperty("--x", Math.random());
            star.style.setProperty("--d", Math.random() * 4 + "s");
            star.style.setProperty("--delay", Math.random() * 5 + "s");
        });
    }, []);


    const svgRef = useRef(null);
    const pathRef = useRef(null);

    useLayoutEffect(() => {
        const path = pathRef.current;

        const length = path.getTotalLength();

        // Estado inicial (linha invisível)
        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length,
        });

        // Animação ligada ao scroll
        gsap.to(path, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top 80%",   // começa a desenhar
                end: "top 20%",     // termina
                scrub: true,        // sincroniza com o scroll (perfeito)
            },
            ease: "none",
        });

    }, []);









    return (
        <>
            <container className="home-container">
                <motion.nav
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}

                >
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Agendar</a></li>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </motion.nav>





                <section className="hero">


                    <div className="hero-overlay" />

                    <div className="herotxt">
                        <motion.div
                            initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
                            animate={
                                visible
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : { opacity: 0, y: -120, filter: "blur(10px)" }
                            }
                            transition={{ duration: 1.6, ease: "easeInOut" }}
                            viewport={{ amount: 0.8 }}
                            onViewportEnter={() => setVisible(true)}
                            onViewportLeave={() => setVisible(false)}
                            className="hero-content"
                        >
                            <motion.h1
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                            >
                                Ghostcat
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1.5 }}
                            >
                                Arte na pele, nas mãos e na alma.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                className="hero-buttons"
                            >


                            </motion.div>
                        </motion.div>
                    </div>
                </section>

























                <motion.section className="services-section">
                    <motion.h1
                        className="title"


                    >
                        Serviços
                    </motion.h1>
                    <div className="services">




                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="card-services"

                        >
                            <motion.img
                                src="/img/services1.png"
                                alt=""
                                className="services-img"

                            >
                            </motion.img>
                            <motion.h1>Tatuagem</motion.h1>
                            <p>A Ghostcat é um estúdio de tatuagem focado em criar arte única com segurança, técnica e personalidade. Trabalhamos com atendimento personalizado, materiais de alta qualidade e total cuidado em cada detalhe para transformar sua ideia em uma tatuagem exclusiva.</p>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="card-services"

                        >
                            <motion.img
                                src="/img/service2.png"
                                alt=""
                                className="services-img"

                            >
                            </motion.img>
                            <h1 className="title-card">Nail des.</h1>
                            <p>A Ghostcat também oferece nail design com foco em criatividade, estética e cuidado. Trabalhamos com técnicas modernas, materiais de qualidade e atendimento personalizado para entregar unhas únicas, duráveis e feitas com total atenção aos detalhes.</p>

                        </motion.div>
                        <div className="services"></div>
                    </div>


                </motion.section>


                <motion.section



                    className="about" ref={aboutRef}>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.9 }}
                    >


                        Sobre mim
                    </motion.h1>

                    <div className="about-content">
                        <motion.img
                            src="../../public/img/icon.png"
                            alt="Foto da tatuadora"
                            className="about-img"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: "easeIn" }}
                            viewport={{ once: false, amount: 0.3 }}
                        >




                        </motion.img>
                        <motion.p

                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.3 }}

                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </motion.p>


                    </div>





                </motion.section>
                <section className="valorizamos">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        Valorizamos nossos clientes
                    </motion.h1>

                    <div className="conteudo">
                        <motion.p

                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.5 }}

                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </motion.p>

                        <img className="anm-img" src="/img/mao.png" alt="" />


                    </div>




                </section>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#690895" fill-opacity="1" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,245.3C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> */}

                <section className="artes">



                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        Alguns projetos
                    </motion.h1>

                    <div className="art-imgs" id="sld1">

                        <motion.div
                            className="artes-slider"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <ImageSlider
                                images={["/img/art1.png", "/img/art2.png", "/img/art3.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </motion.div>


                        <motion.div
                            className="artes-slider"
                            id="sld2"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3 }}
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            <ImageSlider
                                images={["/img/art4.png", "/img/art5.png", "/img/art6.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </motion.div>


                        <motion.div
                            className="artes-slider"
                            id="sld3"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.3 }}
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            <ImageSlider
                                images={["/img/art7.png", "/img/art8.png", "/img/art1.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </motion.div>
                    </div>
                </section>


                <section className="testemunhas">

                    <section className="testemunhas-section">
                        <div className="background">
                            <TestemunhasBackground />
                        </div>

                        <motion.h1
                            className="title"

                        >
                            O que dizem sobre nosso trabalho?
                        </motion.h1>


                        <div className="conteudo-testemunhas">


                            <motion.div

                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="card">
                                <RotatingCard />

                            </motion.div>

                            <div className="conteudo-img">
                                <motion.img
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    src="/img/ghostcat.png" alt="" />

                            </div>


                        </div>
                    </section>

                    <div className="svg-fullscreen">
                        <svg
                            ref={svgRef}
                            viewBox="0 0 1440 320"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                                top: "-30%",
                                left: 0
                            }}
                        >
                            <path
                                ref={pathRef}
                                d="M0,192 
         C120,160 240,128 360,122.7 
         C480,117 600,139 720,165.3 
         C840,192 960,224 1080,218.7 
         C1200,213 1320,171 1440,149.3"
                                stroke="#7C0185"
                                strokeWidth="18"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>




                </section>


            </container >








        </>

    )
}