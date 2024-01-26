import React, { ReactNode } from 'react';

interface PostsListProps {
  children: ReactNode;
}

const PostsList: React.FC<PostsListProps> = ({ children }) => {
  return (
    <ul className='list-none m-0 p-0 flex flex-col max-w-full md:max-w-md lg:max-w-lg'>
      {children}
    </ul>
  );
};

export default PostsList;

