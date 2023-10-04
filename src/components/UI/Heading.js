export default function Heading({ text, className }) {
  return (
    <div className='flex mb-3 items-center'>
      <h1
        className={`text-xl w-max whitespace-nowrap font-bold font-[serif] text-slate-800  mr-2 ${className}`}
      >
        {text}
      </h1>
      <div className='bg-gray-900/10  w-full h-[0.15rem] rounded-xl' />
    </div>
  );
}
