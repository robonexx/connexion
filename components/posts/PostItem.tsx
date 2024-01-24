import React from 'react';
import Tag from '../tag/Tag';
import { timeAgo } from '@/utils/timeAgo';

interface PostItemProps {
  date: string;
  title: string;
  tags: string[];
  body: string;
  id: string;
}

const PostItem: React.FC<PostItemProps> = ({ date, title, tags, body, id }) => {
  console.log('post id: ', id)
  return (
    <div className='py-5'>
      <article className='flex flex-col space-y-2 xl:space-y-0'>
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
            <time dateTime='2023-08-05T00:00:00.000Z'>{date}</time>
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
            <div className='flex flex-wrap'>
              {tags.map((tag, index) => (
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
