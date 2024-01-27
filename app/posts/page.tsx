import React from 'react';
import PostsList from '@/components/posts/PostsList';
import PostItem from '@/components/posts/PostItem';
import CustomLink from '@/components/custom-link/CustomLink';
import Pagination from '@/components/pagination/Pagination';
import { fetchPosts } from '@/lib/data/postLoader';
import { convertDate } from '@/utils/convertDate';

// mockData will be updated to data from db

type SearchTypes = {
  searchParams: {
    q?: string;
    page?: string;
  };
};

const Posts = async ({ searchParams }: SearchTypes) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';

  const { count, posts } = await fetchPosts(q, page);
  return (
    <div className='relative flex min-h-screen h-full w-full flex-col items-center mt-20 red-gradient'>
      <h1>Post Page!</h1>
      <nav>
        <CustomLink href='/dashboard/posts/add' />
      </nav>
      <PostsList>
        {posts.map(({ _id, createdAt, title, tags, body, image, author }) => (
          <PostItem
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
      </PostsList>
      <Pagination count={count} />
    </div>
  );
};

export default Posts;
