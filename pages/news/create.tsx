import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import BG1Logo from '../../assets/image/bg1.jpg';
import MyEditor from '../../components/Editor';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../components/forms/input';
import FileInput from '../../components/forms/FileInput';
import { APIKit, uploadFile } from '../../service';
import { useRouter } from 'next/router';

type CreateArticle = {
  title: string;
  image: string;
  author: string;
  description: any;
};
export default function Create() {
  const router = useRouter();
  const [document, setDocument] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateArticle>();
  const onSubmit: SubmitHandler<CreateArticle> = async (values) => {
    setLoading(true);
    try {
      if (document) {
        const toastID = toast.loading('Carregando Imagem.');
        const image: any = await uploadFile(document);
        values.image = image;
        toast.dismiss(toastID);
      }
      const toastID = toast.loading('Enviando Dados!');
      APIKit.post('/articles', values)
        .then((response) => {
          toast.success('Notícia cadastrada com sucesso!');
          router.push(`/news/${response.data.data._id}`);
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
          <h1 className='text-6xl font-semibold'>Create a new article</h1>
        </div>
      </div>
      <main className='my-24 container mx-auto px-8'>
        <p className='mb-4'>Cadastre a informação da nova notícia</p>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
          {/* title: string;
        image: string;
        date: string;
        tags: string;
        author: string;
        description: string; */}
          <Input
            name='title'
            register={register}
            error={!!errors}
            helperText={errors.title?.message}
            label='Titulo da notícia'
            placeholder='...'
          />
          <Input
            name='author'
            register={register}
            error={!!errors}
            helperText={errors.title?.message}
            label='Autor do artigo'
            placeholder='...'
          />
          <div className='card my-4'>
            <p className='mb-3'>Imagem de capa</p>
            <FileInput
              name='documento'
              placeholder='Escolha um ficheiro'
              inputEvent={changeDocument}
              value={document?.name || ''}
            />
          </div>
          <MyEditor setValue={setValue} value={getValues().description} />
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
      <Footer />
    </div>
  );
}
