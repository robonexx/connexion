'use client';
import React from 'react';
import CustomLink from '../custom-link/CustomLink';

const Header = () => {
  return (
    <header className='w-full shadow-md pl-0 pr-4 sm:pr-10 bg-black font-[sans-serif] h-[60px] flex justify-between'>
      <CustomLink
        href='/'
        className='font-bold bg-[red] h-full w-fit px-8 grid place-content-center text-white tracking-wide'
      >
        Danscenter Fryshuset
      </CustomLink>
      <div className='flex items-center justify-between gap-5 relative w-full'>
        <div className='flex lg:order-1 max-sm:ml-auto'>
          {/* Hamburger menu -  */}
          <CustomLink href='/auth/login'>Login</CustomLink>
          <CustomLink href='/auth/signup'>Sign-up</CustomLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
