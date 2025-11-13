import { useState, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollingImage from '../components/ParallaxImg/ParallaxImg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ImageSlider from "../components/ImageSlider/ImageSlider";
import './Home.css'



export default function Home() {

    const [visible, setVisible] = useState(false);


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
                    markers: true,
                    start: "top 280px",
                    end: "bottom 460px",
                    ease: "power2.inOut",
                    scrub: 2.5,

                },
                 immediateRender: false,

                
            },
       

        )

        gsap.to(".anm-img", {
            x: -340,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".artes",
                start: "top 400px",
                end: "bottom 800px",
                scrub: 2.5,
                //markers: true,
            }









        });


        gsap.to(".anm-img", {
            y: 480,
            scale: 0.5,
            scaleX: -1,
            transformOrigin: "center",
            duration: 2,
            scrollTrigger: {
                trigger: ".artes",
                start: "top 400px",
                end: "bottom 800px",
                scrub: 2.5,
                //markers: true,
            },
        });

        return () => {
            gsap.killTweensOf(".anm-img")
        };
    }, [])















    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}

            >
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </motion.nav>
            <div className="home-container">




                <section className="hero">
                    <div className="herotxt">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ amount: 0.8 }}
                            onViewportEnter={() => setVisible(true)}
                            onViewportLeave={() => setVisible(false)}

                        >
                            <h1>Ghostcat</h1>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 3, ease: "easeInOut" }}

                            >
                                <p >A dor é momentânea. O estilo, eterno.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="saiba-mais"
                        initial={{ opacity: 0, y: 10 }}
                        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ delay: 2.5, duration: 1, ease: "easeInOut" }}
                    >
                        <p>Saiba mais</p>
                        <motion.div
                            className="setas"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <ChevronDown size={28} />
                        </motion.div>
                    </motion.div>

                </section>

                <motion.section


                    className="about">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.9 }}
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
                            transition={{ duration: 1.5, ease: "easeInOut" }}
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
                        viewport={{ once: false, amount: 0.8 }}
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

                <section className="artes">
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: false, amount: 0.8 }}
                    >
                        Alguns projetos
                    </motion.h1>

                    <div className="art-imgs" id="sld1">
                        <div className="artes-slider">
                            <ImageSlider
                                images={["/img/art1.png", "/img/art2.png", "/img/art3.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </div>

                        <div className="artes-slider" id="sld2">
                            <ImageSlider
                                images={["/img/art4.png", "/img/art5.png", "/img/art6.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </div>

                        <div className="artes-slider" id="sld3">
                            <ImageSlider
                                images={["/img/art7.png", "/img/art8.png", "/img/art1.png"]}
                                interval={4000}
                                height="350px"
                            />
                        </div>
                    </div>
                </section>

            </div>

        </>

    )
}