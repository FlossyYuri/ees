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

export default function CarouselItem({ image, box, title }: CarouselItemProps) {
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
            <AppButton href='#products' text={t.head.our} />
          </article>
        </section>
      </article>
    </>
  );
}
