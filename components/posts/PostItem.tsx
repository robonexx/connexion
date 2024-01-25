import React from 'react';
import Tag from '../tag/Tag';
import { timeAgo } from '@/utils/timeAgo';
import ImageContainer from '../image-container/ImageContainer';
import { PostItemProps } from '@/types/Types';
import { convertDate } from '@/utils/convertDate';

const PostItem: React.FC<PostItemProps> = ({ createdAt
  , title, tags, body, _id, image }) => {
  /* console.log('post id: ', id) */
  return (
    <div className='py-5'>
      <article className='flex flex-col space-y-2 xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
            <time dateTime='2023-08-05T00:00:00.000Z'>{convertDate(createdAt)}</time>
          </dd>
        </dl>
        <div className='space-y-3'>
          <div>
            <h2 className='text-2xl font-bold leading-8 tracking-tight'>
              <a
                className='text-slate-800 dark:text-white drop-shadow'
                href='/blog/release-of-tailwind-nextjs-starter-blog-v2.0'
              >
                {title}
              </a>
            </h2>
            {image && <ImageContainer imageData={image} />}
            <div className='flex flex-wrap'>
              {tags?.map((tag, index) => (
                /*  <a
                  key={index}
                  className='group mr-3 p-1 rounded-sm text-sm font-medium uppercase text-primary-500 hover:text-white hover:bg-zinc-800 dark:hover:text-primary-400 font-alt transition-all duration-300'
                  href={`/tags/${tag.toLowerCase()}`}
                >
                    {tag}
                    <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ff4040] opacity-50'></span>
                </a> */
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className='prose max-w-none text-slate-50 dark:text-slate-400'>
            {body}
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostItem;
