export default function ModernCardLoading() {
  return (
    <div className='animate-pulse flex '>
      <div className='hidden sm:block aspect-square h-40 w-56 bg-gray-300 rounded-md mb-3 max-w-screen-xl' />
      <div className='w-full ml-3 mt-5'>
        <div className='w-full h-5 bg-gray-300 rounded-xl mb-4' />
        <div className='w-full h-3 bg-gray-300 rounded-xl mb-1' />
        <div className='w-full h-3 bg-gray-300 rounded-xl mb-1' />
        <div className='w-full h-3 bg-gray-300 rounded-xl mb-1' />
        <div className='w-3/4 h-3 bg-gray-300 rounded-xl mb-2' />
      </div>
    </div>
  );
}
