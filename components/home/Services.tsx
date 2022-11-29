import Image from 'next/image';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppButton from '../Button';
import CircleButton from '../CircleButton';
import BG3Logo from '../../assets/image/bg3.jpg';
import ServiceItem from './ServiceItem';

export default function Services() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section className='my-16 bg-gray-700 text-white py-16 services'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
        <article>
          <h3 className='text-main font-semibold'>
            Sustainable, Reliable & Affordable Energy!
          </h3>
          <h2 className='font-bold text-4xl mb-8 max-w-sm'>
            Providing Value To Our ClientsThrough Ongoing Product & Innovation.
          </h2>
        </article>
        <article>
          <p className='mb-4'>
            While improving the yield and performance of solar energy products,
            our PV industry experience enables us to provide in-depth material
            sourcing, financing and supply chain expertise for every step.
          </p>
          <p className='mb-4'>
            Raw polycrystalline silicon for PV manufacturing. Offered in various
            grades and formats including chunks, chips, powder and ingot.
          </p>
          <div className='flex'>
            <AppButton text='Get Started' />
          </div>
        </article>
      </div>
      <div className='container mx-auto mt-16'>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          spaceBetween={30}
          pagination={pagination}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='Solar Home Systems'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='Bombas Solares'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='Camâras de frio'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='Soluções energéticas'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='Motas eléctricas'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={BG3Logo}
              title='desenvolvimento de projectos'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
