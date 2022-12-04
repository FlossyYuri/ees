import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './input';

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  emailConfirmation: string;
};

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className='w-full flex flex-col items-stretch min-h-screen'>
      <section>
        <h2>Detalhes de Faturamento</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name='fullName'
            register={register}
            error={!!errors}
            helperText={errors.phone?.message}
            placeholder='Nome Completo'
          />
          <Input
            {...register('phone', { required: true })}
            name='phone'
            register={register}
            error={!!errors}
            helperText={errors.phone?.message}
            placeholder='Numero de celular'
          />
          <Input
            {...register('email', { required: true })}
            name='email'
            register={register}
            error={!!errors}
            helperText={errors.email?.message}
            placeholder='Endereço de email'
          />
          <Input
            {...register('emailConfirmation', { required: true })}
            name='emailConfirmation'
            register={register}
            error={!!errors}
            helperText={errors.emailConfirmation?.message}
            placeholder='Confirmação de endereço de email'
          />
          <input type='submit' />
        </form>
      </section>
    </div>
  );
};

export default CustomerForm;
