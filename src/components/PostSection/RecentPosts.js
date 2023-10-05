'use client';
import { useQuery } from '@tanstack/react-query';
import Heading from '../UI/Heading';
import BlogCard from '../BlogCard/BlogCard';
import Button from '../UI/Button';
import BlogCardLoading from '../Loading/BlogCardLoading';
import { useEffect, useState } from 'react';
import { queryFn } from '@/query/queryFn';

export default function RecentPosts() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(document.body.offsetWidth);
    setSkip(width > 1400 ? 8 : 6);
  }, [width]);
  const [skip, setSkip] = useState(width > 1400 ? 8 : 6);
  const { data, isLoading } = useQuery({
    queryKey: ['recent-posts'],
    queryFn: async () => {
      const data = await queryFn();

      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));

      return sanitizedResponse;
    },
  });

  let Loading = [];
  for (let i = 0; i < skip; i++) {
    Loading.push(<BlogCardLoading key={i} />);
  }

  const loadMore = () => {
    setSkip((prev) => prev + prev);
  };
  useEffect(() => {}, [data]);
  return (
    <>
      <Heading text='Most Recent' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 place-content-center xl:grid-cols-4'>
        {isLoading
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
    </>
  );
}
