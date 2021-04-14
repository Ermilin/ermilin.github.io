import styles from '@styles/Nav.module.scss';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Marquee = dynamic(() => import('@components/Marquee'), { ssr: false });
const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Authentication',
  'REST API',
  'GraphQL',
  'SQL Server',
  'PowerShell',
  'Auth',
];
const Header = () => (
  <nav className={styles.nav}>
    <figure className={styles.square}>
      <div className={styles.content}></div>
    </figure>
    <div className={styles.marqueeContainer}>
      <Marquee data={skills} padding={20} />
    </div>
    <ul className={styles.links}>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <a href='#'>Articles</a>
      </li>
    </ul>
    {/* <figure className={styles.square}>
      <div className={styles.content}>-</div>
    </figure> */}
  </nav>
);

export default Header;
