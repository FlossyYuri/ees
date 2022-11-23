import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface Box {
  image: string | StaticImageData;
  title: string;
  text: string;
}

export interface CarouselItemProps {
  image: string | StaticImageData;
  title: string;
  subtitle: string;
  box: Box;
}

export default function CarouselItem({
  image,
  box,
  subtitle,
  title,
}: CarouselItemProps) {
  return (
    <>
      <Image src={image} alt='BG1' />
      <article className='absolute h-full w-full p-24'>
        <section className='grid grid-cols-2 gap-4'>
          <article className='text-white flex flex-col items-start gap-4'>
            <h2 className='text-6xl font-bold'>{title}</h2>
            <h3 className='text-lg font-bold'>{subtitle}</h3>
            <Link
              className='px-8 py-4 bg-main text-white rounded-lg flex items-center justify-between gap-4'
              href='/'
            >
              <span className='truncate'>Our Services</span>
              <div className='h-4 w-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  viewBox='0 0 448 512'
                >
                  <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
                </svg>
              </div>
            </Link>
          </article>
          <article className='text-darker mx-auto'>
            <div className='bg-white rounded-lg p-8 flex flex-col items-center  max-w-xs'>
              <Image height={84} src={box.image} alt='BG1' />
              <h2 className='text-xl my-4 font-bold'>{box.title}</h2>
              <p className='text-center text-gray-400 mb-4'>{box.text}</p>
              <Link
                className='rounded-full bg-main h-8 w-8 p-2 flex justify-center items-center'
                href='/about-us'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='white'
                  viewBox='0 0 448 512'
                >
                  <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
                </svg>
              </Link>
            </div>
          </article>
        </section>
      </article>
    </>
  );
}
