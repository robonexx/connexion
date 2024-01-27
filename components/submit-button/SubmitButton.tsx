import React from 'react';
import { useFormStatus } from 'react-dom';

interface SubmitButtonProps {
  value: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ value }) => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 ${pending ? 'text-yellow-200' : ''} `}>
      {pending ? 'Submitting...' : value}
    </button>
  );
};

export default SubmitButton;
