import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// -----------------------------------------
// SSGの場合=> getStaticProps()関数を使用する！
// -----------------------------------------
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// -----------------------------------------
// SSRの場合=>getSrverSideProps()関数を使用！！
// -----------------------------------------
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // Componentに渡すためのprops
//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section className={utilStyles.headingMd}>
        <p>
          I am one year old baby boy Teddy kun 🐶 I'm the cutest puppy ever in
          the world 🌍
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>📝 Engineer blog</h2>
        <div className={styles.grid}>
          {allPostsData.map((post) => (
            <article key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <img
                  src={`${post.thumbnail}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${post.id}`}>
                <p className={utilStyles.boldText}>{post.title}</p>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{post.date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
