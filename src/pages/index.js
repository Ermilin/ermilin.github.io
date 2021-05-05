import Link from 'next/link';
import dynamic from 'next/dynamic';
import DefaultLayout from '@layouts/default';
import Intro from '@components/Intro';
import Articles from '@components/Articles';
import { getConfig, getAllPosts } from '@api';
const Marquee = dynamic(() => import('@components/Marquee'), { ssr: false });
const skills = [
  'JavaScript',
  'React',
  'Node.js',
  'Next.js',
  'Authentication',
  'REST API',
  'GraphQL',
  'SQL Server',
  'PowerShell',
  'OAuth',
];
const Blog = (props) => (
  <DefaultLayout title={props.title} description={props.description}>
    <Intro />
    {/* <Marquee data={skills} padding={20} /> */}
    {/* <Articles posts={props.posts} /> */}
  </DefaultLayout>
);

export async function getStaticProps() {
  const config = await getConfig();
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description,
    },
  };
}
export default Blog;
