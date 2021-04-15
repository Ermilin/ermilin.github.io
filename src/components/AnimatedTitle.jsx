import { useState, useRef, createRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap.js';

const AnimatedTitle = ({ content }) => {
  let els = useRef([...content].map(() => createRef()));

  useEffect(() => {
    els.current.map((el, i) => {
      console.log(el);
      gsap.from(el.current, {
        y: '100%',
        ease: 'power1.inOut',
        delay: i / 20,
      });
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        textTransform: 'uppercase',
        overflow: 'hidden',
      }}
    >
      {[...content].map((c, i) => (
        <span key={i} ref={els.current[i]}>
          {c}
        </span>
      ))}
    </div>
  );
};

export default AnimatedTitle;
