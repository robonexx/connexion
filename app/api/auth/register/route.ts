import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";
/* import bcrypt from "bcrypt"; */
import { NextResponse, NextRequest } from "next/server";

connectToDB();

export async function POST(request: NextRequest) {

  const body = await request.json()
  try {
    const { fullname, name, email, password, startYear, role } = body

    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ name });

    if (userEmail) {
      return NextResponse.json(
        { error: "A user with this email already exists, please try with an other" },
        { status: 400 }
      );
    }
    if (userName) {
      return NextResponse.json(
        { error: "A user with this username already exists, please try with an other" },
        { status: 400 }
      );
    }

    const newUser = new User({
        name,
        fullname,
        startYear,
      email,
      password,
      role,
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