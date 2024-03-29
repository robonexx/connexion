import React from 'react';
import UsersList from '../users/components/users-list/UsersList';
import SearchDashboard from '../_components/search-dashboard/SearchDashboard';
import Pagination from '@/components/pagination/Pagination';
import { Button } from '@/components/button/Button';
import UserItem from '../users/components/user-item/UserItem';
import { getStudentStatus, StudentStatus } from '@/utils/getStudentStatus';
import { getStudents } from '@/lib/data/studentsLoader';

interface StudentProps {
  /*  classId?: string; */
  searchParams: {
    page?: string;
  };
}

const Year2 = async ({ searchParams }: StudentProps) => {
  /*   const classId = 'DC2023'; */
  const page = searchParams?.page || '1';

  const { count, students } = await getStudents(page);

  const filteredStudents = students
    ? students.filter((student) => {
        const startYear = student.startYear;
        const status = getStudentStatus(startYear);
        return status === StudentStatus.Year2;
      })
    : [];

  console.log(students);
  return (
    <div className='h-full relative'>
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
        {filteredStudents.length > 0 ? (
          filteredStudents.map(
            ({ name, email, createdAt, role, image, id }, index) => (
              <UserItem
                key={index}
                name={name}
                email={email}
                createdAt={createdAt}
                role={role}
                image={image}
                id={id}
              />
            )
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

export default Year2;
