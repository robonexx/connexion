import React from 'react';
import UsersList from '../users/components/users-list/UsersList';
import UserItem from '../users/components/user-item/UserItem';
import SearchDashboard from '../_components/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';
import { Button } from '@/components/button/Button';
import { getStudents } from '@/lib/data/studentsLoader';

interface StudentProps {
  searchParams: {
    page?: string;
  };
}

const Students = async ({ searchParams }: StudentProps) => {
  const page = searchParams?.page || '1';

  const { count, students } = await getStudents(page);

  console.log(students);
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
        {students ? (
          students.map(
            ({ username, email, createdAt, role, image, _id }, index) => (
              <UserItem
                key={index}
                username={username}
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

export default Students;
