import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutImage from '../assets/image/about.jpg';
import DoacaoImage from '../assets/image/doacao.jpg';
import ProjectoImage from '../assets/image/maternidade2.jpg';
import BG4Logo from '../assets/image/bg4.jpg';
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
        <title>{t.head.title}</title>
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
              <p className='text-gray-500 mt-4 col-span-2'>
                {t.aboutSection.p3}
              </p>
            </div>
            <div className='flex mt-4'>
              <AppButton text={t.aboutSection.button} type='dark' />
            </div>
          </article>
        </section>
        <Services />
        <section className='container mx-auto mt-24 p-4 md:p-0'>
          <h2 className='text-center font-bold text-4xl mb-4 text-gray-700'>
            {t.recentNews.title}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Article
              author='Administração'
              createdAt='10/09/2021'
              image={BG4Logo}
              description={`Em 2021 a Epsilon Energia Solar abriu uma nova delegação na Zambézia, fruto das
              necessidades que a Província apresenta em termos energéticos. Localizados na vila do
              Gurué, a EES tem à disposição dos clientes produtos de iluminação solar (SHS), Bombas de
              água solares e mais recentemente sistemas autónomos.`}
              tag='Eventos'
              title='Abertura da Delegação do Gurué (Zambézia)'
            />
            <Article
              author='Administração'
              createdAt='12/06/2022'
              image={DoacaoImage}
              description={`A Epsilon Energia Solar fez uma doação de 15 kits solares ao Parque Nacional de
              Chimanimani. Esta doação irá contribuir no apoio à electrificação de parte dos edifícios das
              escolas Mussapa, Sanguene, Machir e Nharimba que se encontram na zona tampão do
              parque Natural. Esta iniciativa teve como parceiro o BIOFUND.`}
              tag='Eventos'
              title='Doação de kits solares ao Parque Nacional de Chimanimani'
            />
            <Article
              author='Administração'
              createdAt='31/11/2022'
              image={ProjectoImage}
              description={`Está em fase final o projecto da electrificação de 16 Centros de Saúde Rurais na Província da
              Zambézia. Projecto da Janela FAZER Social, financiado pela GIZ, permitindo à Epsilon Energia
              Solar electrificar unidades de Sáude Rurais com capacidade até 3kW.`}
              tag='Projectos'
              title='Projecto Centros de Saúde da Zambézia'
            />
          </div>
        </section>
        <OurPartners />
      </main>
      <Footer />
    </div>
  );
}
