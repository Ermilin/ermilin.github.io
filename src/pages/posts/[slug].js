import PostLayout from '@layouts/post';
import { getPostBySlug, getAllPosts } from '@api';

const Post = ({ title, description, content }) => (
  <PostLayout title={title} description={description} content={content} />
);

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default Post;
