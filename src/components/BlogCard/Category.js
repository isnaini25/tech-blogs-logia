import Image from 'next/image';
import Link from 'next/link';

export default function Category({ image, name, active }) {
  return (
    <Link
      href={`/category/${name.toLowerCase()}`}
      className={`group relative block bg-black mb-4 rounded-md h-32 ${
        active === name ? 'md:col-span-2 ' : undefined
      }`}
    >
      <Image
        fill={true}
        alt={name}
        src={image}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-70 rounded-md  ${
          active === name ? 'opacity-60' : 'opacity-50 '
        }`}
      />

      <div className='relative p-4 sm:p-6 lg:p-8 h-full max-md:p-2 grid place-items-center'>
        <p
          className={`text-xl font-bold text-white ${
            active ? 'max-md:text-[0.825em]' : ''
          } `}
        >
          {name}
        </p>
      </div>
    </Link>
  );
}
