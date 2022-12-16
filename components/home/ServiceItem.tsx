import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import useTranslation from '../../hooks/useTranslation';
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
  const t = useTranslation();
  const [expand, setExpand] = useState(false);

  return (
    <article
      className={`bg-white text-gray-700 text-center rounded-lg p-8 flex flex-col items-center group ${
        expand ? '' : 'h-96'
      }`}
    >
      <Image height={60} src={image} alt='Service 1' />
      <h3 className='font-semibold text-xl my-4'>{title}</h3>
      <p
        className={`text-gray-500 mb-4 flex-1 w-full${
          expand ? '' : ' clamp-text'
        }`}
      >
        {content}
      </p>
      <CircleButton
        onClick={() => {
          setExpand(!expand);
        }}
        text={expand ? t.aboutSection.button2 : t.aboutSection.button}
        href='/'
      />
    </article>
  );
}
