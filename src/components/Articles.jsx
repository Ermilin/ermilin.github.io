import Link from 'next/link';
import styles from '@styles/Articles.module.scss';
import { useState, useRef, createRef, useEffect } from 'react';
import AnimatedTitle from '@components/AnimatedTitle';
const Articles = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h3>Articles</h3>
      <ul>
        {posts.map((post, idx) => (
          <Link href={'/posts/' + post.slug} key={idx}>
            <li>
              <article>
                <a>
                  <h4>{post.title}</h4>
                </a>
                <p>{post.description}</p>
              </article>
              <figure>
                <img src={post.image} />
              </figure>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
