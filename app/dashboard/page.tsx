/* 'use client'; */
/* 
import { signOut, useSession } from 'next-auth/react'; */
import React from 'react';
import Post from '@/components/posts/Post';
import { PostItemProps } from '@/types/Types';
import { fetchPosts } from '@/lib/data/postLoader';
import Pagination from '@/components/pagination/Pagination';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/options';

const mockData: PostItemProps[] = [
  {
    _id: '1',
    author: { _id: '4749879853', name: 'John Doe' },
    createdAt: '2022-01-01',
    image: 'https://images.pexels.com/photos/4637225/pexels-photo-4637225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'First Post',
    body: 'This is the body of the first post.',
    link: 'https://link1.com',
    category: 'Vikarie',
  },
  {
    _id: '2',
    author: { _id: '47498798d53', name: 'Jill Smith' },
    createdAt: '2022-02-15',
    image: 'https://images.pexels.com/photos/12437649/pexels-photo-12437649.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Second Post',
    body: 'This is the body of the second post.',
    link:'https://link3.com',
    category: 'Schema ändring',
  },
  {
    _id: '3',
    author: { _id: '5549879853', name: 'Bob Doe' },
    createdAt: '2022-03-30',
    image: 'https://images.pexels.com/photos/16307204/pexels-photo-16307204/free-photo-of-ljus-svartvitt-stad-man.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    title: 'Third Post',
    body: 'This is the body of the third post.',
    link: 'https://link4.com',
    category: 'Studie besök',
  },
];

type SearchTypes = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

const Dashboard = async ({ searchParams }: SearchTypes) => {
  // fetch the data
 /*  const { data: session } = useSession(); */
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';

  const session = await getServerSession(authOptions);
  console.log('session from dashboard: ', session)

  const { count, posts } = await fetchPosts(q, page);


/*   if (session?.user.role !== "admin") {
      return <h1 className="text-5xl">Access Denied</h1>
 }
 */
  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center red-gradient py-20 px-20'>
      <h1 className='text-4xl tracking-wide font-semibold capitalize text-[#ff4040]'>Senaste inlägg!</h1>
      <div className='min-h-screen pt-8 pb-8'>
        <div className='w-fit max-w-4xl grid place-items-center mx-auto bg-transparent'>
          <section className='w-full h-full flex flex-col md:flex-row md:flex-wrap gap-5'>
          {posts.map(({ _id, createdAt, title, tags, body, image, author }) => (
          <Post
            key={_id}
            title={title}
            createdAt={createdAt}
            body={body}
            tags={tags}
            _id={_id}
            image={image}
            author={author}
          />
        ))}
          </section>
        </div>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Dashboard;
