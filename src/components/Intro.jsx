import styles from '@styles/Intro.module.scss';
import AnimatedTitle from '@components/AnimatedTitle';

const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.rows}>
      <div style={{ display: 'grid' }}>
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
  </section>
);
export default Intro;
