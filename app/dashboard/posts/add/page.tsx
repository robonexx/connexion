import React from 'react';
import { addPost } from '@/lib/actions/postActions';

const AddPost: React.FC = () => {
  return (
    <div className='max-w-sm mx-auto '>
      <h2 className='mt-4 font-semibold text-xl w-fit'>
        Lägg till nytt inlägg 
        <span className='block w-full transition-all duration-500 h-1 bg-[#ff4040] mb-4'></span>
      </h2>
      <form action={addPost} className='mb-5'>
        <div className='mb-5'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-white'
          >
            title
          </label>
          <input
            type='text'
            placeholder='title'
            name='title'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='link'
            className='block text-sm font-medium text-white'
          >
            link
          </label>
          <input
            type='text'
            placeholder='link'
            name='link'
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        
        <div className='mb-5'>
          <label
            htmlFor='body'
            className='block text-sm font-medium text-white'
          >
            What are we sharing today?
          </label>
          <textarea
            rows={5}
            placeholder='body'
            name='body'
            required
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
