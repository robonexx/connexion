'use client';
import { useRouter } from 'next/navigation';
import { deletePost } from '@/lib/actions/postActions';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { VscTrash } from 'react-icons/vsc';

export default function DeletePostForm({ id }: { id: string }) {
  const { pending } = useFormStatus();
  console.log('id from delete post form: ', id);

  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const res = await deletePost(formData);
        toast(res.message);
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
}
