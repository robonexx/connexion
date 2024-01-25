'use client'
import React from 'react';
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from 'react-dom';
import { addUser } from '@/lib/actions/userActions';
import toast from 'react-hot-toast'



const RegisterForm: React.FC = (previousState: any, formData: FormData) => {

    const [state, formAction] = useFormState(addUser, undefined);

    const router = useRouter();

    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {
    state?.message && router.push("/dashboard/users");
  }, [state?.message, router]);
    
  return (
      <form action={formAction} className='mb-5 w-full' ref={ref}>
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
          {state?.error && (
        <div className='text-white bg-zinc-500 p-3 rounded-md'>
          {state.error}
        </div>
      )}
      </form>
  );
};

export default RegisterForm;
