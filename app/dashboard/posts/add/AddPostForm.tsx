'use client';
import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/actions/postActions';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
/* import toast from 'react-hot-toast' */

const AddPostForm: React.FC = (previousState: any, formData: FormData) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [state, formAction] = useFormState(addPost, undefined);

  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
  useEffect(() => {
    state?.message && router.push('/dashboard/posts');
  }, [state?.message, router]);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/unauthorized');
    },
  });

  if (status === 'loading') {
    return 'Loading or not authenticated...';
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Preview image funcationality
      const reader = new FileReader();
      reader.onloadend = () => {
        // Using the reader.result for the preview of the image
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action={formAction} className='mb-5'>
      <input type='hidden' name='id' value={session?.user._id} />
      <div className='mb-5'>
        <label htmlFor='title' className='block text-sm font-medium text-white'>
          Image
        </label>
        <input
          type='file'
          name='image'
          accept='image/*'
          onChange={handleImageChange}
          className='mt-1 p-2 w-full border rounded-md bg-transparent text-xs file:text-xs hover:file:cursor-pointer'
        />
        {imagePreview && (
          <div className='max-w-56 w-full h-56 relative'>
            <p>Image Preview:</p>
            <Image
              src={imagePreview}
              alt='Image preview'
              fill
              className='object-cover rounded-md object-center'
            />
          </div>
        )}
      </div>
      <div className='mb-5'>
        <label htmlFor='title' className='block text-sm font-medium text-white'>
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
        <label htmlFor='link' className='block text-sm font-medium text-white'>
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
        <label htmlFor='body' className='block text-sm font-medium text-white'>
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
  );
};

export default AddPostForm;
