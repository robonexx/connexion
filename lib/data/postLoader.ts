import Post from "../models/Post";
import User from "../models/User";
import { connectToDB } from "../db";

// GET USERS
export const fetchPosts = async (q: string, page:string) => {
  const regex = new RegExp(q, "i");
  
  const LIMIT_ITEMS = 5
    try {
      connectToDB()
      // similar to what I leanred from Staffan Enberg getting all posts but now use it to get all users
      const count = await Post.countDocuments()
        const posts = await Post.find({ title: { $regex: regex } },  '-comments').limit(LIMIT_ITEMS).skip(LIMIT_ITEMS * (parseInt(page) - 1)).sort({ createdAt: 'descending' })
        .populate('author')
        .exec();
      return { count, posts };
    } catch (err) {
        console.log(err)
        throw new Error('Failed to fetch posts!')
    }
}

export const fetchSinglePost = async (id: string) => {
  console.log(id);
  try {
    connectToDB();
    const post = await Post.findById(id);
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};