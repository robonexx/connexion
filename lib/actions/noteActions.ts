'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import Note from '../models/Note';
import { connectToDB } from '../db';

// ADD USER
export const addNote = async (formData: FormData) => {
  const { title, link, body } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    // creating the new user
    const newNote = new Note({
        title, link, body
    });
    await newNote.save();
  } catch (err) {
    console.log(err);
    throw new Error('Failed to create note');
  }

  revalidatePath('/dashboard/users');
  redirect('/my-notes');
};

// DELETE USER (DELETE)
export const deleteNote = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Note.findByIdAndDelete(id);
    console.log('Your note was deleted succcessfully');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete note!');
  }

  revalidatePath('/dashboard/products');
};
