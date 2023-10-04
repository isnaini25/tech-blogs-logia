'use client';

import { useQuery } from '@tanstack/react-query';
import ModernCard from '../BlogCard/ModernCard';
import Heading from '../UI/Heading';
import ModernCardLoading from '../Loading/ModernCardLoading';
import { queryFn } from '@/query/queryFn';

export default function TodaysPicks() {
  const { data, isLoading } = useQuery({
    queryKey: ['todays-picks'],
    queryFn: async () => {
      const data = await queryFn(`metadata.tags.sys.id[all]=todaysPicks`);

      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));
      return sanitizedResponse;
    },
  });

  let Loading = [];
  for (let i = 0; i < 4; i++) {
    Loading.push(<ModernCardLoading key={i} />);
  }
  return (
    <div className='lg:col-span-2'>
      <Heading text={`Today's Picks`} />
      <div>
        {isLoading
          ? Loading
          : data.map((item) => {
              return <ModernCard key={item.slug} {...item} />;
            })}
      </div>
    </div>
  );
}
