import Image from 'next/image';
import { useState } from 'react';

export const REQUEST_TIMEOUT = 90 * 1000;
interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  initial?: any;
  inputEvent?: any;
  value?: any;
  isImage?: any;
}
const FileInput = ({
  name,
  label,
  placeholder,
  initial,
  inputEvent,
  value,
  isImage,
}: Props) => {
  const [file, setFile] = useState<any>();
  const changeDocument = (event: any) => {
    const ficheiro = event.target.files[0];
    inputEvent(ficheiro);
    setFile(window.URL.createObjectURL(ficheiro));
  };
  return (
    <label className=''>
      {isImage && <Image src={file || initial} alt='Logo' />}
      <input
        className='hidden'
        name={name}
        type='file'
        onChange={changeDocument}
        placeholder='Digite a Resposta'
      />
      <div>
        <span className='mt-1 bg-slate-500 px-4 py-2 text-white rounded-lg'>
          {!file ? 'Selecione a imagem' : value}
        </span>
      </div>
    </label>
  );
};
export default FileInput;
