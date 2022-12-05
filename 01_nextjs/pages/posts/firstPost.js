import Head from "next/head";
import Link from "next/link";


const firstPost = () => {
  return (
    <div>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>Test post 01</h1>
      <Link href="/">Return to Home</Link>
    </div>
  );
};

export default firstPost;
