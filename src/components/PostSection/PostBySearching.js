'use client';
import { useQuery } from '@tanstack/react-query';
import Heading from '../UI/Heading';
import { queryFn } from '@/query/queryFn';
import Button from '../UI/Button';
import BlogCard from '../BlogCard/BlogCard';
import BlogCardLoading from '../Loading/BlogCardLoading';
import { useState } from 'react';
import Categories from './Categories';
import { useSearchParams } from 'next/navigation';

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

  return (
    <div className='w-[90vw] mx-auto my-12 min-h-[50vh]'>
      <Heading
        text={`You search about ${keyword}...`}
        className={'text-center text-4xl mb-6 '}
      />
      <p className='text-center text-lg mb-3'>
        {isFetching ? 'Searching...' : `${data && data.length} article found`}
      </p>
      <div className='grid grid-cold-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 place-content-center xl:grid-cols-4'>
        {data &&
          data
            .slice(0, skip)
            .map((item) => <BlogCard key={item.slug} {...item} />)}
      </div>
      <div className='flex'>
        {!(data?.length <= skip) && !isFetching && (
          <Button text='Load More' onClick={loadMore} />
        )}
      </div>
    </div>
  );
}
