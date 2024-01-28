'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import React from 'react';

const Teachers = () => {
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

  if (session?.user.role !== 'admin' && session?.user.role !== 'teacher') {
    return router.push('/denied');
  }

  return (
    <div>
      {session && (
        <span className='text-2xl tracking-normal py-10 font-semibold text-black'>
         Hello there {session.user?.name} What we gonna teach today?
        </span>
      )}
      <div className='w-full grid place-content-center '>
      <h2 className='text-[#ff4040'>TEACHERS</h2>
      <h3 className='text-white p-10 rounded-md'>
        page for admin and teachers
      </h3>
      {session && (
        <span className='text-2xl tracking-normal py-10 font-semibold text-black'>
          {session.user?.name}
        </span>
      )}
    </div>
      

      <button
        onClick={() => signOut()}
        className='bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase'
      >
        Logout
      </button>
    </div>
  );
};

export default Teachers;
