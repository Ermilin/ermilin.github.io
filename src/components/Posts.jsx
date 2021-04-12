import Link from 'next/link';
import styles from '@styles/Posts.module.scss';

const Posts = ({ posts }) => (
  <section className={styles.posts}>
    <ul>
      {posts.map((post, idx) => (
        <Link href={'/posts/' + post.slug}>
          <li key={idx}>
            <figure>
              <img src={post.image} />
            </figure>
            <article>
              <a>
                <h4>{post.title}</h4>
              </a>
              <p>{post.description}</p>
            </article>
          </li>
        </Link>
      ))}
    </ul>
  </section>
);

export default Posts;
