'use client';
import { useQuery } from '@tanstack/react-query';
import TextCard from '../BlogCard/TextCard';
import Heading from '../UI/Heading';
import TextCardLoading from '../Loading/TextCardLoading';
import { queryFn } from '@/query/queryFn';

export default function TopPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ['top-posts'],
    queryFn: async () => {
      const data = await queryFn(`metadata.tags.sys.id[all]=topPosts`);
      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));
      return sanitizedResponse;
    },
  });
  let Loading = [];
  for (let i = 0; i < 5; i++) {
    Loading.push(<TextCardLoading key={i} />);
  }

  return (
    <div className='p-2'>
      <Heading text='Top Posts 🔥' />
      {isLoading
        ? Loading
        : data.map((item, i) => (
            <TextCard number={i + 1} key={item.slug} {...item} />
          ))}
    </div>
  );
}
