'use client';
import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/input-field/InputField';
import ErrorMessage from '@/components/error-msg/ErrorMessage';

interface SignupFormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  fullname: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
  startYear?: number;
}

const SignupPage: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const [isInProgress, setIsInProgress] = useState(false);
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    startYear: '',
    role: 'student' || 'teacher',
  });

  const [passwordMatchError, setPasswordMatchError] = useState('');

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = ({ target }) => {
    const { name, value } = target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setIsInProgress(true);
    e.preventDefault();
    setLoading(true);

    if (user.password !== user.confirmPassword) {
      setPasswordMatchError("Passwords don't match");
      return;
    } else {
      setPasswordMatchError('');
    }
    // Remove confirmPassword from user object
    const { confirmPassword, ...userDataWithoutConfirmPassword } = user;

    try {
      if (
        !userDataWithoutConfirmPassword.username ||
        !userDataWithoutConfirmPassword.email ||
        !userDataWithoutConfirmPassword.password
      ) {
        setError('Please fill all the fields');
        return;
      }

      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(userDataWithoutConfirmPassword.email)) {
        setError('Invalid email id');
        return;
      }

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(userDataWithoutConfirmPassword),
      });
      
      const parsedResponse = await res.json();
      console.log('API response:', parsedResponse);
      setIsInProgress(false);

      if (res.ok) {
        console.log('User added successfully');
        setError('');
        router.push('/auth/login');
      } else {
        // Log additional information from the response
        console.error('Unexpected response:', parsedResponse);
        setError('Unexpected response from the server');
      }
    } catch (error) {
      console.error('Error during API request:', error);
      setError('An error occurred during the request');
    } finally {
      setLoading(false);

      setUser({
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        startYear: '',
        role: '',
      });
    }
  };

  return (
    <div className='max-w-xl rounded-md border-gray-500 border-[1px] py-10 px-5 m-auto w-full mt-10'>
      <h2 className='w-fit'>
        Sign up
        <span className='block w-full transition-all duration-500 h-0.5 bg-[#ff4040]'></span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className='bg-transparent p-6 rounded-md md:max-w-2/5 md:mx-auto'
      >
        <div className='mb-4'>
          <Input
            htmlFor='fullname'
            type='text'
            id='fullname'
            name='fullname'
            labelValue='fullname'
            handleChange={handleInputChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='username'
            type='text'
            id='username'
            name='username'
            labelValue='username'
            required={true}
            handleChange={handleInputChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='email'
            type='email'
            id='email'
            name='email'
            labelValue='Email'
            required={true}
            handleChange={handleInputChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='password'
            name='password'
            id='password'
            labelValue='********'
            type='password'
            required={true}
            handleChange={handleInputChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='confirmPassword'
            name='confirmPassword'
            id='confirmPassword'
            labelValue='Confirm Password'
            type='password'
            required={true}
            handleChange={handleInputChange}
          />
          {passwordMatchError && (
            <p className='text-red-500 text-sm mt-1'>{passwordMatchError}</p>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='role'
            className='block text-sm font-medium text-white'
          >
            Role <span className='font-thin text-xs'>(Student or Teacher)</span>
          </label>
          <select
            id='role'
            name='role'
            className='mt-1 p-2 w-full border rounded-md bg-transparent text-xs font-thin'
            value={user.role}
            required={false}
            onChange={handleInputChange}
          >
            <option
              value='teacher'
              className='text-gray-600 text-xs bg-transparent rounded-none'
            >
              Teacher
            </option>
            <option
              value='student'
              className='text-gray-600 text-xs bg-transparent'
            >
              Student
            </option>
          </select>
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='startYear'
            type='number'
            id='startYear'
            name='startYear'
            labelValue='Start Year'
            required={false}
            handleChange={handleInputChange}
          />
        </div>
        {error ? <ErrorMessage message={error} /> : <div></div>}

        <button
          type='submit'
          className='bg-transparent border-[1px] text-white p-2 rounded-md hover:bg-slate-700 transition-all ease-in-out duration-300 cursor-pointer'
          disabled={isInProgress}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
