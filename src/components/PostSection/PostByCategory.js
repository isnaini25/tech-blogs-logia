'use client';
import { useQuery } from '@tanstack/react-query';
import Heading from '../UI/Heading';
import { queryFn } from '@/query/queryFn';
import Button from '../UI/Button';
import BlogCard from '../BlogCard/BlogCard';
import BlogCardLoading from '../Loading/BlogCardLoading';
import { useState } from 'react';
import Categories from './Categories';

export default function PostByCategory({ category }) {
  const [skip, setSkip] = useState(6);
  const capCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const { data, isLoading, isFetchedAfterMount } = useQuery({
    queryKey: ['post-category'],
    queryFn: async () => {
      const data = await queryFn(`fields.category=${capCategory}`);
      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));

      return sanitizedResponse;
    },
  });

  const Loading = [];

  for (let i = 0; i < skip; i++) {
    Loading.push(<BlogCardLoading key={i} />);
  }

  const loadMore = () => {
    setSkip((prev) => prev + prev);
  };
  return (
    <div className='w-[90vw] mx-auto my-12'>
      <Categories
        className='grid grid-cols-4 max-md:grid-cols-3 gap-4 max-md:gap-2 mb-6'
        active={capCategory}
        heading={false}
      />
      <Heading text={capCategory} className={'text-center text-4xl mb-6 '} />
      <div className='grid grid-cold-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 place-content-center xl:grid-cols-4'>
        {isLoading || !isFetchedAfterMount
          ? Loading
          : data
              .slice(0, skip)
              .map((item) => <BlogCard key={item.slug} {...item} />)}
      </div>
      <div className='flex'>
        {!(data?.length <= skip) && (
          <Button text='Load More' onClick={loadMore} />
        )}
      </div>
    </div>
  );
}
