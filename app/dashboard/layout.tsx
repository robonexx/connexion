'use client';
import { signOut, useSession } from 'next-auth/react';

import type { Metadata } from 'next';
import Sidebar from './_components/Sidebar';
/* import Header from '@/app/dashboard/components/ui/header/Header'; */

/* export const metadata: Metadata = {
  title: 'Danscenter | Dashboard',
}; */

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  return (
    <main className='max-w-full min-h-screen'>
      <div className='fixed left-0 top-0 w-[206px] mt-[60px] h-screen z-10 hidden md:block'>
        <Sidebar />
      </div>
      <div className='flex flex-col relative max-w-full md:ml-[200px]'>
        {/*  <Header /> */}
        {session && (
          <span className='text-2xl tracking-normal py-10 font-semibold px-2'>
            Show different text depeding on role... {session.user?.role}
          </span>
        )}
        {children}
      </div>
    </main>
  );
};

export default Layout;
