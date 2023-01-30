import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AboutImage from '../assets/image/about.jpg';
import AppButton from '../components/Button';
import MainCarousel from '../components/home/MainCarousel';
import OurPartners from '../components/home/OurPartners';
import Services from '../components/home/Services';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import ArticleCard, { ArticleProps } from '../components/news/ArticleCard';
import Article from '../database/models/articles';
import useTranslation from '../hooks/useTranslation';
interface Props {
  articles: ArticleProps[];
}
export default function Home({ articles }: Props) {
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
              <p className='text-gray-500 mt-4 md:col-span-2'>
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
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                author={article.author}
                createdAt={article.createdAt}
                image={article.image}
                description={article.description}
                tag='Solar Modules, Solar PV'
                title={article.title}
              />
            ))}
          </div>
        </section>
        <OurPartners />
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const articles = await Article.findAll();
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles.slice(-3))),
    }, // will be passed to the page component as props
  };
}
