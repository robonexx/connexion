import React, { ChangeEvent } from 'react';

type TextInputProps = {
  htmlFor: string;
  id: string;
  labelValue: string;
  name: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  handleChange,
}: TextInputProps) => {
  return (
    <div className='flex gap-2 border-none bg-transparent outline-none w-full'>
      <label htmlFor={htmlFor}>{labelValue}</label>
      <input
        className='focus:outline-none bg-transparent'
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={`Enter ${labelValue}`}
      />
    </div>
  );
};

export default TextInput;
