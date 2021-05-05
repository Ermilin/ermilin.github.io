import { useState, useRef, createRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const AnimatedTitle = ({ content }) => {
  gsap.registerPlugin(ScrollTrigger);
  let els = useRef([...content].map(() => createRef()));
  els = els.current;

  useEffect(() => {
    els.map((el, i) => {
      ScrollTrigger.matchMedia({
        '(max-width: 799px)': function () {
          gsap.to(el.current, {
            scrollTrigger: {
              trigger: el.current,
              start: 'top 200px',
              end: 'bottom 100px',
              toggleActions: 'play none none reverse',
              // markers: true,
            },
            y: '-100%',
          });
        },
        '(min-width: 800px)': function () {
          gsap.to(el.current, {
            scrollTrigger: {
              trigger: el.current,
              start: 'top center',
              end: 'bottom 100px',
              scrub: 0.5,
              // markers: true,
            },
            y: '-100%',
          });
        },
      });
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
      }}
    >
      {[...content].map((c, i) => (
        <span key={i} ref={els[i]}>
          {c}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
