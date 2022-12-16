import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import FridgeLogo from '../../assets/image/home/fridge.png';
import PumpLogo from '../../assets/image/home/pump.png';
import SolarEnergyLogo from '../../assets/image/home/solar-energy.png';
import SolarLogo from '../../assets/image/home/solar-panel.png';
import useTranslation from '../../hooks/useTranslation';
import AppButton from '../Button';
import ServiceItem from './ServiceItem';

export default function Services() {
  const t = useTranslation();
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <section
      id='products'
      className='my-16 bg-gray-700 text-white py-16 services'
    >
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
        <article>
          <h3 className='text-main font-semibold'>{t.services.title}</h3>
          <h2 className='font-bold text-4xl mb-8 max-w-sm'>
            {t.services.description}
          </h2>
        </article>
        <article>
          <p className='mb-4'>{t.services.description2}</p>
          <div className='flex'>
            <AppButton text={t.services.get} />
          </div>
        </article>
      </div>
      <div className='container mx-auto mt-16'>
        <Swiper
          slidesPerView={1}
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
              image={SolarLogo}
              title={t.services.item1.title}
              content={t.services.item1.content}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={PumpLogo}
              title={t.services.item2.title}
              content={t.services.item2.content}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={FridgeLogo}
              title={t.services.item3.title}
              content={t.services.item3.content}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={SolarEnergyLogo}
              title={t.services.item4.title}
              content={t.services.item4.content}
            />
          </SwiperSlide>
          {/* <SwiperSlide>
            <ServiceItem
              image={ElectricLogo}
              title='Motas eléctricas'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={ProjectLogo}
              title='desenvolvimento de projectos'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
            />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}
