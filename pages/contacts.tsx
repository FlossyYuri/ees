import Head from 'next/head';
import Image from 'next/image';
import CountUp from 'react-countup';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../assets/image/bg1.jpg';
import BG5Logo from '../assets/image/bg5.jpg';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import useTranslation from '../hooks/useTranslation';

export default function Home() {
  const t = useTranslation();
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
        <div className='z-0 w-full bg-gray-600 h-96'></div>

        <div className='flex items-center justify-center w-full'>
          <div className='z-10 flex flex-col w-full px-2 py-12 mx-4 mb-10 -mt-16 bg-white border border-gray-200 rounded-lg shadow-md lg:justify-between lg:flex-row lg:px-12 2xl:w-9/12 dark:bg-gray-800 dark:border-gray-700'>
            <div className='flex flex-col w-full px-6 py-12 mb-10 border border-gray-200 rounded-lg bg-main lg:px-12 lg:mb-0 lg:w-2/4 dark:bg-gray-800 dark:border-gray-700'>
              <p className='mb-3 font-normal text-white dark:text-gray-400'>
                {t.aboutSection.title}
              </p>
              <div className='inline-flex justify-start mt-4 text-white'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  ></path>
                </svg>
                <p className='ml-2'>
                  {t.footer.contact1.title} (Maputo) +258{' '}
                  <span className='text-white'>21 486 560</span>
                </p>
              </div>
              <div className='inline-flex justify-start mt-4 text-white'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  ></path>
                </svg>
                <p className='ml-2'>
                  {t.footer.contact1.title} (Maputo) +258{' '}
                  <span className='text-white'>86 315 1122</span>
                </p>
              </div>
              <div className='inline-flex justify-start mt-4 text-white'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  ></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  ></path>
                </svg>
                <p className='ml-2'>{t.footer.contact1.location}</p>
              </div>
              <div className='inline-flex justify-start mt-4 text-white'>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  ></path>
                </svg>{' '}
                <p className='ml-2'>Email: geral@epsilonenergia.co.mz</p>
              </div>

              <div className='mt-8'>
                <a
                  href='mailto:geral@epsilonenergia.co.mz'
                  className='inline-flex items-center px-4 py-4 text-sm font-medium text-center transition-all delay-100 bg-white rounded-lg text-main hover:scale-95 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  {t.contactsPage.button}
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 ml-2 -mr-1'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* 
            CARD RIGHT
             */}
            <div className='w-full bg-white lg:w-2/4 sm:p-6 dark:bg-gray-800 dark:border-gray-700'>
              <h5 className='mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white'>
                {t.contactsPage.title}
              </h5>
              <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                {t.contactsPage.description}
              </p>
              <ul className='my-4 space-y-3'>
                <li>
                  <a
                    href='tel:+258863151122'
                    className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      +258 86 315 1122
                    </span>
                    <span className='bg-gray-200 px-4 py-1 rounded-xl text-xs text-gray-400'>
                      {t.contactsPage.headquarters}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+258846664430'
                    className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      +258 84 666 4430
                    </span>
                    <span className='bg-gray-200 px-4 py-1 rounded-xl text-xs text-gray-400'>
                      Chimoio
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+258863002395'
                    className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      +258 86 300 2395
                    </span>
                    <span className='bg-gray-200 px-4 py-1 rounded-xl text-xs text-gray-400'>
                      Gurué
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href='tel:+258864160563'
                    className='flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                  >
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      +258 86 416 0563
                    </span>
                    <span className='bg-gray-200 px-4 py-1 rounded-xl text-xs text-gray-400'>
                      Tete
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className='flex items-center justify-center w-full'>
          <div className='flex flex-col md:flex-row md:items-start md:justify-start px-6 2xl:w-9/12 md:gap-16'>
            <div className='w-full max-w-xs mx-auto flex flex-col items-center'>
              <div className='flex flex-col-reverse items-center  md:flex md:flex-row md:items-end'>
                <CountUp duration={3} end={25} useEasing>
                  {({ countUpRef, start }) => (
                    <div>
                      <span
                        ref={countUpRef}
                        className='font-light text-7xl md:text-9xl text-main'
                      />
                    </div>
                  )}
                </CountUp>
                <Image
                  className='w-44 h-44 rounded-full cursor-pointer'
                  src={BG1Logo}
                  alt='Rounded avatar'
                />
              </div>
              <p className=' md:mt-4 md:ml-6 text-2xl text-center md:text-left font-medium'>
                {t.contactsPage.years}
              </p>
              <div className='w-24 my-6 ml-10 border border-b-2 border-black'></div>
            </div>

            <div className='mt-6 mb-16 flex-1'>
              <h5 className='my-6 font-bold text-main'>
                Customers Doing it Their Way!
              </h5>
              <p className='text-xl font-semibold'>
                Energia has been absolutely the best to work with. Their
                attention to detail and customer support was amazing!! They were
                fantastic through the entire purchase process. Had lots of
                questions and they were patient. When my system arrived, it was
                well packed.
              </p>
            </div>
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
