import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../../assets/image/bg1.jpg';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ArticleCard, { ArticleProps } from '../../components/news/ArticleCard';
import Article from '../../database/models/articles';
import useTranslation from '../../hooks/useTranslation';

interface Props {
  articles: ArticleProps[];
}
export default function News({ articles }: Props) {
  const t = useTranslation();
  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>News</title>
        <meta name='description' content='Contacts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <div className='z-0 w-full bg-gray-600 h-96 overflow-hidden relative flex items-center'>
          <Image src={BG1Logo} alt='Hello' />
          <div className='absolute p-32 text-center text-white w-full'>
            <h1 className='text-6xl font-semibold'>{t.news1}</h1>
          </div>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto my-16'>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              author={article.author}
              createdAt={article.createdAt}
              image={article.image}
              description={article.description}
              tag={article.tag}
              title={article.title}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const articles = await Article.findAll();
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    }, // will be passed to the page component as props
    revalidate: 60,
  };
}
