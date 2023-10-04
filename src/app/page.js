import Categories from '@/components/PostSection/Categories';
import FeaturedSection from '@/components/PostSection/FeaturedSection';
import RecentPosts from '@/components/PostSection/RecentPosts';
import TodaysPicks from '@/components/PostSection/TodaysPicks';
import TopPosts from '@/components/PostSection/TopPosts';

export const BASE_metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASEURL),
  title: 'Logia | Latest Technology News',
  description:
    'Stay up to date with the latest technology news, advancements in gadgets, programming updates, and innovative design trends in the industry. Explore the world of technology and stay informed.',
  url: 'https://logia.isnainis.tech',
  images: 'https://logia.isnainis.tech/og',
};

export const metadata = {
  ...BASE_metadata,
  twitte: BASE_metadata,
  openGraph: BASE_metadata,
};

export default function Home() {
  return (
    <>
      <FeaturedSection />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 h-max mx-10 w-[90vw] mx-auto'>
        <div>
          <TopPosts />
        </div>
        <TodaysPicks />
      </div>
      <div className=' my-12 w-[90vw] mx-auto'>
        <RecentPosts />
      </div>
    </>
  );
}
