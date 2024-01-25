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
    category: 'Vikarie',
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
    category: 'Schema ändring',
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
    category: 'Studie besök',
  },
];

const Dashboard = () => {
  // fetch the data
  const { data: session } = useSession();

  if (session?.user.role !== "admin") {
      return <h1 className="text-5xl">Access Denied</h1>
 }

  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center red-gradient py-20 px-20'>
      <h1 className='text-4xl tracking-wide font-semibold capitalize text-[#ff4040]'>Senaste inlägg!</h1>
      <div className='min-h-screen pt-8 pb-8'>
        <div className='w-fit max-w-4xl grid place-items-center mx-auto bg-transparent'>
          <section className='w-full h-full flex flex-col md:flex-row md:flex-wrap gap-5'>
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
