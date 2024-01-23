import { ChangeEvent } from 'react';

type InputFieldType = {
  htmlFor: string;
  id: string;
  labelValue: string;
  name: string;
<<<<<<< HEAD
    type: string;
    required?: boolean;
=======
  type: string;
  required?: boolean;
>>>>>>> component/input-field
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string; // Add the value prop
};

export const Input = ({
  htmlFor,
  id,
  labelValue,
  name,
<<<<<<< HEAD
    type,
=======
  type,
>>>>>>> component/input-field
  required,
  handleChange,
  value, // Add the value prop
}: InputFieldType) => {
  return (
    <div className='mb-4'>
<<<<<<< HEAD
          <label htmlFor={htmlFor} className="block text-sm font-medium text-white">{labelValue}</label>
=======
      <label htmlFor={htmlFor} className='block text-sm font-medium text-white'>
        {labelValue}
      </label>
>>>>>>> component/input-field
      <input
        className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
        type={type}
        id={id}
<<<<<<< HEAD
              name={name}
              required={required}
=======
        name={name}
        required={required}
>>>>>>> component/input-field
        onChange={handleChange}
        placeholder={labelValue}
        value={value} // Use the value prop
        key={name} // Add the key prop to force re-render
      />
    </div>
  );
};