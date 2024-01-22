import { ChangeEvent } from 'react';

type InputFieldType = {
  htmlFor: string;
  id: string;
  labelValue: string;
  name: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  handleChange,
}: InputFieldType) => {
  return (
    <div className='mb-4'>
          <label htmlFor={htmlFor} className="block text-sm font-medium text-white">{name}</label>
      <input
        className="mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs"
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={labelValue}
      />
    </div>
  );
};