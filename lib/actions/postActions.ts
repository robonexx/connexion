'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Post from '../models/Post';
import { connectToDB } from '../db';

// ADD POST
export const addPost = async (prevState: any, formData: FormData) => {
  const { title, link, body, id } =
    Object.fromEntries(formData);
  
    let currImage = '';

  const file: File | null = formData.get('image') as unknown as File;
  if (!file) {
    return {message: 'no image added'}
  }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
  // With the file data in buffer, we can manipulate it
  // for this we will write it to the filesystem in a new location
    currImage = Buffer.from(buffer).toString('base64');
    
   /*  console.log('Image in base64:', currImage); */

  try {
    connectToDB();

    // creating the new user
    const newPost = new Post({
        title, link, body, author: id, image: currImage,
    });

    await newPost.save();
    revalidatePath('/posts');
    return { message: 'Updated post: ', newPost };   
    
  } catch (err) {
    console.log(err);
    return { error: "Failed to create post!" };
  }
 
};

// UPDATE POST
type UpdatePostFields = {
  title?: string;
  link?: string;
  body?: string;
  image?: string;
};

export const updatePost = async (formData: FormData) => {
  const { title, link, body, id } = Object.fromEntries(formData);

  let currImage = '';

  // Check if a new image is provided
  const newImageFile = formData.get('image') as File;
  if (newImageFile) {
    const arrayBuffer = await newImageFile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    // Convert Uint8Array to base64
    currImage = Buffer.from(buffer).toString('base64');
  }

  try {
   await connectToDB();

    const updatedFields: UpdatePostFields = {
      title: title as any,
      link: link as any,
      body: body as any,
      image: currImage,
    };

    Object.keys(updatedFields).forEach((key) => {
      if (
        updatedFields[key as keyof UpdatePostFields] === '' ||
        updatedFields[key as keyof UpdatePostFields] === undefined
      ) {
        delete updatedFields[key as keyof UpdatePostFields];
      }
    });

    if (Object.keys(updatedFields).length === 0) {
      // No fields to update, return early
      return { message: 'No fields to update' };
    }

    // Update the post
    await Post.findByIdAndUpdate(id, updatedFields);
    revalidatePath("/posts");
    redirect(`/posts/${id}`) // Navigate to the new post page
    return { message: 'Post updated' };

  } catch (err) {
    console.log(err);
    return { error: "Failed to update post!" };
  }
};


// DELETE USER (DELETE)
export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  console.log('post to delete: ', id)

  try {
    await connectToDB();
    await Post.findByIdAndDelete(id);
    console.log('Your post was deleted succcessfully');
    revalidatePath('/posts');    
    redirect(`/posts`)
    return { message: `Deleted post with id: ${id}` }
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete post!');
  }

 
};
