import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import Article from '../../components/news/Article';
import BG1Logo from '../../assets/image/bg1.jpg';
import BG4Logo from '../../assets/image/bg4.jpg';

export default function Home() {
  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>Contacts</title>
        <meta name='description' content='Contacts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        {/* 
        MAPS
         */}
        <div className='z-0 w-full bg-gray-600 h-96 overflow-hidden relative flex items-center'>
          <Image src={BG1Logo} alt='Hello' />
          <div className='absolute p-32 text-center text-white w-full'>
            <h1 className='text-6xl font-semibold'>Our blog</h1>
          </div>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto my-16'>
          <Article
            author='Jorge Garreth'
            date='1/11/2000'
            image={BG4Logo}
            message={`Batteries are the most expensive part of a solar system.
                  Between appropriately-size battery bank and a battery-based
                  inverter like the Outback Radian, you’re looking...`}
            tag='Solar Modules, Solar PV'
            title='How to Add Battery Backup to an Existing Grid Tied Solar
                  System by Yourself!'
          />
          <Article
            author='Martin Garreth'
            date='12/12/2000'
            image={BG4Logo}
            message={`Batteries are the most expensive part of a solar system.
                  Between appropriately-size battery bank and a battery-based
                  inverter like the Outback Radian, you’re looking...`}
            tag='Solar Modules, Solar PV'
            title='How to Add Battery Backup to an Existing Grid Tied Solar
                  System by Yourself!'
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
