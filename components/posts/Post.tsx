import Image from 'next/image';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import DeleteButton from '../delete-button/DeleteButton';
import { getServerSession } from 'next-auth/next';
import ImageContainer from '../image-container/ImageContainer';
/* import { authOptions } from "@/app/api/auth/[...nextauth]/route"; */
import { PostItemProps } from '@/types/Types';
import { convertDate } from '@/utils/convertDate';
import { timeAgo } from '@/utils/timeAgo';
import CustomLink from '../custom-link/CustomLink';
import { VscEye } from 'react-icons/vsc';

const Post = ({
  _id,
  title,
  createdAt,
  image,
  body,
  link,
  author,
  category,
}: PostItemProps) => {
  /*  const session = await getServerSession(); */

  /* const isEditable = session && session?.user?.id === author.id; */

  return (
    <div className='relative my-4 border-b border-[#888] py-8 max-w-96'>
      <div className='mb-4'>
        {author ? (
          <>
            Posted by: <span className='font-bold'>{author.name}</span> on{' '}
            {convertDate(createdAt)}
          </>
        ) : (
          <>Posted: {timeAgo(createdAt)}</>
        )}
      </div>

      <div className='w-full h-72 relative'>
        {image ? (
          <ImageContainer imageData={image} />
        ) : (
          <Image
            src={'/thumbnail-placeholder.png'}
            alt={title}
            fill
            className='object-cover rounded-md object-center'
          />
        )}
      </div>

      {category && (
        <Link
          className='bg-[#ff4040] w-fit text-white px-4 py-0.5 text-sm font-bold rounded-md mt-4 block'
          href={`categories/${category}`}
        >
          {category}
        </Link>
      )}

      <h2>{title}</h2>
      <p className='content'>{body}</p>
      <div className='flex gap-2 items-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
          />
        </svg>

        <Link className='link' href={`${link}`}>
          {link}
        </Link>
      </div>

      <Link
        href={`/posts/${_id}`}
        title=''
        className='text-white text-xl w-fit absolute right-2 bottom-2 top-auto flex items-center'
      >
        <span className='text-xs font-mono mx-1'>Read more</span> <VscEye />
      </Link>

      {/*  {isEditable && (
        <div className="flex gap-3 font-bold py-2 px-4 rounded-md bg-slate-200 w-fit">
          <Link href={`/edit-post/${id}`}>Edit</Link>
          <DeleteButton id={id} />
        </div>
      )} */}
    </div>
  );
};

export default Post;
