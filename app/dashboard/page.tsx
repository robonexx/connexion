'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';

const Dashboard = () => {
  // fetch the data
  const { data: session } = useSession();

  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center red-gradient py-20 px-20'>
      <h1 className='my-8 font-md font-semibold'>Admin dashboard!</h1>
      <div className='min-h-screen py-20'>
        <div className='w-fit max-w-xl grid place-items-center mx-auto py-40 gap-6 bg-transparent'>
          <span className='text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]'>
            welcome to the Dashboard
          </span>
          {session && (
            <span className='text-2xl tracking-normal py-10 font-semibold text-black'>
              {session.user?.name}
            </span>
          )}

          <button
            onClick={() => signOut()}
            className='bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
