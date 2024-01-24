import React from 'react';
import UsersList from '../users/components/users-list/UsersList';
import { getTeachers } from '@/lib/data/userData';
import UserItem from '../users/components/user-item/UserItem';
import SearchDashboard from '../_components/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';
import { Button } from '@/components/button/Button';

interface StudentProps {
  searchParams: {
    page?: string;
  };
}

const Teacher = async ({ searchParams }: StudentProps) => {
  const page = searchParams?.page || '1';

  const { count, teachers } = await getTeachers(page);

  console.log(teachers);
  return (
    <div className='h-full bg-gray-800 relative'>
      <div className='pl-20 pt-20 flex '>
        <SearchDashboard placeholder='search for users' />
        <Button tone='alt' impact='bordered' shape='rounded'>
          Elever år 1
        </Button>
        <Button tone='alt' impact='bordered' shape='rounded'>
          Elever år 2
        </Button>
        <Button tone='alt' impact='bordered' shape='rounded'>
          Lärare
        </Button>
      </div>
      <UsersList>
        {teachers ? (
          teachers.map(
            ({ name, email, createdAt, role, image, _id }, index) => (
              <UserItem
                key={index}
                name={name}
                email={email}
                createdAt={createdAt}
                role={role}
                image={image}
                id={_id}
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

export default Teacher;
