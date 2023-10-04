'use client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import ImageLoading from '../Loading/ImageLoading';
import ArticleLoading from '../Loading/ArticleLoading';
import PopularPosts from '../PostSection/PopularPosts';
import dateFormat from '@/utils/dateFormat';
import { fetch } from '@/utils/axiosConfig';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function Post({ slug }) {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['detail-post', slug],
    queryFn: async () => {
      const response = await fetch.get(
        `entries?content_type=blog-post&fields.slug=${slug}`
      );

      const sanitizedResponse = {
        ...response.data.items[0].fields,
        createdAt: response.data.items[0].sys.createdAt,
        content: documentToHtmlString(response.data.items[0].fields.content),
      };

      return sanitizedResponse;
    },
  });

  return (
    <div className='relative'>
      {isLoading ? (
        <ImageLoading />
      ) : (
        <>
          <div className='w-screen h-[50vh] md:h-[90vh] relative '>
            <Image
              fill
              sizes='100vw'
              alt={data.slug}
              src={data.thumbnail}
              className='w-full object-cover'
            />
          </div>
          <div className='md:mx-4 my-3 mx-3 xl:mx-12'>
            <div className='mb-2 font-[courier]'>
              <span className='whitespace-nowrap rounded-full bg-slate-700 px-2.5 py-0.5 text-sm text-slate-100'>
                {data.category}
              </span>
              <time className='ml-2 text-sm'>
                {dateFormat(data.createdAt, 'DD MMMM YYYY hh:mm A')}
              </time>
            </div>
            <h1 className='text-3xl font-bold '>{data.title}</h1>
            <p className='italic'>{data.subtitle}</p>
          </div>
        </>
      )}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  mb-12 '>
        <div className='lg:col-span-2 lg:max-w-[1200px]'>
          {isLoading ? (
            <ArticleLoading />
          ) : (
            <article
              className='p-12'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          )}
        </div>
        <div>
          <PopularPosts slug={slug} />
        </div>
      </div>
    </div>
  );
}
