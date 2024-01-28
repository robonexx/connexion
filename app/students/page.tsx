'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const Students = () => {
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

  if (session?.user.role !== 'admin' && session?.user.role !== 'student') {
    return router.push('/denied');
  }

  return (
    <div className='w-full grid place-content-center '>
      {session && (
        <p className='text-2xl tracking-normal py-10 font-semibold text-black'>
          Hi there {session.user?.name}, lets dance!
          <span className='text-xs font-mono'>
            put on your red shoes and dance the blues!
          </span>
        </p>
      )}
      <h2 className='text-[#ff4040'>Students page</h2>
      <h3 className='text-white p-10 rounded-md'>
        page for admin and students
      </h3>

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
