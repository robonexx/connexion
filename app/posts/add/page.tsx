import React from 'react';
import { addPost } from '@/lib/actions/postActions';
import AddPostForm from './AddPostForm';

const AddPost: React.FC = () => {
  return (
    <div className='max-w-sm mx-auto '>
      <h2 className='mt-4 font-semibold text-xl w-fit'>
        Lägg till nytt inlägg 
        <span className='block w-full transition-all duration-500 h-1 bg-[#ff4040] mb-4'></span>
      </h2>
      <AddPostForm />
    </div>
  );
};

export default AddPost;
