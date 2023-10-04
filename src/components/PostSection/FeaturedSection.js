'use client';

import Link from 'next/link';
import Categories from './Categories';
import { useQuery } from '@tanstack/react-query';
import SimpleCard from '../BlogCard/SimpleCard';
import SimpleCardLoading from '../Loading/SimpleCardLoading';
import { queryFn } from '@/query/queryFn';

export default function FeaturedSection() {
  const { data, isLoading } = useQuery({
    queryKey: ['trending'],
    queryFn: async () => {
      const data = await queryFn('metadata.tags.sys.id[all]=trending');

      const sanitizedResponse = {
        ...data[0].fields,
        createdAt: data[0].sys.createdAt,
      };

      return sanitizedResponse;
    },
  });

  return (
    <section>
      <div className='max-w-[90vw] py-8 mx-auto sm:py-12 sm:px-6 '>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
          <Categories />

          <div className='lg:col-span-2 max-lg:order-first'>
            {isLoading ? <SimpleCardLoading /> : <SimpleCard {...data} />}
          </div>
        </div>
      </div>
    </section>
  );
}
