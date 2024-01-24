/* import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  phone: string;
  info: string;
    role: string;
  isActive: boolean;
  img?: string;
} */

const SingleUserPage = () => {
 /*  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User | null>(null); */

  /* useEffect(() => {
   
    const fetchUserData = async () => {
      try {
        const fetchedUser = await fetchUser(id);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]); */

 /*  const updateUser = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement your update logic using the user data
  }; */

  /* if (!user) {
    return <div>Loading...</div>;
  } */

  return (
    <div className='flex gap-12 mt-5'>
      <div className='flex-1 p-5 rounded-sm font-semibold h-max-fit'>
        {/* <div className='relative w-full h-64 rounded-sm overflow-hidden mb-5'>
          <Image src={user.img || '/images/rob12.png'} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className='flex p-5 w-full max-w-xs'>
        <form onSubmit={updateUser} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <input type="hidden" name="id" value={user.id} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Info</label>
          <textarea name="info" placeholder={user.info}></textarea>
          <label>Teacher or Student</label>
          <select name="role" id="role">
          <option value={'Teacher'}>Teacher</option>
            <option value={'Student'}>Student</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive.toString()}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button type="submit">Update</button>
        </form> */}
      </div>
    </div>
  );
};

export default SingleUserPage;
