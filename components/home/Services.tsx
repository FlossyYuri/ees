import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AppButton from '../Button';
import CircleButton from '../CircleButton';
import BG3Logo from '../../assets/image/bg3.jpg';

export default function Services() {
  return (
    <section className='my-16 bg-gray-700 text-white py-16'>
      <div className='container grid grid-cols-2 gap-4 mx-auto'>
        <article>
          <h3> Sustainable, Reliable & Affordable Energy!</h3>
          <h2>
            Providing Value To Our ClientsThrough Ongoing Product & Innovation.
          </h2>
        </article>
        <article>
          <p className='mb-4'>
            While improving the yield and performance of solar energy products,
            our PV industry experience enables us to provide in-depth material
            sourcing, financing and supply chain expertise for every step.
          </p>
          <p className='mb-4'>
            Raw polycrystalline silicon for PV manufacturing. Offered in various
            grades and formats including chunks, chips, powder and ingot.
          </p>
          <div className='flex'>
            <AppButton text='Get Started' />
          </div>
        </article>
      </div>
      <div className='container mx-auto grid grid-cols-4'>
        <article className='bg-white text-gray-700 text-center rounded-lg p-8 flex flex-col items-center'>
          <Image height={60} src={BG3Logo} alt='Service 1' />
          <h3 className='font-semibold text-xl my-4'>Save your money</h3>
          <p className='text-gray-500 mb-4'>
            Save money on utilities or increase the value of your home by
            installing solar panels as a great option.
          </p>
          <CircleButton href='/' />
        </article>
      </div>
    </section>
  );
}
