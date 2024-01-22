import { Document, Schema, model, MongooseError, Model} from 'mongoose';
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  image?: string;
    role: 'admin' | 'teacher' | 'student';
    desc?: string;
  fullname?: string;
  createdAt: Date;
  updatedAt: Date;
  classes?: {
    classId: string;
    startYear: number;
  }[]; 
  startYear?: number;
  /* subjects?: Schema.Types.ObjectId[]; */
  isUserInYear2(): boolean;
}

interface Methods {
  comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser, {}, Methods>(
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
        min: 4,
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
    },
    image: {
      type: String,
      default: '',
      required: false,
    },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'student'],
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
          required: false,
        },
        startYear: {
          type: Number,
          required: false,
        },
      },
    ],
    startYear: {
      type: Number,
      required: false,
    },
    /* subjects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ], */
  },
  { timestamps: true }
);

// adding the hassed password transformation here is more secure in production
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
  } catch (error) {
      if (error instanceof MongooseError) next(error);
      else throw error;
  }
})

// compare passwords
UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
 
}

// Define the method on the schema's methods property
UserSchema.methods.isUserInYear2 = function () {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // January is 0
  const isInYear2 = currentMonth >= 8;

  const startYear = this.startYear ?? 0;

  return currentYear - startYear === (isInYear2 ? 1 : 0);
};

const UserModel = mongoose.models.User || model<IUser>('User', UserSchema);

export default UserModel as Model<IUser, {}, Methods>;
export type { IUser };

