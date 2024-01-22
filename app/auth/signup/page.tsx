'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/input-field/InputField';

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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    startYear: '',
    role: 'Student' || 'Teacher',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log(user);
    try {
      if (
        !user.username ||
        !user.email ||
        !user.password ||
        !user.fullname ||
        !user.startYear ||
        !user.role
      ) {
        setError('please fill all the fields');
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(user.email)) {
        setError('invalid email id');
        return;
      }
      const res = await axios.post('/api/register', user);
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
        console.log('user added successfully');
        setError('');
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setError('');
    } finally {
      setLoading(false);

      setUser({
        fullname: '',
        username: '',
        email: '',
        password: '',
        startYear: '',
        role: '',
      });
    }
  };

  return (
    <div className='max-w-2xl rounded-md border-gray-500 border-[1px] py-10 px-5 m-auto w-full mt-10'>
      <h2 className='w-fit'>Sign up
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
            handleChange={handleInputChange}
          />
        </div>
        <div className='mb-4'>
          <Input
            htmlFor='confirmpassword'
            name='confirmpassword'
            id='confirmpassword'
            labelValue='Confirm Password'
            type='confirmpassword'
            handleChange={handleInputChange}
          />
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
            onChange={handleInputChange}
          >
            <option
              value='Teacher'
              className='text-gray-600 text-xs bg-transparent rounded-none'
            >
              Teacher
            </option>
            <option
              value='Student'
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
            handleChange={handleInputChange}
          />
        </div>
        <button
          type='submit'
          className='bg-transparent border-[1px] text-white p-2 rounded-md hover:bg-slate-700 transition-all ease-in-out duration-300'
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
