import { BASE_metadata } from '@/app/page';
import PostByCategory from '@/components/PostSection/PostByCategory';

export async function generateMetadata({ params }) {
  const mtd = {
    ...BASE_metadata,
    title: `Logia | ${
      params.category.charAt(0).toUpperCase() + params.category.slice(1)
    }`,

    url: process.env.NEXT_PUBLIC_BASEURL + 'category/' + params.category,
  };
  return {
    ...mtd,
    twitter: mtd,
    openGraph: mtd,
  };
}

export default function Page(props) {
  const {
    params: { category },
  } = props;
  return <PostByCategory category={category} />;
}
