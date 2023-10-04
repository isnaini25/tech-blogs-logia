import Image from 'next/image';
import Link from 'next/link';
import SearchForm from '../SearchForm/SearchForm';

export default function MainNavigation() {
  return (
    <header className='bg-white sticky top-0 z-20 '>
      <div className='mx-auto  px-4 py-8 sm:px-6 lg:px-8 max-sm:py-2'>
        <div className='flex items-center justify-between gap-4  max-sm:flex-col'>
          <div className='max-sm:self-start'>
            <Link
              className='text-2xl font-bold text-gray-900 sm:text-3xl font-[serif]'
              href='/'
            >
              L O G I A
            </Link>
          </div>
          <div className='flex items-center gap-4'>
            <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}
