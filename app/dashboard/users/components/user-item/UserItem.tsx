import Avatar from '@/components/avatar/Avatar';
import CustomLink from '@/components/custom-link/CustomLink';
import React from 'react';
import { VscTrash } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { deleteUser } from '@/lib/actions/userActions';
import { Button } from '@/components/button/Button';

interface UserItemProps {
  name: string;
  email: string;
  createdAt: Date;
  role: string;
  image?: string;
  id: string;
}

const UserItem = ({
  name,
  email,
  createdAt,
  role,
  image,
  id,
}: UserItemProps) => {
  // converting the Id to string to not have warnings
  //Warning: Only plain objects can be passed to Client Components from Server Components. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.

  const userId = id.toString();
  console.log('user id:', userId);

  const formattedDate = createdAt?.toString().slice(4, 16);
  return (
    <tr>
      <td
        scope='row'
        className='flex items-center gap-4 px-6 py-4 font-medium text-gray-white whitespace-nowrap dark:text-white hover:bg-gray-400 cursor-pointer'
      >
        <div>
          {image ? <Avatar image={image} width={32} height={32} /> : <CgProfile />}
        </div>
        <span className='text-white'> {name}</span>
      </td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{email}</td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>
        {formattedDate}
      </td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{role}</td>
      <td className='px-6 py-4 cursor-pointer border-b-2 grid place-content-center'>
        <CustomLink href='' title='VIEW' className='text-white' />
      </td>
      <td className='px-6 py-4 cursor-pointer'>
        <form action={deleteUser}>
          <input type='hidden' name='id' value={userId && userId} />
          <Button tone='danger' size='md'>
            <VscTrash className='text-black' />
          </Button>
        </form>
      </td>
    </tr>
  );
};

export default UserItem;

/* 

for use on the attendace lists

 <tr className='bg-white dark:bg-gray-800'>
      <th
        scope='row'
        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:bg-gray-400 cursor-pointer'
      >
        {name}
      </th>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>
        {classYear}
      </td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{a}</td>
      <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'>{b}</td>
      {/* This will be used in the attedance lists
       <td className='px-6 py-4 hover:bg-zinc-800 cursor-pointer'> <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" /></td>
     </tr>

*/
