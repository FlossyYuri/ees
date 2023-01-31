import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
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
        <h2 className='text-center font-bold text-4xl mt-24 mb-24 text-gray-700'>
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
                  <p className='text-gray-400 mt-4 text-justify'>
                    {member.description}
                  </p>
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
