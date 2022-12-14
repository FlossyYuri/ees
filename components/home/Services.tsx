import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import FridgeLogo from '../../assets/image/home/fridge.png';
import PumpLogo from '../../assets/image/home/pump.png';
import SolarEnergyLogo from '../../assets/image/home/solar-energy.png';
import SolarLogo from '../../assets/image/home/solar-panel.png';
import AppButton from '../Button';
import ServiceItem from './ServiceItem';

export default function Services() {
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
          <h3 className='text-main font-semibold'>
            Energia sustentável, confiável e acessível!
          </h3>
          <h2 className='font-bold text-4xl mb-8 max-w-sm'>
            Fornecemos valor aos nossos clientes por meio de produtos e inovação
            contínua.
          </h2>
        </article>
        <article>
          <p className='mb-4'>
            A Epsilon Energia Solar tem uma rede em expansão de clientes
            distribuídos por 4 Províncias, oferecendo-lhes uma variedade de
            produtos e soluções energéticas.
          </p>
          <div className='flex'>
            <AppButton text='Get Started' />
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
              title='Solar Home Systems'
              content='Produtos Solares Residenciais SUNKING são a marca que a EES oferece para as soluções energéticas de baixo custo em pagamento CASH ou PAYGO. Temos equipamentos de gama de entrada (50 lumens) até soluções de 12W com 5 lâmpadas.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={PumpLogo}
              title='Bombas Solares'
              content='Parceiros da LORENTZ em Moçambique, oferecemos uma variedade de produtos e soluções. Projectamos e instalamos sistemas de bombas submersíveis e de superfície de alta qualidade, sempre alimentadas a partir de fontes de energia renováveis. As bombas submersíveis são ideais para a captação de água de furos, enquanto as bombas de superfície podem ser utilizadas como bombas de circulação para piscinas ou para o aumento de pressão em aplicações domésticas.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={FridgeLogo}
              title='Camâras de frio'
              content='Desenvolvemos o produto mediante as suas necessidades, os sistemas de frio off grid podem ser a solução do seu negócio.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceItem
              image={SolarEnergyLogo}
              title='Sistemas Autónomos'
              content='Save money on utilities or increase the value of your home by
                installing solar panels as a great option.'
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
