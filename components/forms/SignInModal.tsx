import { signIn, useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import AuthContext from '../../context/authContext';
import useAuthUser from '../../hooks/useAuthUser';
import { APIKit } from '../../service';
import Input from './input';

type CreateLogin = {
  email: string;
  password: string;
};
export default function SignUpModal({ hidden }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLogin>();
  const { auth, Login }: any = useContext(AuthContext);

  const onSubmit: SubmitHandler<CreateLogin> = async (values) => {
    APIKit.post('/auth/login', values)
      .then((response) => {
        toast.success('Autenticado com sucesso!');
        Login();
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao cadastrar a notícia!');
      })
      .finally(() => {});
  };

  return (
    <div
      id='authentication-modal'
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full bg-black bg-opacity-50  flex justify-center items-center ${
        hidden[0] || auth ? 'hidden' : ''
      }`}
    >
      <div className='relative w-full h-full max-w-md md:h-auto'>
        <div className='relative bg-white rounded-lg shadow'>
          <button
            type='button'
            onClick={() => hidden[1](true)}
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
            data-modal-toggle='authentication-modal'
          >
            <svg
              aria-hidden='true'
              className='w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
            <span className='sr-only'>Fechar</span>
          </button>
          <div className='px-6 py-6 lg:px-8'>
            <h3 className='mb-4 text-xl font-medium text-gray-900'>
              Entrar como administrador
            </h3>
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Seu email
                </label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400'
                  placeholder='example@company.com'
                  required
                  register={register}
                  error={!!errors}
                  helperText={errors.email?.message}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Sua senha
                </label>
                <Input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main focus:border-main block w-full p-2.5'
                  required
                  register={register}
                  error={!!errors}
                  helperText={errors.password?.message}
                />
              </div>

              <button
                type='submit'
                className='w-full text-white bg-main bg-opacity-90 hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Entrar
              </button>
              <div className='text-sm font-medium text-gray-500'>
                Não tem conta?{' '}
                <a href='#' className='text-main hover:underline'>
                  Crie uma
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
