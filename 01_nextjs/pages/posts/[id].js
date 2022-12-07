import { getStaticProps } from "..";
import Layout from "../../components/Layout";

export async function getStaticPaths(context) {
  const paths = getStaticProps();
  return {
    props: {
      paths,
      fallback: false,
    },
  };
}

export function getStaticProps({params}) {
  return {
    
  }
}

const Post = () => {
  return <Layout>Test test test</Layout>;
};

export default Post;
