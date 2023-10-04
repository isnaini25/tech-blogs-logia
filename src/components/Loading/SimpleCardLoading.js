export default function SimpleCardLoading() {
  return (
    <div className='animate-pulse'>
      <div className='w-full h-[45vh] bg-gray-300 rounded-md mb-3' />
      <div className='w-1/4 h-3 bg-gray-300 rounded-xl mb-2' />
      <div className='w-3/4 h-5 bg-gray-300 rounded-xl mb-2' />
      <div className='w-full h-3 bg-gray-300 rounded-xl mb-1' />
      <div className='w-3/4 h-3 bg-gray-300 rounded-xl mb-2' />
    </div>
  );
}
