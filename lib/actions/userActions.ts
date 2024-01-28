'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import User from '../models/User';
import bcrypt from 'bcrypt';
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
    const extractedPassword: string = password as string;

    const hashedPassword = await bcrypt.hash(extractedPassword, 10);

    // creating the new user
    const newUser = new User({
      fullname,
      name,
      email,
      password: hashedPassword,
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
  } finally {
    redirect('/dashboard/users')
  }

};


// UPDATE
type UpdateFields = {
  fullname?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  startYear?: string;
  desc?: string;
};

export const updateUser = async (formData: FormData) => {
  const { id, fullname, name, email, password, role, startYear, desc } =
    Object.fromEntries(formData);
  
  console.log('the id from update params: ', id + 'for user: ', name)

  try {
    connectToDB();

    // will change this, works for now
    const updatedFields: UpdateFields = {
      fullname: fullname as any,
      name: name as any,
      email: email as any,
      password: password as any,
      role: role as any,
      startYear: startYear as any,
      desc: desc as any,
    };

    Object.keys(updatedFields).forEach((key) => {
      if (updatedFields[key as keyof UpdateFields] === '' || updatedFields[key as keyof UpdateFields] === undefined) {
        delete updatedFields[key as keyof UpdateFields];
      }
    });

    
    if (Object.keys(updatedFields).length === 0) {
      // No fields to update, return early
      return { message: 'No fields to update' };
    }

    // Update the user
    await User.findByIdAndUpdate(id, updatedFields);
    revalidatePath("/dashboard/users");
    redirect('/dashboard/users')
    return { message: 'Updated added: ', name };   
  } catch (err) {
    console.log(err);
    return { error: "Failed to update user!" };
  }
};


// DELETE USER (DELETE)
export const deleteUser = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
    console.log('User with the id:', id + ' was deleted succcessfully');
    revalidatePath("/dashboard/users");
    redirect('/dashboard/users')
    return { message: "deleted user with the id: ", id };
  } catch (err) {
    console.log(err);
    return { message: "Failed to delete user!" };
  }
};
