import React from 'react';
import CustomLink from '@/components/custom-link/CustomLink';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdPersonAddAlt,
  MdPostAdd,
} from 'react-icons/md';
import { PiStudent } from 'react-icons/pi';
import { FaUserTie } from 'react-icons/fa6';
import { TiDocumentText } from 'react-icons/ti';

interface SidebarMenuItem {
  href: string;
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: SidebarMenuItem[] = [
  {
    href: '/dashboard',
    title: 'Dashboard',
    icon: <MdDashboard />,
  },
  {
    href: '/dashboard/admin-classes',
    title: 'Klasser',
    icon: <MdSupervisedUserCircle />,
  },
  {
    href: '/dashboard/users',
    title: 'Användare',
    icon: <MdSupervisedUserCircle />,
  },
  {
    href: '/dashboard/admin-students',
    title: 'Alla Elever',
    icon: <PiStudent />,
  },
  {
    href: '/dashboard/admin-year1',
    title: 'År1',
    icon: <PiStudent />,
  },
  {
    href: '/dashboard/admin-year2',
    title: 'År2',
    icon: <PiStudent />,
  },
  {
    href: '/dashboard/admin-teachers',
    title: 'Lärare',
    icon: <FaUserTie />,
  },
  {
    href: '/dashboard/users/add',
    title: 'Lägg till',
    icon: <MdPersonAddAlt />,
  },
  {
    href: '/dashboard/posts',
    title: 'Inlägg',
    icon: <TiDocumentText />,
  },
  {
    href: '/dashboard/posts/add',
    title: 'Nytt inlägg',
    icon: <MdPostAdd />,
  },
];

const Sidebar = () => {
  return (
    <div className='relative w-full h-full bg-black shadow flex-col items-start justify-center px-4 hidden md:flex'>
      {SidebarMenuItems.map(({ href, title, icon }) => (
        <CustomLink
          key={title}
          href={href}
          title={title}
          className='text-sm font-thin'
        >
          {icon}
        </CustomLink>
      ))}
    </div>
  );
};

export default Sidebar;
