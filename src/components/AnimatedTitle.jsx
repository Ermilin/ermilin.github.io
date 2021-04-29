import { useState, useRef, createRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const AnimatedTitle = ({ content }) => {
  gsap.registerPlugin(ScrollTrigger);
  let els = useRef([...content].map(() => createRef()));
  els = els.current;
  // let els = useRef([...content].map(() => createRef()));
  useEffect(() => {
    els.map((el, i) => {
      gsap.to(el.current, {
        scrollTrigger: {
          trigger: el.current,
          start: 'top center',
          end: 'bottom 100px', //$nav-height = 100px
          scrub: 0.5,
          // markers: true,
        },
        y: '-100%',
      });
    });

    // gsap.utils.toArray(els).forEach((section) => {
    //   gsap.to(section, {
    //     y: 100,
    //     stagger: 0.1,
    //   });
    // });
    // gsap.to(els, {
    //   y: 100,
    //   stagger: 0.1,
    // });
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
