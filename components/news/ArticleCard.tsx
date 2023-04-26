import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';
import { substringWithCompleteWord } from '../../utils';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

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
  const { auth }: any = useContext(AuthContext);
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
          <span>{new Date(createdAt).toLocaleDateString('pt-BR')}</span>
          <span>{author}</span>
        </div>
        <p className='text-gray-500'>
          {substringWithCompleteWord(description)}
        </p>
        <div className='flex justify-between mt-4 items-center'>
          <Link
            className='border-2 border-gray-500 flex items-center gap-2 truncate w-min rounded px-4 py-2'
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
          {auth ? (
            <Link
              href={`/news/${id}/edit`}
              className='w-min p-2 h-min transition-all bg-main fill-white hover:border-main hover:border hover:bg-white hover:fill-black rounded-lg text-white text-xs'
            >
              <svg
                width='20'
                height='21'
                viewBox='0 0 20 21'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M16.5 1.99963C16.1021 1.99963 15.7205 2.1577 15.4391 2.43907L14.6462 3.23196L16.768 5.35375L17.5609 4.56086C17.8423 4.27949 18.0003 3.89787 18.0003 3.49996C18.0003 3.10205 17.8423 2.72044 17.5609 2.43907C17.2795 2.1577 16.8979 1.99963 16.5 1.99963ZM15.3538 6.76796L13.232 4.64618L2 15.8782V18.036H4.08579L15.3538 6.76796ZM14.0249 1.02486C14.6813 0.368418 15.5717 -0.000366211 16.5 -0.000366211C17.4283 -0.000366211 18.3187 0.368417 18.9751 1.02486C19.6315 1.6813 20.0003 2.57162 20.0003 3.49996C20.0003 4.42831 19.6315 5.31863 18.9751 5.97507L5.20711 19.7431C5.01957 19.9306 4.76522 20.036 4.5 20.036H1C0.447715 20.036 0 19.5882 0 19.036V15.464C0 15.1987 0.105357 14.9444 0.292893 14.7569L14.0249 1.02486Z'
                />
              </svg>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
