import PostBySearching from '@/components/PostSection/PostBySearching';
import { BASE_metadata } from '../page';

export async function generateMetadata({ searchParams }) {
  const mtd = {
    ...BASE_metadata,
    title: 'Search | ' + searchParams.keyword,
    url: process.env.NEXT_PUBLIC_BASEURL + 'search',
  };
  return {
    ...mtd,
    twitter: mtd,
    openGraph: mtd,
  };
}
export default function page() {
  return <PostBySearching />;
}
