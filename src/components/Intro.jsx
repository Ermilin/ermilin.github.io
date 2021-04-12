import styles from '@styles/Intro.module.scss';

const Intro = () => (
  <section className={styles.intro}>
    <figure>
      {/* <img src='https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' /> */}
      <img src='https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255710-stock-illustration-avatar-vector-male-profile-gray.jpg' />
    </figure>
    <aside>
      <div>
        <h4>Me</h4>
        <p>Sebastian Ermilin</p>
        <p>Full stack Developer</p>
      </div>
      <div>
        <h4>Focus</h4>
        <p>IT Career, creating the perfect dish.</p>
      </div>
      <div>
        <h4>Extra</h4>
        <p>Cooking, Botany, Productivity</p>
      </div>
    </aside>
  </section>
);
export default Intro;
