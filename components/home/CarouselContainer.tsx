import { Navigation, Pagination } from 'swiper';
import { Swiper } from 'swiper/react';
import CarouselItem, { CarouselItemProps } from './CarouselItem';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
  carouselItems: CarouselItemProps[];
}

export default function CarouselContainer({ carouselItems }: Props) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <Swiper
      pagination={pagination}
      navigation={true}
      modules={[Navigation, Pagination]}
    >
      {carouselItems.map((item, index) => (
        <CarouselItem key={item.title + index} {...item} />
      ))}
    </Swiper>
  );
}
