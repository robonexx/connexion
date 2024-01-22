'use client';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { Input } from '@/components/input-field/InputField';
import { useRouter } from 'next/navigation';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

const LoginPage: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prev) => {
      console.log({ ...prev, [name]: value });
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!user.username || !user.password) {
        setError('please fill all the fields');
        return;
      }

      console.log(user.username, user.password + ' from submit');

      const res = await signIn('credentials', {
        username: user.username,
        password: user.password,
        redirect: false,
      });

      if (res?.error) {
        console.log('Authentication error:', res.error);
        setError(res.error);
      }
      console.log('submitted form');
      setError('');
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
      setError('');
    } finally {
      setLoading(false);

      setUser({
        username: '',
        password: '',
      });
    }
  };

  return (
    <div className='max-w-2xl rounded-md border-gray-500 border-[1px] py-10 px-5 m-auto w-full mt-10'>
      <h2 className='w-fit'>
        Login
        <span className='block w-full transition-all duration-500 h-0.5 bg-[#ff4040]'></span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className='bg-transparent p-6 rounded-md md:max-w-2/5 md:mx-auto'
      >
        <div className='mb-4'>
          <Input
            htmlFor='username'
            name='username'
            id='username'
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
      </form>
    </div>
  );
};

export default LoginPage;
