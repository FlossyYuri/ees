import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutImage from '../assets/image/about.jpg';
import AppButton from '../components/Button';
import MainCarousel from '../components/home/MainCarousel';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { MEMBERS } from '../data';
import useTranslation from '../hooks/useTranslation';
import MissionLogo from '../assets/image/home/slider-box1.png';
import VisionLogo from '../assets/image/home/slider-box2.png';
import ValueLogo from '../assets/image/home/slider-icon1.png';

export default function Home() {
  const t = useTranslation();
  const [modals, setModals]: any = useState({});
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
              <p className='text-gray-500 mt-4 md:col-span-2'>
                {t.aboutSection.p3}
              </p>
            </div>
            <div className='flex mt-4'>
              <AppButton text={t.aboutSection.button} type='dark' />
            </div>
          </article>
        </section>
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mt-24'>
          <article className='bg-white rounded-lg p-8 mx-auto flex flex-col items-center relative carousel-card max-w-xs'>
            <Image
              className='filter brightness-0'
              height={84}
              src={MissionLogo}
              alt='BG1'
            />
            <h2 className='text-xl my-4 font-bold'>
              {t.aboutSection.mission.title}
            </h2>
            <p className='text-center text-gray-400 mb-4'>
              {t.aboutSection.mission.text}
            </p>
          </article>
          <article className='bg-white rounded-lg p-8 mx-auto flex flex-col items-center relative carousel-card max-w-xs'>
            <Image
              className='filter brightness-0'
              height={84}
              src={VisionLogo}
              alt='BG1'
            />
            <h2 className='text-xl my-4 font-bold'>
              {t.aboutSection.vision.title}
            </h2>
            <p className='text-center text-gray-400 mb-4'>
              {t.aboutSection.vision.text}
            </p>
          </article>
          <article className='bg-white rounded-lg p-8 mx-auto flex flex-col items-center relative carousel-card max-w-xs'>
            <Image
              className='filter brightness-0'
              height={84}
              src={ValueLogo}
              alt='BG1'
            />
            <h2 className='text-xl my-4 font-bold'>
              {t.aboutSection.values.title}
            </h2>
            <p className='text-center text-gray-400 mb-4'>
              {t.aboutSection.values.text}
            </p>
          </article>
        </section>
        <h2 className='text-center font-bold text-4xl mt-24 mb-24 text-gray-700'>
          {t.members.title}
        </h2>
        <section className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 container mx-auto gap-8 mb-24'>
          {MEMBERS(t).map((member, index) => (
            <>
              <div
                key={member.name}
                className='bg-white rounded-2xl members relative'
              >
                <Image
                  className='rounded-2xl h-96 w-full object-cover'
                  src={member.image}
                  alt='hello'
                />
                <div className='p-8 flex'>
                  <div className='flex flex-col flex-1'>
                    <p className='font-semibold text-gray-700 text-xl'>
                      {member.name}
                    </p>
                    <p className='text-gray-400'>{member.title}</p>
                  </div>
                  <div className='flex items-center'>
                    <button
                      onClick={() =>
                        setModals({ ...modals, [index]: !modals[index] })
                      }
                      className='px-4 py-1 transition-all rounded-lg flex items-center justify-between gap-1 bg-white hover:bg-main text-main hover:text-white fill-main hover:fill-white'
                    >
                      <span className='truncate'>Ler mais</span>
                      <div className='w-3 h-3'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z' />
                        </svg>
                      </div>
                    </button>
                  </div>
                  {/* <p className='text-gray-400 mt-4'>{member.description}</p> */}
                </div>
              </div>
              <div
                key={member.name}
                className={`fixed z-10 h-screen w-screen bg-black p-8 top-0 left-0 bg-opacity-25 flex items-center justify-center ${
                  modals[index] ? '' : 'hidden'
                }`}
              >
                <div className='bg-white max-w-2xl max-h-96 md:max-h-screen overflow-y-auto rounded-2xl relative'>
                  <div className='flex flex-col p-12 items-center'>
                    <button
                      onClick={() =>
                        setModals({ ...modals, [index]: !modals[index] })
                      }
                      className='w-10 h-10 bg-main rounded-xl absolute right-6 top-6 text-white'
                    >
                      <span className='truncate'>X</span>
                    </button>
                    <Image
                      className='rounded-2xl hidden md:flex w-min h-44 object-contain overflow-hidden'
                      src={member.image}
                      alt='hello'
                    />
                    <p className='font-semibold text-gray-700 text-xl'>
                      {member.name}
                    </p>
                    <p className='text-gray-400'>{member.title}</p>
                    <p className='text-gray-600 mt-4'>{member.description}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
