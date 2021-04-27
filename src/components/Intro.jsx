import styles from '@styles/Intro.module.scss';
import dynamic from 'next/dynamic';

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
const Intro = () => (
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
      <p className={styles.about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
        quisquam in ipsam ullam, quisquam.
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
export default Intro;
