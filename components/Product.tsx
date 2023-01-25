import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from '../hooks/useTranslation';
import ProjectoImage from '../assets/image/maternidade2.jpg';
import Header from './layout/Header';

export interface ProductProps {
  title: string;
  description: string;
}
export default function Product({ description, title }: ProductProps) {
  const t = useTranslation();
  return (
    <div className='w-full min-h-screen bg-gray-100 flex flex-col'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='flex-1 flex flex-col'>
        <div className='w-full flex-1 relative'>
          <Image
            className='object-cover absolute top-0 left-0 h-full w-full filter brightness-50'
            src={ProjectoImage}
            alt='logo 2'
          />
          <div className='container mx-auto py-24 z-10 relative'>
            <h1 className='text-5xl text-white font-semibold mb-4'>{title}</h1>
            <p className='text-lg text-white'>{description}</p>
            <p className='mt-4 text-gray-200'>
              Para mais informações contactar:
            </p>
            <div className='flex gap-4 mt-2 flex-wrap'>
              <Link
                className='px-8 py-4 transition-all rounded-lg flex items-center justify-between gap-2 bg-main hover:bg-white text-white hover:text-gray-700 fill-white hover:fill-gray-700'
                href='https://wa.link/7t9ohw'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M17.7588 13.7907C17.712 13.7683 15.9624 12.9067 15.6515 12.7948C15.5245 12.7492 15.3885 12.7047 15.2439 12.7047C15.0077 12.7047 14.8092 12.8225 14.6546 13.0537C14.4798 13.3135 13.9507 13.932 13.7872 14.1168C13.7659 14.1412 13.7367 14.1703 13.7193 14.1703C13.7036 14.1703 13.4329 14.0588 13.3509 14.0232C11.474 13.2079 10.0493 11.2473 9.85397 10.9167C9.82607 10.8691 9.8249 10.8475 9.82467 10.8475C9.83152 10.8224 9.89464 10.7591 9.92721 10.7265C10.0225 10.6322 10.1258 10.5079 10.2257 10.3876C10.273 10.3307 10.3203 10.2736 10.3668 10.2199C10.5118 10.0513 10.5763 9.92035 10.6511 9.76871L10.6903 9.68993C10.873 9.32705 10.717 9.02081 10.6665 8.92193C10.6252 8.83918 9.88638 7.05616 9.80784 6.86884C9.61895 6.41681 9.36937 6.20634 9.02254 6.20634C8.99035 6.20634 9.02254 6.20634 8.88757 6.21203C8.72324 6.21897 7.8283 6.33678 7.43261 6.58621C7.013 6.85076 6.30313 7.69403 6.30313 9.17705C6.30313 10.5118 7.15015 11.772 7.51381 12.2513C7.52285 12.2634 7.53944 12.2879 7.56352 12.3232C8.95622 14.3571 10.6924 15.8644 12.4524 16.5675C14.1469 17.2443 14.9492 17.3226 15.4054 17.3226H15.4055C15.5971 17.3226 15.7506 17.3075 15.8859 17.2942L15.9718 17.286C16.5571 17.2341 17.8435 16.5676 18.1361 15.7545C18.3666 15.114 18.4273 14.4143 18.274 14.1603C18.169 13.9876 17.9879 13.9008 17.7588 13.7907Z' />
                  <path d='M12.213 0C5.71308 0 0.424969 5.24837 0.424969 11.6995C0.424969 13.786 0.983359 15.8284 2.04115 17.6159L0.0165014 23.5883C-0.0212129 23.6996 0.00683905 23.8227 0.0892028 23.9066C0.148657 23.9673 0.229307 24 0.31167 24C0.343229 24 0.375021 23.9953 0.406034 23.9854L6.63357 22.0065C8.33773 22.917 10.2638 23.3976 12.2131 23.3976C18.7124 23.3977 24 18.1499 24 11.6995C24 5.24837 18.7124 0 12.213 0ZM12.213 20.9606C10.3788 20.9606 8.60227 20.431 7.07516 19.4289C7.02381 19.3951 6.9642 19.3778 6.9042 19.3778C6.87248 19.3778 6.84069 19.3827 6.80975 19.3925L3.69014 20.3841L4.69721 17.413C4.72978 17.3169 4.71349 17.2108 4.65349 17.1288C3.49058 15.5399 2.87585 13.6625 2.87585 11.6995C2.87585 6.59221 7.06448 2.43709 12.213 2.43709C17.3608 2.43709 21.549 6.59221 21.549 11.6995C21.549 16.8061 17.361 20.9606 12.213 20.9606Z' />
                </svg>
                <span className='truncate'>Whatsapp</span>
              </Link>
              <Link
                className='px-8 py-4 transition-all rounded-lg flex items-center justify-between gap-2 bg-main hover:bg-white text-white hover:text-gray-700 fill-white hover:fill-gray-700'
                href='mailto:geral@epsilonenergia.co.mz'
              >
                <svg
                  width='24'
                  height='20'
                  viewBox='0 0 24 20'
                  className='fill-white'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M2.29808 2.83772L12 9.75483L21.7019 2.83772C21.5215 2.47436 21.1505 2.22222 20.7273 2.22222H3.27273C2.8495 2.22222 2.4785 2.47436 2.29808 2.83772ZM21.8182 5.46739L12.6256 12.0214C12.25 12.2892 11.75 12.2892 11.3744 12.0214L2.18182 5.4674V16.6667C2.18182 17.2752 2.67522 17.7778 3.27273 17.7778H20.7273C21.3248 17.7778 21.8182 17.2752 21.8182 16.6667V5.46739ZM0 3.33333C0 1.49746 1.47023 0 3.27273 0H20.7273C22.5298 0 24 1.49746 24 3.33333V16.6667C24 18.5025 22.5298 20 20.7273 20H3.27273C1.47023 20 0 18.5025 0 16.6667V3.33333Z'
                  />
                </svg>

                <span className='truncate'>geral@epsilonenergia.co.mz</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
