import Link from 'next/link';

export interface CircleButtonProps {
  href: string;
  text?: string;
}

export default function CircleButton({ href, text }: CircleButtonProps) {
  return (
    <Link
      className='rounded-full bg-main p-2 flex items-center transition-all group-hover:px-4'
      href={href}
    >
      <div className='h-4 w-4 flex justify-center items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          viewBox='0 0 448 512'
        >
          <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
        </svg>
      </div>

      {text ? (
        <span className='text-white transform w-0 h-0 transition-all scale-0 font-semibold group-hover:scale-100 group-hover:w-28 group-hover:h-6 group-hover:ml-4'>
          {text}
        </span>
      ) : null}
    </Link>
  );
}
