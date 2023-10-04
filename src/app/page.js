import FeaturedSection from '@/components/PostSection/FeaturedSection';
import RecentPosts from '@/components/PostSection/RecentPosts';
import TodaysPicks from '@/components/PostSection/TodaysPicks';
import TopPosts from '@/components/PostSection/TopPosts';
import { baseMetadata } from '@/utils/baseMetadata';

export const metadata = {
  ...baseMetadata,
  twitte: baseMetadata,
  openGraph: baseMetadata,
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
