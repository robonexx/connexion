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


  if (session?.user.role !== "admin") {
      return <h1 className="text-5xl">Access Denied</h1>
  }
  

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
