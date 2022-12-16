import Link from 'next/link';
export interface ButtonProps {
  type?: 'main' | 'dark' | 'light';
  text: string;
  href?: string;
}

const renderColors = (type: 'main' | 'dark' | 'light') => {
  switch (type) {
    case 'dark':
      return 'bg-gray-700 hover:bg-main text-white fill-white';
    case 'light':
      return '';

    default:
      return 'bg-main hover:bg-white text-white hover:text-gray-700 fill-white hover:fill-gray-700';
  }
};

export default function AppButton({
  text,
  type = 'main',
  href = '/',
}: ButtonProps) {
  return (
    <Link
      className={`px-8 py-4 transition-all rounded-lg flex items-center justify-between gap-4 ${renderColors(
        type
      )}`}
      href={href}
    >
      <span className='truncate'>{text}</span>
      <div className='h-4 w-4'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
        </svg>
      </div>
    </Link>
  );
}
