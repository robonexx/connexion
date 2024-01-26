import { updateUser } from '@/lib/actions/userActions';
import { fetchUser } from '@/lib/data/userData';
import Avatar from '@/components/avatar/Avatar';
import { CgProfile } from 'react-icons/cg';

const SingleUserPage = async ({ params }: { params: any }) => {
  const { id } = params;

  const user = await fetchUser(id);



  return (
    <div className='flex flex-col md:flex-row gap: 12 lg:gap-16 mt-5'>
      <div className='flex flex-col items-center p-5 rounded-sm font-semibold h-max-fit'>
        <div className='relative w-fit h-fit rounded-sm overflow-hidden mb-5'>
          {user.image ? (
            <Avatar image={user.image} width={112} height={112} />
          ) : (
            <CgProfile className='w-16 h-16' />
          )}
        </div>
        <h2 className='font-semibold text-2xl'>
          {user.fullname.toUpperCase()}
        </h2>
      </div>
      <div className='flex p-5 w-full max-w-xs m-auto'>
        <form action={updateUser} className='mb-5 w-full'>
          <h2 className='text-center my-4'>USER INFO - UPDATE USER</h2>
          <input type="hidden" name="id" value={user.id}/>
          <div className='mb-5'>
            <label
              htmlFor='fullname'
              className='block text-sm font-medium text-white'
            >
              Fullname
            </label>
            <input
              type='text'
              placeholder={user.fullname}
              name='fullname'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-white'
            >
              Username
            </label>
            <input
              type='text'
              placeholder={user.name}
              name='name'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-white'
            >
              Email
            </label>
            <input
              type='email'
              placeholder={user.email}
              name='email'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-white'
            >
              Password
            </label>
            <input
              type='password'
              placeholder={user.password}
              name='password'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='role'
              className='block text-sm font-medium text-white'
            >
              Role{' '}
              <span className='font-thin text-xs font-mono'>
                (current role: {user.role})
              </span>
            </label>
            <select
              id='role'
              name='role'
              className='mt-1 p-2 w-full border rounded-md bg-transparent text-xs font-thin'
            >
              <option
                value='teacher'
                className='text-gray-600 text-xs bg-transparent rounded-none'
              >
                Teacher
              </option>
              <option
                value='student'
                className='text-gray-600 text-xs bg-transparent'
              >
                Student
              </option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='desc'
              className='block text-sm font-medium text-white'
            >
              Start år{' '}
              <span className='font-thin text-xs font-mono'>
                (exempel 2022)
              </span>
            </label>
            <input
              type='number'
              placeholder={user.startYear ? user.startYear : 'no start year'}
              name='startYear'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <div className='mb-5'>
            <label
              htmlFor='desc'
              className='block text-sm font-medium text-white'
            >
              Beskrining{' '}
              <span className='font-thin text-xs font-mono'>(optional)</span>
            </label>
            <textarea
              rows={5}
              placeholder={user.desc ? user.desc : 'no description yet'}
              name='desc'
              className='mt-1 p-2 w-full border rounded-md bg-transparent placeholder:text-xs'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Upate
          </button>
          {/*  {state?.error && (
        <div className='text-white bg-zinc-500 p-3 rounded-md'>
          {state.error}
        </div>
      )} */}
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
