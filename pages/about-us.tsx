import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutImage from '../assets/image/about.jpg';
import AppButton from '../components/Button';
import MainCarousel from '../components/home/MainCarousel';
import OurPartners from '../components/home/OurPartners';
import Services from '../components/home/Services';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const t = useTranslation();
  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>EES</title>
        <meta name='description' content='Solar energy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <MainCarousel />
        <section className='grid grid-cols-1 md:grid-cols-3 container mx-auto mt-24 gap-8'>
          <article className='rounded-2xl overflow-hidden'>
            <Image
              className='rounded-2xl h-full object-cover'
              src={AboutImage}
              alt='hello'
            />
          </article>
          <article className='col-span-2 flex flex-col'>
            <span className='flex px-4 py-1 bg-main rounded-lg md:truncate md:w-min text-white'>
              {t.head.title}
            </span>
            <h2 className='font-bold text-4xl mt-2 mb-4 text-gray-700'>
              {t.aboutSection.title}
            </h2>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <p className='text-gray-800 font-semibold'>{t.aboutSection.p1}</p>
              <p className='text-gray-500 font-semibold'>{t.aboutSection.p2}</p>
              <p className='text-gray-500 mt-4 col-span-2'>
                {t.aboutSection.p3}
              </p>
            </div>
            <div className='flex mt-4'>
              <AppButton text={t.aboutSection.button} type='dark' />
            </div>
          </article>
        </section>
        <Services />

        <OurPartners />
      </main>
      <Footer />
    </div>
  );
}
