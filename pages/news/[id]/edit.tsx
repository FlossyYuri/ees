import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import BG1Logo from '../../../assets/image/bg1.jpg';
import FileInput from '../../../components/forms/FileInput';
import Input from '../../../components/forms/input';
import SignUpModal from '../../../components/forms/SignInModal';
import Footer from '../../../components/layout/Footer';
import Header from '../../../components/layout/Header';
import AuthContext from '../../../context/authContext';
import { APIKit, uploadFile } from '../../../service';
import Article from '../../../database/models/articles';

type CreateArticle = {
  title: string;
  image: string;
  tag: string;
  author: string;
  description: string;
};
export default function Create() {
  const router = useRouter();
  const [document, setDocument] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const hidden = useState(true);
  const { auth, Login }: any = useContext(AuthContext);

  const {
    register,
    reset,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticle>();

  useEffect(() => {
    APIKit.get(`/articles/${router.query.id}`)
      .then((response) => {
        const { data } = response.data;
        Object.keys(data).forEach((item: any) => {
          setValue(item, data[item]);
        });
      })
      .catch((err) => console.log({ err }));
  }, []);

  const onSubmit: SubmitHandler<CreateArticle> = async (values) => {
    values.description = values.description.replace(/<[^>]+>/g, '');
    setLoading(true);
    try {
      if (document) {
        const toastID = toast.loading('Carregando Imagem.');
        const image: any = await uploadFile(document);
        values.image = image;
        toast.dismiss(toastID);
      }
      const toastID = toast.loading('Enviando Dados!');
      APIKit.put(`/articles/${router.query.id}`, values)
        .then((response) => {
          toast.success('Notícia cadastrada com sucesso!', { duration: 8000 });
          reset();
          router.push(`/news/${response.data.data.id}`);
        })
        .catch(() => {
          toast.error('Ocorreu um erro ao cadastrar a notícia!');
        })
        .finally(() => {
          toast.dismiss(toastID);
          setLoading(false);
        });
    } catch (err) {
      toast.error('Ups, ocorreu um erro ao submeter a notícia!');
    }
  };
  const changeDocument = (file: any) => {
    setDocument(file);
  };

  return (
    <div className='w-full bg-gray-100'>
      <Head>
        <title>Noticias</title>
        <meta name='description' content='Contacts' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <div className='z-0 w-full bg-gray-600 h-96 overflow-hidden relative flex items-center'>
        <Image className='object-cover min-w-full' src={BG1Logo} alt='Hello' />
        <div className='absolute p-32 text-center text-white w-full'>
          <h1 className='text-6xl font-semibold'>Editar notícia</h1>
        </div>
      </div>
      {auth ? (
        <main className='my-24 container mx-auto px-8'>
          <p className='mb-4'>Cadastre a informação da nova notícia</p>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <Input
              name='title'
              register={register}
              error={!!errors}
              helperText={errors.title?.message}
              label='Titulo da notícia'
            />
            <Input
              name='author'
              register={register}
              error={!!errors}
              helperText={errors.author?.message}
              label='Autor do artigo'
            />
            <Input
              name='tag'
              register={register}
              error={!!errors}
              helperText={errors.tag?.message}
              label='Tag'
              placeholder='Evento, Projecto, etc'
            />
            <div className='card my-4'>
              <p className='mb-3'>Imagem de capa</p>
              <FileInput
                initial={getValues('image')}
                isImage={true}
                name='documento'
                placeholder='Escolha um ficheiro'
                inputEvent={changeDocument}
                value={document?.name || ''}
              />
            </div>
            <Input
              name='description'
              register={register}
              error={!!errors}
              helperText={errors.description?.message}
              label='Corpo da notícia'
              textarea
            />
            <div className='mt-4'>
              <input
                disabled={loading}
                className={`${
                  loading ? 'bg-slate-600' : 'bg-slate-900'
                } text-white px-6 py-2 rounded-lg transition-all`}
                type='submit'
                value='Enviar notícia'
              />
            </div>
          </form>
        </main>
      ) : (
        <main className='my-24 container mx-auto px-8 flex flex-col items-center'>
          <button
            onClick={() => hidden[1](false)}
            className='block text-white bg-main opacity-90 hover:bg-main focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            type='button'
            data-modal-toggle='authentication-modal'
          >
            Login
          </button>
        </main>
      )}
      <Footer />

      <SignUpModal hidden={hidden} />
    </div>
  );
}
