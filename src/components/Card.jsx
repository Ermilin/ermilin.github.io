import styles from '@styles/Card.module.scss';

const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <article>
        <a>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
      </article>
      <figure>
        <img src={image} />
      </figure>
    </div>
  );
};
export default Card;
