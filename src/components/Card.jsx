import styles from '@styles/Card.module.scss';
import LaunchIcon from '@components/LaunchIcon';
import Image from 'next/image';

const Card = ({ title, description, image }) => {
  return (
    <li className={styles.card}>
      <figure>
        {/* <img src={image} /> */}
        <Image
          src={image}
          alt='Picture of the author'
          layout='intrinsic'
          width={300}
          height={400}
        />
      </figure>
      <article>
        <a>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
        {/* <LaunchIcon /> */}
      </article>
    </li>
  );
};
export default Card;
