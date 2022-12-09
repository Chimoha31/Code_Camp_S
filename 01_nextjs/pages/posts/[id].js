import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false, //(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  // console.log(postData);
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHTML}} />
        
      </article>
    </Layout>
  );
};

export default Post;
