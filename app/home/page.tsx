'use client';
import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const Home = () => {
  const { data: session } = useSession();
  if (!session?.user) {
    redirect('/auth/login');
  }
  return <div>Home page where everyone that is logged in comes in</div>;
};

export default Home;
