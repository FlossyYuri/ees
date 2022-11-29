import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import PartnerLogo1 from '../../assets/image/partners/Client-01.png';
import PartnerLogo2 from '../../assets/image/partners/Client-02.png';
import PartnerLogo3 from '../../assets/image/partners/Client-03.png';
import PartnerLogo4 from '../../assets/image/partners/Client-04.png';
import PartnerLogo5 from '../../assets/image/partners/Client-05.png';
import PartnerLogo6 from '../../assets/image/partners/Client-06.png';
import PartnerLogo7 from '../../assets/image/partners/Client-07.png';
import PartnerLogo8 from '../../assets/image/partners/Client-08.png';
import PartnerLogo9 from '../../assets/image/partners/Client-09.png';

export default function OurPartners() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section className='container mx-auto brand my-16'>
      <h2 className='text-center font-bold text-4xl mb-8 text-gray-700'>
        Our partners
      </h2>
      <Swiper
        slidesPerView='auto'
        centeredSlides={true}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        grabCursor={true}
        loop
        pagination={pagination}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image height={48} src={PartnerLogo1} alt='logo 1' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo2} alt='logo 2' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo3} alt='logo 3' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo4} alt='logo 4' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo5} alt='logo 5' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo6} alt='logo 6' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo7} alt='logo 7' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo8} alt='logo 8' />
        </SwiperSlide>
        <SwiperSlide>
          <Image height={48} src={PartnerLogo9} alt='logo 9' />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
