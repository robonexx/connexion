'use client';
import React from 'react';
import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';
import { signOut, signIn, useSession } from 'next-auth/react';

import CustomLink from '../custom-link/CustomLink';
import Image from 'next/image';

const Header = () => {
  const { data: session } = useSession();

  console.log(
    'check the role and then will create path conditionals',
    session?.user.role
  );
  return (
    <header className='relative z-10 max-w-full shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-[60px] flex justify-between'>
      <CustomLink
        href='/'
        className='font-bold bg-[red] h-full w-[230px] border-[1px] border-[#ff4040] grid place-content-center text-white py-4'
      >
        <Image
          className='h-16 w-16 object-contain relative'
          src='/dclogo-vit.png'
          alt='danscenter logo'
          width={64}
          height={64}
        />
      </CustomLink>
      <div className='flex items-center justify-between gap-5 relative w-full'>
        <div className='flex lg:order-1 max-sm:ml-auto'>
          {/* Hamburger menu -  */}

          {session && (
            <CustomLink
              href='/'
              onClick={() => signOut()}
              className='text-xs font-thin'
            >
              Sign out <IoMdLogOut className='mx-1' />
            </CustomLink>
          )}
          {!session && (
            <CustomLink href='/auth/login' className='text-xs font-thin'>
              Login <IoMdLogIn className='mx-1' />
            </CustomLink>
          )}
          <CustomLink href='/auth/signup' className='text-xs font-thin'>
            Sign-up{' '}
          </CustomLink>
        </div>
        {/*  <button
            onClick={() => signOut()}
            className='border-[1px] border-[#888] text-white rounded text-xs w-auto px-2 py-3 mx-2 uppercase'
          >
            Logout
        </button> */}
        
          <span className='text-xs tracking-normal px-6 py-10 font-thin text-[#888] hidden md:block'>
            /show /the /browser /paths
          </span>
      
      </div>
    </header>
  );
};

export default Header;
