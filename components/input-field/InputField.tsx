import { ChangeEvent } from 'react';

type InputFieldType = {
  htmlFor: string;
  id: string;
  labelValue: string;
  name: string;
  type: string;
  required?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string; // Add the value prop
};

export const Input = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  required,
  handleChange,
  value, // Add the value prop
}: InputFieldType) => {
  return (
    <div className='mb-4'>
      <label htmlFor={htmlFor} className='block text-sm font-medium text-white'>
        {labelValue}
      </label>
      <input
        className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
        type={type}
        id={id}
        name={name}
        required={required}
        onChange={handleChange}
        placeholder={labelValue}
        value={value} // Use the value prop
        key={name} // Add the key prop to force re-render
      />
    </div>
  );
};