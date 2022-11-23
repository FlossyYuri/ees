import Image, { StaticImageData } from 'next/image';
import CircleButton from '../CircleButton';

export interface ServiceItemProps {
  image: string | StaticImageData;
  title: string;
  content: string;
}

export default function ServiceItem({
  image,
  title,
  content,
}: ServiceItemProps) {
  return (
    <article className='bg-white text-gray-700 text-center rounded-lg p-8 flex flex-col items-center group'>
      <Image height={60} src={image} alt='Service 1' />
      <h3 className='font-semibold text-xl my-4'>{title}</h3>
      <p className='text-gray-500 mb-4'>{content}</p>
      <CircleButton text='Explore More' href='/' />
    </article>
  );
}
