import Link from 'next/link';
import useTranslation from '../../hooks/useTranslation';

export default function Footer() {
  const t = useTranslation();
  return (
    <footer className='bg-gray-800 text-gray-400 py-12'>
      <div className='container mx-auto'>
        <section className='grid grid-cols-1 gap-4 md:grid-cols-3 mb-8'>
          <article className='flex flex-col text-center md:text-left'>
            <h2 className='font-semibold mb-4'>{t.head.title}</h2>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href='/'>{t.home}</Link>
              </li>
              <li>
                <Link href='/'>{t.products}</Link>
              </li>
              <li>
                <Link href='/'>{t.news}</Link>
              </li>
              <li>
                <Link href='/'>{t.aboutUs}</Link>
              </li>
              <li>
                <Link href='/'>{t.contacts}</Link>
              </li>
            </ul>
          </article>
          <article className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-end col-span-2'>
            <div className='flex flex-col max-w-xs'>
              <p className='flex items-center  mb-4'>
                {t.footer.contact1.title} (Maputo)
                <span className='flex-1 ml-4 h-1 bg-gray-600'></span>
              </p>
              <p className='text-3xl'>
                +258 <span className='text-white'>21 486 560</span>
              </p>
              <p className='text-3xl'>
                +258 <span className='text-white'>86 315 1122</span>
              </p>
              <p className='text-main font-semibold mb-4'>
                Email: geral@epsilonenergia.co.mz
              </p>
              <p>{t.footer.contact1.location}</p>
              <a
                href='https://goo.gl/maps/aDe9zcQ6zp6GVBgD7'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-white mt-4 flex items-center gap-2'
              >
                <div className='w-3 h-3 flex items-center'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z' />
                  </svg>
                </div>
                <span>{t.footer.direction}</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p className='flex items-center  mb-4'>
                {t.footer.contact2.title} (Chimoio)
                <span className='flex-1 ml-4 h-1 bg-gray-600'></span>
              </p>
              <p className='text-3xl'>
                +258 <span className='text-white'>84 666 4430</span>
              </p>
              <p>{t.footer.contact2.location}</p>
              <a
                href='https://goo.gl/maps/aDe9zcQ6zp6GVBgD7'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-white mt-4 flex items-center gap-2'
              >
                <div className='w-3 h-3 flex items-center'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z' />
                  </svg>
                </div>
                <span>{t.footer.direction}</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p className='flex items-center  mb-4'>
                {t.footer.delegation} (Gurué)
                <span className='flex-1 ml-4 h-1 bg-gray-600'></span>
              </p>
              <p className='text-3xl'>
                +258 <span className='text-white'>86 300 2395</span>
              </p>
              <p>{t.footer.contact3.location}</p>
              <a
                href='https://goo.gl/maps/aDe9zcQ6zp6GVBgD7'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-white mt-4 flex items-center gap-2'
              >
                <div className='w-3 h-3 flex items-center'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z' />
                  </svg>
                </div>
                <span>{t.footer.direction}</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p className='flex items-center mb-4'>
                {t.footer.delegation} (Tete)
                <span className='flex-1 ml-4 h-1 bg-gray-600'></span>
              </p>
              <p className='text-3xl'>
                +258 <span className='text-white'>86 416 0563</span>
              </p>
              <p>{t.footer.contact4.location}</p>
              <a
                href='https://goo.gl/maps/aDe9zcQ6zp6GVBgD7'
                target='_blank'
                rel='noreferrer'
                className='font-semibold text-white mt-4 flex items-center gap-2'
              >
                <div className='w-3 h-3 flex items-center'>
                  <svg
                    fill='white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z' />
                  </svg>
                </div>
                <span>{t.footer.direction}</span>
              </a>
            </div>
          </article>
        </section>
        <div className='flex flex-col items-center md:flex-row gap-4 w-full justify-between text-center md:text-left'>
          <p className='text-white'>@{t.head.title}</p>
          <div className='flex gap-4'>
            <div>Facebook</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
