import React from 'react';
import UsersList from './components/users-list/UsersList';
import AddUser from './add/page';
import { fetchUsers, getStudents, getStudentsByClass, getTeachers } from '@/lib/data/userData';
import UserItem from './components/user-item/UserItem';
import SearchDashboard from '../_components/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';
import { Button } from '@/components/button/Button';

interface UsersProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}


const Users = async ({ searchParams }: UsersProps) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || '1';

  const { count, users } = await fetchUsers(q, page);

  /* console.log(users); */
  return (
    <div className='h-full bg-transaparent relative'>
     
      <div className='pl-20 pt-20 flex '>
        <SearchDashboard placeholder='search for users' />
        <Button tone='alt' impact='bordered' shape='rounded' className='text-white font-thin'>Alla Elever</Button>
        <Button tone='alt' impact='bordered' shape='rounded' className='text-white font-thin'>Elever år 1</Button>
        <Button tone='alt' impact='bordered' shape='rounded' className='text-white font-thin'>Elever år 2</Button>
        <Button tone='alt' impact='bordered' shape='rounded' className='text-white font-thin'>Lärare</Button>
      </div>
      <UsersList>
        {users ? (
          users.map(
            ({ name, email, createdAt, role, image, _id }, index) => (
              <UserItem
                key={index}
                name={name}
                email={email}
                createdAt={createdAt}
                role={role}
                image={image}
                id={_id.toString()}
              />
            ),
          )
        ) : (
          <div>No users found</div>
        )}
      </UsersList>
      {/*  <AddUser /> */}
      <div>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Users;
