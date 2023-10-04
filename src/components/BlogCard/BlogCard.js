import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard(props) {
  return (
    <Link
      className='overflow-hidden  max-w-screen-sm rounded-lg shadow transition hover:shadow-lg bg-white '
      href={`/article/${props.slug}`}
    >
      <Image
        alt={props.slug}
        src={props.thumbnail}
        className='h-56 w-full object-cover '
        width={420}
        height={250}
      />

      <div className='p-4 sm:p-3'>
        <div className='flex justify-between'>
          <time
            dateTime={dateFormat(props.createdAt, 'DD MMM YYYY')}
            className='block text-xs text-gray-500'
          >
            {dateFormat(props.createdAt, 'DD MMM YYYY')}
          </time>
          <span className='whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-slate-600 mr-3 '>
            {props.category}
          </span>
        </div>
        <h3 className='mt-0.5 text-lg text-gray-900'>{props.title}</h3>

        <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
}
