import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {

  const body = await request.json()
  try {
    const { fullname, username, email, password, startYear } = body

    if (!username || !email || !password) {
      return new NextResponse("missing name, email, password", {status: 400})
    }

    const userEmail = await User.findOne({ email });
    const userUsername = await User.findOne({ username });

    if (userEmail) {
      return NextResponse.json(
        { error: "A user with this email already exists, please try with an other" },
        { status: 400 }
      );
    }
    if (userUsername) {
      return NextResponse.json(
        { error: "A user with this username already exists, please try with an other" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        username,
        fullname,
        startYear,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('new user saved', savedUser)
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}