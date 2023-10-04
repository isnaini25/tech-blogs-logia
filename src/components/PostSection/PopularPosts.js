import TextCard from '../BlogCard/TextCard';
import Heading from '../UI/Heading';
import { useQuery } from '@tanstack/react-query';
import TextCardLoading from '../Loading/TextCardLoading';
import { queryFn } from '@/query/queryFn';

export default function PopularPosts({ slug }) {
  const { data, isLoading } = useQuery({
    queryKey: ['popular-posts'],
    queryFn: async () => {
      const data = await queryFn(`limit=5&fields.slug[ne]=${slug}`);

      const sanitizedResponse = data.map((item) => ({
        ...item.fields,
        createdAt: item.sys.createdAt,
      }));
      return sanitizedResponse;
    },
  });

  let Loading = [];
  for (let i = 0; i < 5; i++) {
    Loading.push(<TextCardLoading withImage={true} key={i} />);
  }
  return (
    <div className='sticky top-32 mr-12 max-lg:mx-12'>
      <Heading text='Popular' />
      {isLoading
        ? Loading
        : data.map((item) => (
            <TextCard withImage={true} key={item.slug} {...item} />
          ))}
    </div>
  );
}
