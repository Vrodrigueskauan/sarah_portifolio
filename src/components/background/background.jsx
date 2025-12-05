import React, { useEffect, useRef } from "react";
import "./background.css";

export default function TestemunhasBackground({ className = "" }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const paths = wrapper.querySelectorAll("path");
    const data = [];

    paths.forEach((el) => {
      let length = 0;
      try {
        if (el.getTotalLength) length = el.getTotalLength();
      } catch (e) {
        length = 0;
      }

      data.push({ el, length });

      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;
      el.style.opacity = "1";
    });

    const handleScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);

      data.forEach(({ el, length }, index) => {
        const delayFactor = index * 0.08;
        const effectiveProgress = Math.max(progress - delayFactor, 0);
        el.style.strokeDashoffset =
          length - length * Math.min(effectiveProgress * 1.2, 1);
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // NOTA: nada de margins/paddings aqui, apenas um container absoluto
    <div ref={wrapperRef} className={`testemunhas-bg ${className}`} aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 405"
         preserveAspectRatio="xMinYMid meet"
        className="testemunhas-svg"
      >
        <defs>
          <clipPath id="clipWave">
            <path d="M 55.4375 0 L 754.4375 0 L 754.4375 405 L 55.4375 405 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#clipWave)">
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.00240054)"
            fill="none"
            stroke="#c400d8"
            strokeWidth="45"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M -57.001032 42.150475 C 20.246262 21.912831 77.140885 10.586549 149.339337 42.150475 C 227.565955 76.350013 253.076565 128.648772 328.469234 148.150778 C 390.623279 164.225727 465.08483 153.650303 483.79092 111.150744"
          />
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.00240054)"
            fill="none"
            stroke="#7c0185"
            strokeWidth="45"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M -43.394528 83.802782 C 33.85023 63.565139 90.744852 52.23632 162.943304 83.802782 C 241.172459 118.00232 266.680532 170.301079 342.073201 189.803085 C 404.229784 205.878035 478.688798 195.30261 497.394887 152.803051"
          />
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.00240054)"
            fill="none"
            stroke="#5b0661"
            strokeWidth="45"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            d="M -29.79056 126.802068 C 47.454197 106.566961 104.34882 95.238142 176.549809 126.802068 C 254.776426 161.001605 280.284499 213.302901 355.679706 232.802371 C 417.833751 248.87732 492.292765 238.301896 510.998854 195.802337"
          />
        </g>
      </svg>
    </div>
  );
}
