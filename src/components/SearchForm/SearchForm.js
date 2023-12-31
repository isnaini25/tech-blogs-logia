'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export default function SearchForm() {
  const keywordRef = useRef(null);
  const router = useRouter();
  const submitHandler = (event) => {
    event.preventDefault();

    router.push('/search?keyword=' + keywordRef.current.value);
  };
  return (
    <form
      className='relative w-[50vw] max-w-[600px] max-sm:w-[80vw] '
      onSubmit={submitHandler}
    >
      <label className='sr-only' htmlFor='search'>
        Search
      </label>

      <input
        className='h-10 w-full  rounded-full border-none bg-gray-200 pe-10 ps-4 text-sm shadow-sm '
        id='search'
        name='keyword'
        type='search'
        placeholder='Search post...'
        autoComplete='off'
        ref={keywordRef}
      />

      <button
        type='submit'
        className='absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700'
      >
        <span className='sr-only'>Search</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth='2'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
          />
        </svg>
      </button>
    </form>
  );
}
