import User, {IUser} from "../models/User";
import ClassModel from "../models/Class";
import { connectToDB } from "../db";



// GET ALL STUDENTS
export const getStudents = async (page:string) => {
    const LIMIT_ITEMS = 5
      try {
        connectToDB()
        // similar to what I leanred from Staffan Enberg getting all posts but now use it to get all users
        const count = await User.countDocuments({
        role: 'student',
      })
      // Get students in the class
      const students = await User.find({
        role: 'student',
      }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));
         /*  const students = await User.find({ courseName: {classId } }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1)) */
        return { count, students };
      } catch (err) {
          console.log(err)
          throw new Error('Failed to fetch students!')
      }
  }


  export const getStudentsYear1 = async (page: string) => {
    const LIMIT_ITEMS = 5;
    try {
      connectToDB();
  
      const allUsers = await User.find({ role: 'student' }).lean() as IUser[];
  
      const students = allUsers
        .filter((user) => !isUserInYear2(user))
        .slice(LIMIT_ITEMS * (parseInt(page) - 1), LIMIT_ITEMS * parseInt(page));
  
      const count = students.length;
  
      return { count, students };
    } catch (err) {
      console.log(err);
      throw new Error('Failed to fetch students!');
    }
  };
  
  export const getStudentsYear2 = async (page: string) => {
    const LIMIT_ITEMS = 5;
    try {
      connectToDB();
  
      const allUsers = await User.find({ role: 'student' }).lean() as IUser[];
  
      const students = allUsers
        .filter((user) => isUserInYear2(user))
        .slice(LIMIT_ITEMS * (parseInt(page) - 1), LIMIT_ITEMS * parseInt(page));
  
      const count = students.length;
  
      return { count, students };
    } catch (err) {
      console.log(err);
      throw new Error('Failed to fetch students!');
    }
  };
  
  // Helper function to check if a user is in Year 2
  const isUserInYear2 = (user: IUser): boolean => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // January is 0
    const isInYear2 = currentMonth >= 8;
  
    const startYear: number | undefined = user.startYear;
  
    return (startYear !== undefined) ? currentYear - startYear === (isInYear2 ? 1 : 0) : false;
  };