'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Post from '../models/Post';
import { connectToDB } from '../db';

// ADD USER
export const addPost = async (formData: FormData) => {
  const { title, link, body } =
    Object.fromEntries(formData);
  
    let currImage = '';

    const file = formData.get('image') as File;
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    
    // Convert Uint8Array to base64
    currImage = Buffer.from(buffer).toString('base64');
    
    console.log('Image in base64:', currImage);

  try {
    connectToDB();

    // creating the new user
    const newPost = new Post({
        title, link, body, author: '65b0b34fc412ae434c5b37c2', image: currImage,
    });
    await newPost.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create post');
  }

  revalidatePath('/dashboard/posts');
  redirect('/dashboard/posts');
};

// DELETE USER (DELETE)
export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    console.log('Your post was deleted succcessfully');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete post!');
  }

  revalidatePath('/dashboard');
};
