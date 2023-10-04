export default function TextCardLoading({ withImage }) {
  return (
    <div className='animate-pulse flex p-2 mb-2'>
      {withImage && <div className='w-32 h-24 bg-gray-300 rounded-md mb-3' />}
      <div className='w-full ml-2'>
        <div className='w-full h-4 bg-gray-300 rounded-xl mb-2' />
        <div className='w-full h-4 bg-gray-300 rounded-xl mb-2' />
        <div className='w-3/4 h-4 bg-gray-300 rounded-xl mb-2' />
        <div className='w-1/4 h-3 bg-gray-300 rounded-xl mb-2' />
      </div>
    </div>
  );
}
