import Image from 'next/image';
import FooterMouse from '../../assets/image/footer_mouse.png';

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-gray-400 py-12'>
      <div className='container mx-auto'>
        <section className='grid grid-cols-3 mb-8'>
          <article className='flex flex-col'>
            <h2 className='font-semibold mb-4'>EPSILON</h2>
            <ul className='flex flex-col gap-2'>
              <li>Home</li>
              <li>News</li>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </article>
          <article className='grid grid-cols-2 gap-4 justify-end col-span-2'>
            <div className='flex flex-col max-w-xs'>
              <p>Head Office (Maputo):</p>
              <p className='text-4xl'>
                +258 <span className='text-white'>21 486 560</span>
              </p>
              <p className='text-main font-semibold mb-4'>
                Email: geral@epsilonenergia.co.mz
              </p>
              <p>Rua Frente da Libertação nº 355, Maputo</p>
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
                <span>Get Directions</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p>Delegação Operacional (Chimoio)</p>
              <p className='text-4xl'>
                +258 <span className='text-white'>84 666 4430</span>
              </p>
              <p className='text-main font-semibold mb-4'>
                Email: geral@epsilonenergia.co.mz
              </p>
              <p>
                Av. da Liberdade (frente à Igreja Católica), Bairro 2, Chimoio
              </p>
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
                <span>Get Directions</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p>Delegação (Gurué)</p>
              <p className='text-4xl'>
                +258 <span className='text-white'>86 300 2395</span>
              </p>
              <p className='text-main font-semibold mb-4'>
                Email: geral@epsilonenergia.co.mz
              </p>
              <p>
                Estrada EN103 (em frente ao mercado de peixe), Vila do Gurué
              </p>
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
                <span>Get Directions</span>
              </a>
            </div>
            <div className='flex flex-col max-w-xs'>
              <p>Delegação (Tete)</p>
              <p className='text-4xl'>
                +258 <span className='text-white'>864160563</span>
              </p>
              <p className='text-main font-semibold mb-4'>
                Email: geral@epsilonenergia.co.mz
              </p>
              <p>Rua do FIPAG, edifício de Gito, Bairro Chingodzi, Tete</p>
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
                <span>Get Directions</span>
              </a>
            </div>
          </article>
        </section>
        <div className='flex flex-wrap gap-4 justify-between'>
          <div className='text-white'>@Epsilon Energia Solar</div>
          <div className='flex gap-4'>
            <div>Facebook</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
