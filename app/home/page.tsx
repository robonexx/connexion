'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized');
    },
  });


  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  return (
    <div className='w-full h-full grid place-content-center'>
      Home page where everyone that is logged in comes in
      <nav></nav>
    </div>
  );
};

export default Home;
