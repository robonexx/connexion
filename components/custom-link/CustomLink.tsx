import Link from 'next/link';
import cn from 'clsx';
import { ComponentProps } from 'react';

// styling this link later, this is just to hurry up the process

const CustomLink = (props: ComponentProps<typeof Link>) => {
  return (
    <Link
      {...props}
      className={cn(
        props.className,
        `group relative hover:text-[#ffffff] text-[#dfdfdf] border-transparent font-semibold text-[15px] px-4 py-2 transition-all duration-300 ease-in-out block min-w-fit drop-shadow-md`,
      )}
      href={props.href}
    >
      <span className='flex items-center min-w-full'>
        {props.children}
        <span className='mx-2 text-base font-normal'>{props.title}</span>
      </span>

      <span className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] my-1 bg-[#ececec]'></span>
    </Link>
  );
};

export default CustomLink;

/* 
for a border rounded arounde the link
hover:border-[#fff] border-[1px] rounded-full
*/
