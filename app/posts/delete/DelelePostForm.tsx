'use client';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/actions/postActions';
import { VscTrash } from 'react-icons/vsc';

export default function DeletePostForm({ id }: { id: string }) {
  console.log('id from delete post form: ', id);

  const router = useRouter();

  const handleDelete = async (e: React.FormEvent) => {
    e.stopPropagation();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    await deletePost(formData);
    router.push('/posts');
  };

  return (
    <form
      onSubmit={handleDelete} 
    >
      <input type='hidden' name='id' value={id && id} className='w-fit' />
      <button
        type='submit'
        className='group flex items-center justify-center text-white bg-blue-700 hover:bg-[r#ff404080] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 px-2 py-2.5 text-center transition-all dura'
      >
        <VscTrash className='text-white group-hover:text-[#000000]' /> Radera
        Post
      </button>
    </form>
  );
}


/* 'use client';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/actions/postActions';
import { VscTrash } from 'react-icons/vsc';

export default function DeletePostForm({ id }: { id: string }) {
  console.log('id from delete post form: ', id);

  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const res = await deletePost(formData);
      }}
      onClick={() => router.push('/posts')}
    >
      <input type='hidden' name='id' value={id && id} className='w-fit' />
      <button
        type='submit'
        className='group flex items-center justify-center text-white bg-blue-700 hover:bg-[r#ff404080] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-32 px-2 py-2.5 text-center transition-all dura'
      >
        <VscTrash className='text-white group-hover:text-[#000000]' /> Radera
        Post
      </button>
    </form>
  );
} */