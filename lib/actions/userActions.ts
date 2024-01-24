'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import User from '../models/User';
/* import bcrypt from 'bcrypt'; */
import { connectToDB } from '../db';

// ADD USER
export const addUser = async (formData: FormData) => {
  const { fullname, name, email, password, role, startYear, desc } =
    Object.fromEntries(formData);
  // if admin adds student no need for email confirmation

  try {
    connectToDB();

    // extracting the password as a string from the formdata
    const extractedPassword: string = password as string;

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
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create user');
  }

  revalidatePath('/dashboard/users');
  redirect('/dashboard/users');
};

// DELETE USER (DELETE)
export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    console.log('User with the id:', id + ' was deleted succcessfully');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete user!');
  }

  revalidatePath('/dashboard/products');
};
