'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import User from '../models/User';
/* import bcrypt from 'bcrypt'; */
import { connectToDB } from '../db';

// could use zod like many seems to do to check types


// ADD USER
export const addUser = async (prevState: any, formData: FormData) => {

  if (formData === null || formData === undefined || !formData.entries) {
    return { error: 'no data in form submit' };
  }

  const requiredFields = ['fullname', 'name', 'email', 'password', 'role'];

  for (const field of requiredFields) {
    if (!formData.has(field)) {
      return { error: `Missing required field: ${field}` };
    }
  }

  const { fullname, name, email, password, role, startYear, desc } =
    Object.fromEntries(formData);
  // if admin adds student no need for email confirmation

  try {
    connectToDB();

    // extracting the password as a string from the formdata
    /* const extractedPassword: string = password as string; */

    // adding the hashed password
   /*  const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(extractedPassword, salt); */

    // creating the new user
    const newUser = new User({
      fullname,
      name,
      email,
      password,
      role,
      startYear,
      desc,
    });
    await newUser.save();
    revalidatePath("/dashboard/users");
    return { message: 'User added: ', name }
   
  } catch (err) {
    console.log(err);
    return { error: "Failed to add user!" };
  }
 
};

// DELETE USER (DELETE)
export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    console.log('User with the id:', id + ' was deleted succcessfully');
    revalidatePath('/dashboard/users');
    return { message: "deleted user with the id: ", id };
  } catch (err) {
    console.log(err);
    return { message: "Failed to delete user!" };
  }
};
