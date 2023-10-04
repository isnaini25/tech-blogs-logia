import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

export default function SimpleCard(props) {
  return (
    <Link href={`/article/${props.slug}`} className='block group'>
      <Image
        width={630}
        height={375}
        src={props.thumbnail}
        alt={props.slug}
        className='object-cover w-full rounded aspect-square max-h-[50vh]'
      />

      <div className='mt-3'>
        <time
          dateTime={dateFormat(props.createdAt)}
          className='block text-xs text-gray-500'
        >
          {dateFormat(props.createdAt)}
        </time>
        <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
          {props.title}
        </h3>

        <p className='mt-1 text-sm text-gray-700'>{props.subtitle}</p>
      </div>
    </Link>
  );
}
