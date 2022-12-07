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
          I am one year old baby boy Teddy kun 🐶 I'm a cute puppy ever in the
          world 🌍
        </p>
      </section>

      <section>
        <h2>📝 Engineer blog</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/html.jpeg" alt="" />
            </Link>
            <Link href="/">
              <p>First Step: Let's learn HTML first!!</p>
            </Link>
            <br />
            <small>December, 7, 2022</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
