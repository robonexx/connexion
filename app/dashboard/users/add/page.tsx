import React from 'react';
import { addUser } from '@/lib/actions/userActions';
import { Input } from '@/components/input-field/InputField';
import RegisterForm from './RegisterForm';

const AddUser: React.FC = () => {
  return (
    <div className='w-full md:max-w-md mx-auto lg:px-4'>
      <h2 className='mt-4 font-semibold text-xl w-fit'>
        Lägg till elever eller lärare
        <span className='block w-full transition-all duration-500 h-1 bg-[#ff4040] mb-4'></span>
      </h2>
        <RegisterForm />
      {/* <form action={addUser} className='mb-5 w-full'>
        <div className='mb-5'>
          <label
            htmlFor='fullname'
            className='block text-sm font-medium text-white'
          >
            Full name
          </label>
          <input
            type='text'
            placeholder='fullname'
            name='fullname'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-white'
          >
            Username
          </label>
          <input
            type='text'
            placeholder='name'
            name='name'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-white'
          >
            Email
          </label>
          <input
            type='email'
            placeholder='email'
            name='email'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='password'
            className='block text-sm font-medium text-white'
          >
            Password
          </label>
          <input
            type='password'
            placeholder='password'
            name='password'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='role'
            className='block text-sm font-medium text-white'
          >
            Role{' '}
            <span className='font-thin text-xs font-mono'>
              (Student or Teacher)
            </span>
          </label>
          <select
            id='role'
            name='role'
            className='mt-1 p-2 w-full border rounded-md bg-transparent text-xs font-thin'
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
          <label
            htmlFor='desc'
            className='block text-sm font-medium text-white'
          >
            Start år{' '}
            <span className='font-thin text-xs font-mono'>(exempel 2022)</span>
          </label>
          <input
            type='number'
            placeholder='startYear'
            name='startYear'
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='desc'
            className='block text-sm font-medium text-white'
          >
            Beskrining{' '}
            <span className='font-thin text-xs font-mono'>(optional)</span>
          </label>
          <textarea
            rows={5}
            placeholder='desc'
            name='desc'
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default AddUser;
