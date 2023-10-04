import Post from '@/components/Post/Post';
import RecentPosts from '@/components/PostSection/RecentPosts';
import { fetch } from '@/utils/axiosConfig';

export async function generateMetadata({ params }, parent) {
  // fetch data
  const post = await fetch(
    `entries?content_type=blog-post&fields.slug=${params.slug}`
  ).then((response) => {
    return { ...response.data.items[0].fields };
  });

  const metadata = {
    title: post.title,
    description: post.subtitle,
    url: 'https://logia.isnainis.tech/article/' + params.slug,
  };
  return {
    ...metadata,
    twitter: metadata,
    openGraph: metadata,
  };
}

export default function Page(props) {
  const {
    params: { slug },
  } = props;

  return (
    <>
      <Post slug={slug} />{' '}
      <div className='mx-10 mb-12 '>
        <RecentPosts />
      </div>
    </>
  );
}
