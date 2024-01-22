'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        role: 'Teacher' || 'Student'
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
            role: ''
          });
        }
      };

  return (
    <div className='max-w-2xl rounded-md border-gray-500 border-[1px] py-10 px-5 m-auto w-full mt-10'>
    <h2>Sign up</h2>
<form
  onSubmit={handleSubmit}
  className='bg-transparent p-6 rounded-md md:max-w-2/5 md:mx-auto'
>
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
            name='fullname'
            className='mt-1 p-2 w-full border rounded-md'
            value={user.fullname}
            onChange={handleInputChange}
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
            name='username'
            className='mt-1 p-2 w-full border rounded-md'
            value={user.username}
            onChange={handleInputChange}
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
            name='password'
            className='mt-1 p-2 w-full border rounded-md'
            value={user.password}
            onChange={handleInputChange}
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
            name='confirmPassword'
            className='mt-1 p-2 w-full border rounded-md'
            value={user.confirmPassword}
            onChange={handleInputChange}
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
            name='role'
            className='mt-1 p-2 w-full border rounded-md block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            value={user.role}
            onChange={handleInputChange}
          >
            <option value={'false'} className='text-gray-600'>
              role?
            </option>
            <option value='Teacher' className='text-gray-600'>
              Teacher
            </option>
            <option value='Student' className='text-gray-600'>
              Student
            </option>
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
            value={user.startYear}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
