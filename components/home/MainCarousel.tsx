import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from '../../components/home/CarouselItem';
import { CAROUSEL_ITEMS } from '../../data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function MainCarousel() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <section className='swipper-container-sm swipper-container'>
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Navigation, Pagination]}
        className='h-full'
      >
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS[0]} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS[1]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
