import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  console.log(paths)
  return {
    paths,
    fallback: false, //あとで説明。(falseにすると、上のpathsに含まれてないあらゆるパスはアクセスすると404ページになる。)
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
      {postData.title}
      <br />
    </Layout>
  );
};

export default Post;
