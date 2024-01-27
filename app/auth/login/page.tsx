'use client';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Input } from '@/components/input-field/InputField';
import { useRouter } from 'next/navigation';
import ErrorMessage from '@/components/error-msg/ErrorMessage';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (
    event: any
  ) => {
    const { name, value } = event.target;
    setUser((prev) => {
      console.log({ ...prev, [name]: value });
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!user.name || !user.password) {
        setError('please fill all the fields');
        return;
      }

    /*   console.log(user.name, user.password + ' from submit'); */

      const res = await signIn('credentials', {
        name: user.name,
        password: user.password,
        redirect: false,
      });

      if (res?.error) {
        console.log('Authentication error:', res.error);
        setError('Authentication error:');
        setUser({
          name: '',
          password: '',
        });
      }
      console.log('submitted form');
      setError('');
    } catch (error) {
      console.log(error);
      setError('Error loggin in check password and name');
      setUser({
        name: '',
        password: '',
      });
    } finally {
      setLoading(false);
      router.push('/dashboard');
      setUser({
        name: '',
        password: '',
      });
    }
  };

  return (
    <div className='max-w-2xl rounded-md border-gray-500 md:border-[1px] py-10 px-2 md:px5 m-auto w-full mt-10'>
      <h2 className='mt-4 font-semibold text-xl w-fit'>
        Login
        <span className='block w-full transition-all duration-500 h-1 bg-[#ff4040]'></span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className='bg-transparent p-6 rounded-md w-full md:max-w-2/5 md:mx-auto'
      >
        <div className='mb-4'>
          <Input
            htmlFor='name'
            name='name'
            id='name'
            labelValue='Your username'
            type='text'
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
        <button
          type='submit'
          className='bg-transparent border-[1px] text-white p-2 rounded-md hover:bg-slate-700 transition-all ease-in-out duration-300'
        >
          Login
        </button>
        {error ? <ErrorMessage message={error} /> : <div></div>}
      </form>
    </div>
  );
};

export default LoginPage;
