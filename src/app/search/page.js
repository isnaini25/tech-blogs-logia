import PostBySearching from '@/components/PostSection/PostBySearching';
import { baseMetadata } from '@/utils/baseMetadata';

export async function generateMetadata({ searchParams }) {
  const mtd = {
    ...baseMetadata,
    title: 'Search | ' + searchParams.keyword,
    url: process.env.NEXT_PUBLIC_BASEURL + 'search',
  };
  return {
    ...mtd,
    twitter: mtd,
    openGraph: mtd,
  };
}
export default function Page() {
  return <PostBySearching />;
}
