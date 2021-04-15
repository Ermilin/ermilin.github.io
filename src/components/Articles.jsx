import Link from 'next/link';
import styles from '@styles/Articles.module.scss';
import { useState, useRef, createRef, useEffect } from 'react';
import AnimatedTitle from '@components/AnimatedTitle';
import Card from '@components/Card';

const Articles = ({ posts }) => {
  return (
    <section className={styles.articles}>
      <h3 className={styles.title}>Articles</h3>
      <ul className={styles.cards}>
        {posts.map((post, idx) => (
          <Link href={'/posts/' + post.slug} key={idx}>
            <li>
              <Card
                title={post.title}
                description={post.description}
                image={post.image}
              />
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
