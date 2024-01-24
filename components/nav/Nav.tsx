'use client';
import React, { useState } from 'react';
import Avatar from '../avatar/Avatar';
import { useSession } from 'next-auth/react';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi2';
import { RiMenu5Fill, RiCloseLine } from 'react-icons/ri';

/*  {image ? <Avatar image={image} width={32} height={32} /> : <CgProfile />} */

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { data: session } = useSession();

  const image = session?.user.image;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='bg-black p-4 md:ml-[200px] flex items-center justify-between h-[60px] max-w-full'>
      <button className='md:hidden text-white' onClick={toggleMenu}>
        {isMenuOpen ? (
          <RiCloseLine className='text-xs font-thin' />
        ) : (
          <RiMenu5Fill className='text-xs font-thin' />
        )}
      </button>
      {session && (
        <span className='text-xs font-normal md:text-base lg:text-2xl tracking-normal py-10 md:font-semibold text-[#ff4040]'>
         <span className='text-[#888]'>Välkommen! </span> {session.user?.name}
        </span>
      )}

      {/* Navigation Links will make dynamic depending on logged in user */}
      <div className='hidden md:block'>
        <a href='#' className='text-white mx-4'>
          Dashboard
        </a>
        <a href='#' className='text-white mx-4'>
          Nytt inlägg
        </a>
        <a href='#' className='text-white mx-4'>
          År 1
        </a>
        <a href='#' className='text-white mx-4'>
          År 2
        </a>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute z-10 top-28 max-w-full transition-all duration-300 flex flex-col px-10 bg-black border-2 rounded-md border-white p-8'>
          <a
            href='/dashboard'
            className='block text-white py-2 px-8 hover:bg-zinc-800 cursor-pointer rounded-md group text-xs font-thin'
          >
            <span className='group-hover:translate-x-4'>Dashboard</span>
          </a>
          <a
            href='/dashboard/posts/add'
            className='block text-white py-2 px-8 hover:bg-zinc-800 cursor-pointer rounded-md text-xs font-thin'
          >
            Nytt inlägg
          </a>
          <a
            href='/year1'
            className='block text-white py-2 px-8 hover:bg-zinc-800 cursor-pointer rounded-md text-xs font-thin'
          >
            År 1
          </a>
          <a
            href='/year2'
            className='block text-white py-2 px-8 hover:bg-zinc-800 cursor-pointer rounded-md text-xs font-thin'
          >
            År 2
          </a>
        </div>
      )}

      <div className='flex items-center relative'>
        <button
          className='text-white ml-4 mx-4 font-thin text-xs'
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? (
            <HiOutlineChevronUp className='text-xs font-thin' />
          ) : (
            <HiOutlineChevronDown className='text-xs font-thin' />
          )}
        </button>

        {/* Dropdown Menu, profile, settings etc check own notes */}
        {isDropdownOpen && (
          <div className='mt-2 absolute z-10 top-8 left-auto right-0 transition-all duration-300 flex flex-col px-10 bg-black border-2 rounded-md border-white p-8'>
            <a
              href='#'
              className='block text-white py-2 px-8 text-xs font-thin'
            >
              Profile
            </a>
            <a
              href='#'
              className='block text-white py-2 px-8 text-xs font-thin'
            >
              Settings
            </a>
            <a
              href='#'
              className='block text-white py-2 px-8 text-xs font-thin'
            >
              Notes
            </a>
            <a
              href='#'
              className='block text-white py-2 px-8 text-xs font-thin'
            >
              Logout
            </a>
          </div>
        )}
        {image ? (
          <Avatar image={image} width={32} height={32} />
        ) : (
          <CgProfile />
        )}
      </div>
    </nav>
  );
};

export default Nav;
