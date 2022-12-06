import Head from "next/head";

const name = "Teddy Maekawa";
export const siteTitle = "Next.js blog";

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <header>
        <img src="/images/profile.jpg" />
        <h1>{name}</h1>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
