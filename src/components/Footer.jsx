import styles from '@styles/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    Ermilin @ {new Date().getFullYear()}
  </footer>
);
export default Footer;
