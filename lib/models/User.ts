import { Document, Schema, model, MongooseError, Model} from 'mongoose';
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  image?: string;
    role: 'admin' | 'teacher' | 'student';
    desc: string;
  fullname?: string;
  createdAt: Date;
  updatedAt: Date;
  classes?: {
    classId: string;
    startYear: number;
  }[]; 
  startYear?: number;
  subjects?: Schema.Types.ObjectId[];
  isUserInYear2(): boolean;
}

const UserSchema = new Schema<IUser>(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
        trim: true,
        min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    image: {
      type: String,
      default: '',
      required: false,
    },
    role: {
      type: String,
      default: 'student',
    },
    desc: {
      type: String,
      required: false,
    },
    classes: [
      {
        classId: {
          type: String,
          required: true,
        },
        startYear: {
          type: Number,
          required: true,
        },
      },
    ],
    startYear: {
      type: Number,
      required: false,
    },
    subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
  },
  { timestamps: true }
);

// adding the hassed password transformation here is more secure in production
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
      this.password = await bcrypt.hash(this.password, 10);
      next();
  } catch (error) {
      if (error instanceof MongooseError) next(error);
      else throw error;
  }
})

// Define the method on the schema's methods property
UserSchema.methods.isUserInYear2 = function () {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // January is 0
  const isInYear2 = currentMonth >= 8;

  const startYear = this.startYear ?? 0;

  return currentYear - startYear === (isInYear2 ? 1 : 0);
};

const User = mongoose.models.User || model<IUser>('User', UserSchema);

export default User;
export type { IUser };
  
  





