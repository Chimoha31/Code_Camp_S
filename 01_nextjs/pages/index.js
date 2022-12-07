import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          I am one year old baby boy Teddy kun 🐶 I'm the cutest puppy ever in the
          world 🌍
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝 Engineer blog</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/html.jpeg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                First Step: Let's learn HTML first!!
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>December, 7, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/html.jpeg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                First Step: Let's learn HTML first!!
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>December, 7, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/html.jpeg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                First Step: Let's learn HTML first!!
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>December, 7, 2022</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/html.jpeg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <p className={utilStyles.boldText}>
                First Step: Let's learn HTML first!!
              </p>
            </Link>
            <br />
            <small className={utilStyles.lightText}>December, 7, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
