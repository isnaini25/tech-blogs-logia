import Post from '@/components/Post/Post';
import RecentPosts from '@/components/PostSection/RecentPosts';
import { fetch } from '@/utils/axiosConfig';

export async function generateMetadata({ params }) {
  // fetch data
  const post = await fetch(
    `entries?content_type=blog-post&fields.slug=${params.slug}`
  ).then((response) => {
    return {
      ...response.data.items[0].fields,
      createdAt: response.data.items[0].sys.createdAt,
    };
  });

  const metadata = {
    title: post.title,
    description: post.subtitle,
    url: 'https://logia.isnainis.tech/article/' + params.slug,
    images: {
      url: post.thumbnail,
      alt: post.title,
    },
  };
  return {
    ...metadata,
    twitter: metadata,
    openGraph: {
      ...metadata,
      type: 'article',
      publishedTime: post.createdAt,
      tag: post.category,
    },
  };
}

export async function generateStaticParams() {
  const posts = await fetch(`entries?content_type=blog-post`).then(
    (response) => {
      return response.data.items;
    }
  );

  return posts.map((post) => ({ slug: post.fields.slug }));
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
