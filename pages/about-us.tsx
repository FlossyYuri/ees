import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
import Article from '../components/news/ArticleCard';
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
        <section className='container grid grid-cols-3 gap-8 mx-auto mt-24'>
          <article className='overflow-hidden rounded-2xl'></article>
          <article className='flex flex-col col-span-2'>
            <span className='flex px-4 py-1 text-white truncate rounded-lg bg-main w-min'>
              Complete Commercial And Residential Solar Systems
            </span>
            <h2 className='mt-2 mb-4 text-4xl font-bold text-gray-700'>
              We Are Pioneers In The World Of Solar & Renewable Energy!
            </h2>
            <div className='grid grid-cols-2 gap-4 mt-6'>
              <div>
                <p className='font-semibold text-gray-800'>
                  We drive the transition to more sustainable, reliable &
                  affordable energy systems. With our innovative technologies,
                  we energize society, that’s our aim!
                </p>
                <p className='mt-4 text-gray-500'>
                  The increase in extreme weather events and rising sea levels
                  are unmistakable signs of climate change. Roughly 850 million
                  people still live without access to electricity, which is the
                  foundation of sustainable development.
                </p>
              </div>
              <div>
                <p className='font-semibold text-gray-500'>
                  How can we meet the growing demand for electricity while
                  protecting our climate & make planet a better place?
                </p>
                <ul className='mt-4 font-semibold text-gray-500'>
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
              <AppButton text={t.aboutSection.button} type='dark' />
            </div>
          </article>
        </section>
        <Services />
        <section className='container mx-auto mt-24'>
          <h2 className='mb-4 text-4xl font-bold text-center text-gray-700'>
            Recent Articles
          </h2>
          <div className='grid grid-cols-3 gap-8'>
            <Article
              author='Administração'
              createdAt='1/11/2000'
              image={BG4Logo}
              description={`Batteries are the most expensive part of a solar system.
                    Between appropriately-size battery bank and a battery-based
                    inverter like the Outback Radian, you’re looking...`}
              tag='Solar Modules, Solar PV'
              title='How to Add Battery Backup to an Existing Grid Tied Solar
                    System by Yourself!'
            />
            <Article
              author='Administração'
              createdAt='12/12/2000'
              image={BG5Logo}
              description={`Batteries are the most expensive part of a solar system.
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
