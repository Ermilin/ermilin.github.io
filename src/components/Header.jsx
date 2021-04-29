import styles from '@styles/Nav.module.scss';
import dynamic from 'next/dynamic';
// import Link from 'next/link';
import HamburgerIcon from '@components/HamburgerIcon';
import ActiveLink from '@components/Link';

const Marquee = dynamic(() => import('@components/Marquee'), { ssr: false });
const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Next.js',
  'Authentication',
  'REST API',
  'GraphQL',
  'SQL Server',
  'PowerShell',
  'OAuth',
];
const Header = () => (
  <nav className={styles.nav}>
    <figure className={styles.square}>
      <div className={styles.content}>
        <HamburgerIcon />
      </div>
    </figure>
    <div className={styles.marqueeContainer}>
      <Marquee data={skills} padding={20} />
    </div>
    <ul className={styles.links}>
      <li>
        <ActiveLink activeClassName='active' href='/'>
          <a>Home</a>
        </ActiveLink>
      </li>
      {/* <li>
        <ActiveLink activeClassName='active' href='#'>
          <a>Articles</a>
        </ActiveLink>
      </li> */}
    </ul>
    {/* <figure className={styles.square}>
      <div className={styles.content}>-</div>
    </figure> */}
  </nav>
);

export default Header;
