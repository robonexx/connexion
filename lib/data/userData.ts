import User from "../models/User";
import ClassModel from "../models/Class";
import { connectToDB } from "../db";

// GET USERS
export const fetchUsers = async (q: string, page:string) => {
  const regex = new RegExp(q, "i");
  
  const LIMIT_ITEMS = 5
  try {
    connectToDB();
    const count = await User.countDocuments();
    const users = await User.find({
      name: { $regex: regex },
      role: { $ne: 'admin' } // Exclude users with the role 'admin'
    }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));
    
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users!');
  }
}

// GET SINGLE USER BY ID
export const fetchUser = async (id: string) => {
    /* console.log(id); */
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
};

// GET STUDENTS BY CLASS
export const getStudentsByClass = async (classId: string, page:string) => {
  const LIMIT_ITEMS = 5
    try {
      connectToDB()
      // similar to what I leanred from Staffan Enberg getting all posts but now use it to get all users
      const classObj = await ClassModel.findOne({ courseName: classId });
    if (!classObj) {
      throw new Error('Class not found');
    }
      const count = await User.countDocuments({
      'classes.classId': classObj.courseName,
      role: 'Student',
    })
    // Get students in the class
    const students = await User.find({
      'classes.classId': classObj.courseName,
      role: 'Student',
    }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));
       /*  const students = await User.find({ courseName: {classId } }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1)) */
      return { count, students };
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch students!')
    }
}

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


// GET ALL TEACHERS
export const getTeachers = async (page:string) => {
  const LIMIT_ITEMS = 5
    try {
      connectToDB()
      // similar to what I leanred from Staffan Enberg getting all posts but now use it to get all users
      const count = await User.countDocuments({
      role: 'teacher',
    })
    const teachers = await User.find({
      role: 'teacher',
    }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));
      return { count, teachers };
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch teachers!')
    }
}

export const getStudentsYear1 = async (page: string) => {
  const LIMIT_ITEMS = 5;
  try {
    connectToDB();

    const students = await User.find({
      role: 'student',
      isInYear2: 'false'
    }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));

    const count = students.length;

    return { count, students };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch students!');
  }
};

export const getStudentsYear2 = async ( page: string) => {
  const LIMIT_ITEMS = 5;
  try {
    connectToDB();

    const students = await User.find({
      role: 'student',
      isInYear2: 'true'
    }).limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1));

    const count = students.length;

    return { count, students };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch students!');
  }
};