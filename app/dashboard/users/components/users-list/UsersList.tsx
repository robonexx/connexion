import { ReactNode } from 'react';
import UserItem from '../user-item/UserItem';

interface UserListProps {
  children: ReactNode;
}

const UsersList = ({ children }: UserListProps) => {
  return (
    <div className='relative overflow-x-auto h-fit pb-20 pt-4'>
      <table className='w-full text-sm text-left rtl:text-righttext-gray-400'>
        <thead className='text-xs uppercase bg-transparent text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>
            <th scope='col' className='px-6 py-3'>
              Created at
            </th>
            <th scope='col' className='px-6 py-3'>
              Role
            </th>
            <th scope='col' className='px-6 py-3'>
              View
            </th>
            <th scope='col' className='px-6 py-3'>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {mockData.map(({ name, email, createdAt, role, action, profileImg }) => (
            <UserItem
              key={name}
              name={name}
              email={email}
              createdAt={createdAt}
                  action={action}
              role={role}
              profileImg={profileImg}
            />
          ))} */}
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
