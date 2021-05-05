import styles from '@styles/Intro.module.scss';
import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';

import { gsap } from 'gsap/dist/gsap.js';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import AnimatedTitle from '@components/AnimatedTitle';
const Marquee = dynamic(() => import('@components/Marquee'), { ssr: false });
const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Next.js',
  'Authentication',
  'REST API',
  'GraphQL',
  'SQL Server',
  'PowerShell',
  'OAuth',
];
// gsap.registerPlugin(ScrollTrigger);
const Intro = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: '0px top',
        end: 'bottom 100px', //$nav-height = 100px
        scrub: 0.5,
        // markers: true,
      },
      y: '-10%',
    });
  }, []);

  return (
    <section className={styles.intro}>
      <div className={styles.rows}>
        <div className={styles.duo}>
          <div className={styles.row}>
            <h1>
              <AnimatedTitle content={'Full'} />
            </h1>
          </div>
          <div className={styles.row}>
            <h1>
              <AnimatedTitle content={'Stack'} />
            </h1>
          </div>
        </div>
        <p className={styles.about} ref={aboutRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          mauris in aliquam sem fringilla ut morbi tincidunt. Sed risus pretium
          quam vulputate dignissim suspendisse in.
        </p>
        <div className={styles.row}>
          <h1>
            <AnimatedTitle content={'Developer'} />
          </h1>
        </div>
      </div>
      {/* <Marquee data={skills} padding={20} /> */}
    </section>
  );
};
export default Intro;
