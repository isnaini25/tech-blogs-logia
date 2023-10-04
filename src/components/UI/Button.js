import Link from 'next/link';

export default function Button({ text, onClick, disabled }) {
  return (
    <button
      className={`group relative inline-block overflow-hidden border  px-8 py-3 focus:outline-none focus:ring my-12 mx-auto ${
        disabled ? 'border-gray-400' : 'border-indigo-600'
      }`}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {!disabled && (
        <span
          className={`absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500 `}
        ></span>
      )}

      <span
        className={`relative text-sm font-medium  transition-colors ${
          disabled ? '' : 'text-indigo-600 group-hover:text-white'
        }`}
      >
        {text}
      </span>
    </button>
  );
}
