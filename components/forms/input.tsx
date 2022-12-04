import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  name: string;
  label?: string;
  description?: string;
  error?: boolean;
  helperText?: string;
}

const Input = ({
  label,
  register,
  error,
  name,
  helperText,
  description,
  type = 'text',
  ...rest
}: Props): JSX.Element => {
  return (
    <div className={`flex flex-col w-full`}>
      {label ? (
        <label className='input-label text-slate-600'>{label}</label>
      ) : null}
      <input
        className='border border-gray-200 rounded px-4 py-2 bg-slate-100 placeholder-gray-400 focus:border-main-dark focus:ring-0 ring-0'
        type={type}
        {...register(name, { required: true })}
        {...rest}
      />
      {description && (
        <span className='text-slate-500 text-sm'>{description}</span>
      )}
      {error && <span className='error text-red-500'>{helperText}</span>}
    </div>
  );
};
export default Input;
