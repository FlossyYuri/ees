import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useTranslation from '../../hooks/useTranslation';
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
  const t = useTranslation();
  return (
    <>
      <Image
        className='w-full object-cover filter brightness-50'
        src={image}
        alt='BG1'
      />
      <article className='absolute h-full w-full p-4 md:p-24 text-center md:text-left'>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <article className='text-white flex flex-col items-center md:items-start gap-4'>
            <h2 className='text-4xl md:text-6xl font-bold'>{title}</h2>
            <h3 className='text-lg font-bold'>{subtitle}</h3>
            <AppButton href='#products' text={t.head.our} />
          </article>
          <article className='text-darker mx-auto hidden md:block'>
            <div className='bg-white rounded-lg p-8 flex flex-col items-center relative carousel-card max-w-xs'>
              <Image
                className='filter brightness-0'
                height={84}
                src={box.image}
                alt='BG1'
              />
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
