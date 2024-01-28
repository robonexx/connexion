'use client';
import { signOut, useSession } from 'next-auth/react';

import React from 'react';

const Students = () => {
  const { data: session } = useSession();

  if (session?.user.role !== 'admin' && session?.user.role !== 'student') {
    return <h1 className='text-5xl'>Access Denied</h1>;
  }

  return (
    <div className='w-full grid place-content-center '>
      <h2 className='text-[#ff4040'>Students page</h2>
      <h3 className='text-white p-10 rounded-md'>
        page for admin and students
      </h3>
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
  );
};

export default Students;
