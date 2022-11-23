import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppButton from '../Button';
import CircleButton from '../CircleButton';

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
            <AppButton text='Our Services' />
          </article>
          <article className='text-darker mx-auto'>
            <div className='bg-white rounded-lg p-8 flex flex-col items-center relative carousel-card max-w-xs'>
              <Image height={84} src={box.image} alt='BG1' />
              <h2 className='text-xl my-4 font-bold'>{box.title}</h2>
              <p className='text-center text-gray-400 mb-4'>{box.text}</p>
              <CircleButton href='/' />
            </div>
          </article>
        </section>
      </article>
    </>
  );
}
