import Link from 'next/link';
import React from 'react';

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps) => {
  return (
    <Link
      href={`/tags/${tag.toLowerCase()}`}
      className='group mr-3 p-1 rounded-sm text-sm font-medium uppercase text-primary-500 hover:text-white hover:bg-zinc-800 dark:hover:text-primary-400 font-alt transition-all duration-300'
    >
      {tag}
      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#ff4040] opacity-50'></span>
    </Link>
  );
};

export default Tag;
