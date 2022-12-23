import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../../assets/image/bg1.jpg';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { ArticleProps } from '../../components/news/ArticleCard';
import Article from '../../database/models/articles';

interface Props {
  article: ArticleProps;
}
export default function News({ article }: Props) {
  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>Contacts</title>
        <meta name='description' content='Contacts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='my-24'>
        <section className='flex gap-8 container mx-auto'>
          <article className='flex-1 bg-white rounded-xl flex flex-col'>
            <Image
              alt='Blog'
              className='h-96 rounded-lg object-cover w-full'
              src={article.image}
              width={1000}
              height={1000}
            />
            <p
              className='w-3/4 bg-white text-gray-600 text-sm -mt-9 rounded-tr-lg
             py-2 px-8 flex items-center gap-4 flex-wrap'
            >
              <span>
                {new Date(article.createdAt).toLocaleDateString('pt')}
              </span>
              <span className='block w-min p-2 truncate z-20 bg-main rounded-lg text-white text-xs'>
                {article.tag}
              </span>
              <span>{article.author}</span>
            </p>
            <div className='p-8'>
              <p className='text-gray-600 text-3xl mb-4 font-semibold'>
                {article.title}
              </p>
              <p className='text-gray-500'>{article.description}</p>
            </div>
          </article>
          <article className='max-w-xs w-full '>
            <div className='w-full bg-green-400 p-8 text-white rounded-lg'>
              <label
                className='text-xl mb-2 block font-semibold'
                htmlFor='search'
              >
                Search
              </label>
              <input
                type='text'
                id='search'
                className=' bg-white text-gray-700 px-4 py-2 rounded
                 border-none'
                name='search'
                placeholder='Search'
              />
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ params }: any) {
  const articles = JSON.parse(JSON.stringify(await Article.findAll()));
  return {
    props: {
      article: articles.find(
        (element: any) => element.id.toString() === params.id
      ),
    }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  const articles = JSON.parse(JSON.stringify(await Article.findAll()));
  return {
    paths: articles.map((item: any) => ({
      params: { id: item.id.toString() },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}
