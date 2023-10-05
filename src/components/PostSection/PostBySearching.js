'use client';
import { useQuery } from '@tanstack/react-query';
import { queryFn } from '@/query/queryFn';
import Button from '../UI/Button';
import BlogCard from '../BlogCard/BlogCard';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogCardLoading from '../Loading/BlogCardLoading';

export default function PostBySearching() {
  const [skip, setSkip] = useState(6);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  const { data, isFetching } = useQuery({
    queryKey: ['post-searching', keyword],
    queryFn: async () => {
      const data = await queryFn(`fields.content[match]=${keyword}`);
      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));

      return sanitizedResponse;
    },
  });

  const loadMore = () => {
    setSkip((prev) => prev + 6);
  };

  const Loading = [];

  for (let i = 0; i < 6; i++) {
    Loading.push(<BlogCardLoading key={i} />);
  }
  return (
    <div className='w-[90vw] mx-auto my-12 min-h-[50vh]'>
      <p className='text-center text-lg mb-3'>
        {`You search about ${keyword}...`}
        <br />
        {isFetching ? 'Searching...' : `${data && data.length} article found`}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 place-content-center xl:grid-cols-4'>
        {data
          ? data
              .slice(0, skip)
              .map((item) => <BlogCard key={item.slug} {...item} />)
          : Loading}
      </div>
      <div className='flex'>
        {!(data?.length <= skip) && !isFetching && (
          <Button text='Load More' onClick={loadMore} />
        )}
      </div>
    </div>
  );
}
