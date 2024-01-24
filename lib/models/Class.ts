import { Document, Schema, model, Types } from 'mongoose';
import mongoose from "mongoose";

interface IClass extends Document {
  courseName: string;
  courseId: string;
  students: Types.ObjectId[];
  teachers: Types.ObjectId[];
  subjects: Types.ObjectId[];
}

const ClassSchema = new Schema<IClass>(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
      unique: true,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    teachers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
      },
    ],
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
  },
  { timestamps: true }
);

const ClassModel = mongoose.models.Class || model<IClass>('Class', ClassSchema);

export default ClassModel;
export type { IClass };
