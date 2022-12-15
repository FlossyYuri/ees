import Head from 'next/head';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BG1Logo from '../../assets/image/bg1.jpg';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { ArticleProps } from '../../components/news/ArticleCard';
import dbConnect from '../../lib/dbConnect';
import Article from '../../lib/models/Article';

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
              className='h-96 rounded-lg object-cover'
              src={BG1Logo}
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
              <p className='text-gray-500'>
                The key requirement of this work package is the development of a
                database (and supporting summary report), compiling information
                for potential renewable energy business and technology solutions
                to help overcome environmental and climatic challenges in the
                NPA programme region. Technology solutions cover installation,
                operation and maintenance of equipment, not the design and
                manufacture of components. The objective of the database is to
                identify the main environmental and climatic challenges, and
                outline technological and business solutions to these
                challenges, creating a database of these for 8 different
                categories of renewable energy technology. It is designed for
                use by new and existing renewable energy businesses, to inform
                them of the challenges they may face in developing their
                business and how these will be overcome. A range of examples
                (where available) have been highlighted on how the challenges
                identified have been overcome. Specific regional related
                innovations and smart solutions from local business on
                technology driven RE-solutions have been documented, with the
                intention of passing on this knowledge to other regions in the
                NPA not involved in the GREBE Project. Global climate change
                impacts Europe in many ways, including: changes in average and
                extreme temperature and precipitation, warmer oceans, rising sea
                level and shrinking snow and ice cover on land and at sea. These
                weather phenomenons have led to a range of impacts on
                ecosystems, socio-economic sectors and human health and safety.
                There is no doubt that the changes in climate will have a strong
                impact in our daily life, whether we accept extreme weather
                conditions as a new phenomenon or not. Adaptation to the past
                history data, present observed and future predicted impacts will
                in the coming decades be needed, as well as be complementary to
                global climate mitigation actions. Narvik Science Park has made
                a report on this in the GREBE-Project.
              </p>
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
  await dbConnect();
  const articles = JSON.parse(JSON.stringify(await Article.find({})));
  return {
    props: {
      article: articles.find(
        (element: any) => element._id.toString() === params.id
      ),
    }, // will be passed to the page component as props
  };
}
export async function getStaticPaths() {
  await dbConnect();
  const articles = JSON.parse(JSON.stringify(await Article.find({})));
  return {
    paths: articles.map((item: any) => ({
      params: { id: item._id.toString() },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}
