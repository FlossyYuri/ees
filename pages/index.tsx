import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../assets/image/bg1.jpg';
import BG4Logo from '../assets/image/bg4.jpg';
import BG5Logo from '../assets/image/bg5.jpg';
import AppButton from '../components/Button';
import MainCarousel from '../components/home/MainCarousel';
import OurPartners from '../components/home/OurPartners';
import Services from '../components/home/Services';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Article from '../components/news/Article';

export default function Home() {
  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>EES</title>
        <meta name='description' content='Solar energy' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <MainCarousel />
        <section className='grid grid-cols-1 md:grid-cols-3 container mx-auto mt-24 gap-8'>
          <article className='rounded-2xl overflow-hidden'>
            <Image
              className='rounded-2xl h-full object-cover'
              src={BG1Logo}
              alt='hello'
            />
          </article>
          <article className='col-span-2 flex flex-col'>
            <span className='flex px-4 py-1 bg-main rounded-lg md:truncate md:w-min text-white'>
              Complete Commercial And Residential Solar Systems
            </span>
            <h2 className='font-bold text-4xl mt-2 mb-4 text-gray-700'>
              We Are Pioneers In The World Of Solar & Renewable Energy!
            </h2>
            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <p className='text-gray-800 font-semibold'>
                  We drive the transition to more sustainable, reliable &
                  affordable energy systems. With our innovative technologies,
                  we energize society, that’s our aim!
                </p>
                <p className='text-gray-500 mt-4'>
                  The increase in extreme weather events and rising sea levels
                  are unmistakable signs of climate change. Roughly 850 million
                  people still live without access to electricity, which is the
                  foundation of sustainable development.
                </p>
              </div>
              <div>
                <p className='text-gray-500 font-semibold'>
                  How can we meet the growing demand for electricity while
                  protecting our climate & make planet a better place?
                </p>
                <ul className='text-gray-500 mt-4 font-semibold'>
                  <li className='flex items-center'>
                    <div className='w-4 h-4'>
                      <svg
                        className='fill-main'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                      </svg>
                    </div>
                    <span className='ml-2'>Reliability and performance</span>
                  </li>
                  <li className='flex items-center'>
                    <div className='w-4 h-4'>
                      <svg
                        className='fill-main'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z' />
                      </svg>
                    </div>
                    <span className='ml-2'>Reliability and performance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex mt-4'>
              <AppButton text='Read more' type='dark' />
            </div>
          </article>
        </section>
        <Services />
        <section className='container mx-auto mt-24 p-4 md:p-0'>
          <h2 className='text-center font-bold text-4xl mb-4 text-gray-700'>
            Recent Articles
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
              image={BG5Logo}
              message={`Batteries are the most expensive part of a solar system.
                  Between appropriately-size battery bank and a battery-based
                  inverter like the Outback Radian, you’re looking...`}
              tag='Solar Modules, Solar PV'
              title='How to Add Battery Backup to an Existing Grid Tied Solar
                  System by Yourself!'
            />
          </div>
        </section>
        <OurPartners />
      </main>
      <Footer />
    </div>
  );
}
