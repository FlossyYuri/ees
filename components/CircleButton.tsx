import Link from 'next/link';
import { useState } from 'react';

export interface CircleButtonProps {
  href: string;
  text?: string;
  onClick?: () => void;
}

export default function CircleButton({
  href,
  text,
  onClick,
}: CircleButtonProps) {
  return (
    <button
      onClick={onClick}
      className='rounded-full bg-main py-2 px-4 flex items-center transition-all'
      type='button'
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
        <span className='text-white transform transition-all font-semibold ml-4'>
          {text}
        </span>
      ) : null}
    </button>
  );
}
