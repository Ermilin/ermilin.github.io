import styles from '@styles/Intro.module.scss';
import AnimatedTitle from '@components/AnimatedTitle';

const Intro = () => (
  <section className={styles.intro}>
    <div className={styles.rows}>
      <div>
        <div className={styles.row}>
          <h1>
            <AnimatedTitle content={'FULL'} />
          </h1>
          <div></div>
        </div>
        <div className={styles.row}>
          <h1>
            <AnimatedTitle content={'STACK'} />
          </h1>
          <div></div>
        </div>
      </div>
      <p className={styles.about}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ea
        quisquam in ipsam ullam, quisquam.
      </p>
      <div className={styles.row}>
        <h1>
          <AnimatedTitle content={'DEVELOPER'} />
        </h1>
        <div></div>
      </div>
    </div>

    {/* <figure>
      <img src='https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
      <img src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg' />
    </figure> */}
  </section>
);
export default Intro;
