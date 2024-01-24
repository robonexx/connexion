'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import Sidebar from './_components/Sidebar';
import Post from '@/components/posts/Post';

interface PostProps {
  id: string;
  author: string;
  date: string;
  thumbnail?: string;
  authorEmail?: string;
  title: string;
  content: string;
  links?: string[];
  category?: string;
}

const mockData: PostProps[] = [
  {
    id: '1',
    author: 'John Doe',
    date: '2022-01-01',
    thumbnail: 'https://images.pexels.com/photos/4637225/pexels-photo-4637225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    authorEmail: 'john.doe@example.com',
    title: 'First Post',
    content: 'This is the content of the first post.',
    links: ['https://link1.com', 'https://link2.com'],
    category: 'Technology',
  },
  {
    id: '2',
    author: 'Jane Doe',
    date: '2022-02-15',
    thumbnail: 'https://images.pexels.com/photos/12437649/pexels-photo-12437649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    authorEmail: 'jane.doe@example.com',
    title: 'Second Post',
    content: 'This is the content of the second post.',
    links: ['https://link3.com'],
    category: 'Science',
  },
  {
    id: '3',
    author: 'Bob Smith',
    date: '2022-03-30',
    thumbnail: 'https://images.pexels.com/photos/16307204/pexels-photo-16307204/free-photo-of-ljus-svartvitt-stad-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    authorEmail: 'bob.smith@example.com',
    title: 'Third Post',
    content: 'This is the content of the third post.',
    links: ['https://link4.com', 'https://link5.com'],
    category: 'Travel',
  },
];

const Dashboard = () => {
  // fetch the data
  const { data: session } = useSession();

  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center red-gradient py-20 px-20'>
      <h1 className='my-8 font-md font-semibold'>Admin dashboard!</h1>
      <div className='min-h-screen py-20'>
        <div className='w-fit max-w-4xl grid place-items-center mx-auto py-40 gap-6 bg-transparent'>
          <span className='text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]'>
            welcome to the Dashboard
          </span>
          {session && (
            <span className='text-2xl tracking-normal py-10 font-semibold text-black'>
              {session.user?.name}
            </span>
          )}
          <section className='w-full h-full flex flex-wrap gap-5'>
            {mockData.map((postData: PostProps) => (
              <Post key={postData.id} {...postData} />
            ))}
          </section>

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
