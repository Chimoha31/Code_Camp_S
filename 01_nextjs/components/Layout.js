import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Teddy Maekawa";
export const siteTitle = "Next.js blog";

// Layout.jsは共通するものを作成
const Layout = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${styles.headerImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>

      {home ? (
        <main>{children}</main>
      ) : (
        <main style={{ margin: "5rem" }}>{children}</main>
      )}

      {!home && (
        <Link href="/" className={styles.backToHome}>
          Back to home
        </Link>
      )}
    </div>
  );
};

export default Layout;
