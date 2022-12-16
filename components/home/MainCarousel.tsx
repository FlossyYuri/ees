import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselItem from '../../components/home/CarouselItem';
import { CAROUSEL_ITEMS } from '../../data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/router';
import { en, pt } from '../../translations';

export default function MainCarousel() {
  const router = useRouter();
  const t = router.locale === 'pt' ? pt : en;
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
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
        className='h-full'
      >
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS(t)[0]} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS(t)[1]} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS(t)[2]} />
        </SwiperSlide>
        <SwiperSlide className='flex items-center relative'>
          <CarouselItem {...CAROUSEL_ITEMS(t)[3]} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
