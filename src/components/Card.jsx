import styles from '@styles/Card.module.scss';
import LaunchIcon from '@components/LaunchIcon';

const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <figure>
        <img src={image} />
      </figure>
      <article>
        <a>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
        <LaunchIcon />
      </article>
    </div>
  );
};
export default Card;
