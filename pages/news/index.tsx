import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../../assets/image/bg1.jpg';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import ArticleCard, { ArticleProps } from '../../components/news/ArticleCard';
import dbConnect from '../../lib/dbConnect';
import Article from '../../lib/models/Article';

interface Props {
  articles: ArticleProps[];
}
export default function News({ articles }: Props) {
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
        <div className='z-0 w-full bg-gray-600 h-96 overflow-hidden relative flex items-center'>
          <Image src={BG1Logo} alt='Hello' />
          <div className='absolute p-32 text-center text-white w-full'>
            <h1 className='text-6xl font-semibold'>Our blog</h1>
          </div>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto my-16'>
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              _id={article._id}
              author={article.author}
              createdAt={article.createdAt}
              image={article.image}
              description={article.description}
              tag='Solar Modules, Solar PV'
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
  await dbConnect();
  const articles = await Article.find({});
  console.log(articles);
  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    }, // will be passed to the page component as props
  };
}
