// components/SignupForm.tsx
import React, { useState } from 'react';

interface SignupFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
  startYear: number;
}

const SignupPage: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
    startYear: 2022,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='bg-gray-100 p-6 rounded-md'>
      <div className='mb-4'>
        <label
          htmlFor='fullname'
          className='block text-sm font-medium text-gray-600'
        >
          Full Name
        </label>
        <input
          type='text'
          id='fullname'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.fullname}
          onChange={(e) =>
            setFormData({ ...formData, fullname: e.target.value })
          }
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block text-sm font-medium text-gray-600'
        >
          Username
        </label>
        <input
          type='text'
          id='username'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-sm font-medium text-gray-600'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='confirmPassword'
          className='block text-sm font-medium text-gray-600'
        >
          Confirm Password
        </label>
        <input
          type='password'
          id='confirmPassword'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='role'
          className='block text-sm font-medium text-gray-600'
        >
          Role
        </label>
        <select
          id='role'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value='Teacher'>Teacher</option>
          <option value='Student'>Student</option>
        </select>
      </div>
      <div className='mb-4'>
        <label
          htmlFor='startYear'
          className='block text-sm font-medium text-gray-600'
        >
          Start Year
        </label>
        <input
          type='number'
          id='startYear'
          className='mt-1 p-2 w-full border rounded-md'
          value={formData.startYear}
          onChange={(e) =>
            setFormData({ ...formData, startYear: Number(e.target.value) })
          }
        />
      </div>
      <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
        Sign Up
      </button>
    </form>
  );
};

export default SignupPage;
