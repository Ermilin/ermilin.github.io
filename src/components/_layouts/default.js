import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.scss';

const DefaultLayout = (props) => (
  <div className={styles.container}>
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
    </Head>
    {props.children}
    <Footer />
  </div>
);

export default DefaultLayout;
