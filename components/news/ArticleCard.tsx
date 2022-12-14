import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';

export interface ArticleProps {
  image: string | StaticImageData;
  tag?: string;
  title: string;
  createdAt: string;
  author: string;
  description: string;
  id?: string;
}

export default function ArticleCard({
  image,
  id,
  tag,
  title,
  author,
  createdAt,
  description,
}: ArticleProps) {
  const t = useTranslation();
  return (
    <article className='rounded-lg shadow-xl pb-8 news-articles relative overflow-hidden'>
      <div className='flex mr-12 h-48 md:h-80 rounded-br-xl overflow-hidden'>
        <Image
          className='rounded-br-xl h-full w-full object-cover'
          src={image}
          alt='alt'
          height={1000}
          width={1000}
        />
      </div>
      <div className='px-8'>
        <span className='relative block w-min p-2 truncate z-20 -mt-4 mb-4 bg-main rounded-lg text-white text-xs'>
          {tag}
        </span>
        <h3 className='font-semibold text-lg mb-2'>{title}</h3>
        <div className='flex text-xs mb-2 text-gray-600 justify-between'>
          <span>{createdAt}</span>
          <span>{author}</span>
        </div>
        <p className='text-gray-500'>{description}</p>
        <Link
          className='border-2 border-gray-500 flex items-center gap-2 truncate w-min rounded px-4 py-2 mt-4'
          href={`/news/${id}`}
        >
          <span>{t.aboutSection.button}</span>
          <div className='w-5 h-5'>
            <svg
              fill='black'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path d='M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM297 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l214.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L409 239c9.4 9.4 9.4 24.6 0 33.9L297 385z' />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}
