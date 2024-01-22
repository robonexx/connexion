import { Document, Schema, Types, Model, model } from 'mongoose';

interface INote extends Document {
  title: string;
  link?: string;
  body?: string;
  image?: string;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}


const NotesSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      trim: true,
    },
    body: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = model<INote>('Notes', NotesSchema);

export default Note;

export type { INote };