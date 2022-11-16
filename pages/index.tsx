import Head from 'next/head';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Logo from '../assets/image/logo.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>EES</title>
        <meta name='description' content='Solar energy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className='flex text-darker'>
        <div className='px-12 border-r border-gray-300'>
          <Image height={80} src={Logo} />
        </div>
        <nav className='flex flex-1 px-8'>
          <ul className='flex gap-8 font-semibold'>
            <li className='text-main'>
              <a className='block h-full py-6' href='#'>
                Home
              </a>
            </li>
            <li>
              <a className='block h-full py-6' href='#'>
                About us
              </a>
            </li>
            <li>
              <a className='block h-full py-6' href='#'>
                News
              </a>
            </li>
            <li>
              <a className='block h-full py-6' href='#'>
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='h-96'>
          <Swiper
            pagination={pagination}
            navigation={true}
            modules={[Navigation, Pagination]}
            className='h-full'
          >
            <SwiperSlide className='h-48'>Slide 1</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 2</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 3</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 4</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 5</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 6</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 7</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 8</SwiperSlide>
            <SwiperSlide className='h-48'>Slide 9</SwiperSlide>
          </Swiper>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
