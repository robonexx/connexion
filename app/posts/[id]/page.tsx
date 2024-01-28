import React from 'react';
import { fetchSinglePost } from '@/lib/data/postLoader';
import { updatePost } from '@/lib/actions/postActions';
import Image from 'next/image';
import ImageContainer from '@/components/image-container/ImageContainer';
import DeletePostForm from '../delete/DelelePostForm';

const SinglePostPage = async ({ params }: { params: any }) => {
  const { id } = params;
  console.log(id);
  const post = await fetchSinglePost(id);

  return (
    <div className='max-w-sm mx-auto relative '>
      <h2 className='mt-4 font-semibold text-xl w-fit'>
        Lägg till nytt inlägg
        <span className='block w-full transition-all duration-500 h-1 bg-[#ff4040] mb-4'></span>
      </h2>
      <div className="w-full h-60 relative">
      {post.image ? (
        <ImageContainer imageData={post.image} />
      ) : (
        <Image
          src={'/thumbnail-placeholder.png'}
          alt={post.title}
          fill
          className='object-cover rounded-md object-center'
        />
        )}
        </div>
      <form action={updatePost} className='mb-5'>
        <input type='hidden' name='id' value={id} />
        <div className='mb-5'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-white'
          >
            Image
          </label>
          <input
            type='file'
            name='image'
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-white'
          >
            title
          </label>
          <input
            type='text'
            name='title'
            placeholder={post.title}
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
            name='link'
            placeholder={post.link}
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
            placeholder={post.body}
            name='body'
            className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
          />
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Update Post
        </button>
      </form>
      <div className='absolute bottom-0 right-0 left-auto'>
     <DeletePostForm id={id} />
      </div>
    </div>
  );
};

export default SinglePostPage;
