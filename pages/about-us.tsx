import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MissionLogo from '../assets/image/home/slider-box1.png';
import VisionLogo from '../assets/image/home/slider-box2.png';
import ValueLogo from '../assets/image/home/slider-icon1.png';
import { MEMBERS } from '../data';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const t = useTranslation();
  const [modals, setModals]: any = useState({});
  return (
    <div className='w-full bg-gray-100 text-justify'>
      <Head>
        <title>EES</title>
        <meta name='description' content='Solar energy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
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
        <h2 className='text-center font-bold text-4xl my-16 text-gray-700'>
          {t.members.title}
        </h2>
        <section className='flex flex-col container mx-auto gap-8 mb-24'>
          {MEMBERS(t).map((member, index) => (
            <>
              <div
                key={member.name}
                className='bg-white rounded-2xl members relative flex flex-col md:flex-row md:text-left gap-8 p-8'
              >
                <Image
                  className='rounded-2xl h-32 self-center object-contain'
                  src={member.image}
                  alt='hello'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold text-gray-700 text-xl'>
                    {member.name}
                  </p>
                  <p className='text-gray-400'>{member.title}</p>
                  <p className='text-gray-400 mt-4 text-justify whitespace-pre-line'>
                    {member.description}
                  </p>
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
