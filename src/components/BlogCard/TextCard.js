import dateFormat from '@/utils/dateFormat';
import Image from 'next/image';
import Link from 'next/link';

export default function TextCard(props) {
  return (
    <Link className='mb-4 flex ' href={`/article/${props.slug}`}>
      {props.number && (
        <p className='text-4xl font-bold ml-2 mr-5 mt-3'>{props.number}</p>
      )}
      {props.withImage && (
        <div className='mx-3 w-[30%] h-[90px] relative'>
          <Image
            alt={props.slug}
            src={props.thumbnail}
            width={420}
            height={250}
            // style={{ width: '100px', height: '100px' }}
            className='object-cover'
          />
        </div>
      )}
      <div className='w-[70%]'>
        <h3 className='mt-0.5 mb-1 text-md font-medium text-gray-900'>
          {props.title}
        </h3>

        <div className='mt-4 flex flex-wrap '>
          <span className='whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-xs text-slate-600 mr-3'>
            {props.category}
          </span>
          <time
            dateTime={dateFormat(props.createdAt)}
            className='block text-xs text-gray-500'
          >
            {dateFormat(props.createdAt)}
          </time>
        </div>
      </div>
    </Link>
  );
}
