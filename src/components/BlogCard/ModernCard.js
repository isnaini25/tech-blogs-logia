import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

export default function ModernCard(props) {
  const date = dateFormat(props.createdAt, 'MMM DD');
  const year = dateFormat(props.createdAt, 'YYYY');
  return (
    <Link
      className='flex bg-white transition hover:shadow-xl mb-4 max-w-screen-xl'
      href={`/article/${props.slug}`}
    >
      <div className='rotate-180 p-2 [writing-mode:_vertical-lr]'>
        <time
          dateTime={dateFormat(props.createdAt, 'DD-MMM-YYYY')}
          className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900'
        >
          <span>{year}</span>
          <span className='w-px flex-1 bg-gray-900/10'></span>
          <span>{date}</span>
        </time>
      </div>

      <div className='hidden sm:block sm:basis-56 relative'>
        <Image
          alt={props.slug}
          src={props.thumbnail}
          className='aspect-square h-full w-full object-cover '
          fill
          sizes='100%'
        />
      </div>

      <div className='flex flex-1 flex-col justify-between'>
        <div className='border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6'>
          <h1 className='font-bold uppercase text-gray-900'>{props.title}</h1>

          <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-700'>
            {props.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
