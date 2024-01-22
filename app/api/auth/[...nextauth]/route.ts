import { connectToDB } from '@/lib/db';
import UserModel from '@/lib/models/User';
import { NextResponse } from 'next/server';

interface NewUserRequest {
  fullname?: string;
  username: string;
  email: string;
  password: string;
  role?: string;
  startYear?: number;
}

interface NewUserResponse {
  fullname?: string;
  username: string;
  email: string;
  role?: string;
  startYear?: number;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  await connectToDB();

  const userExist = await UserModel.findOne({
    email: body.email,
    username: body.username,
  });
  if (userExist)
    return NextResponse.json(
      { error: 'Username or email already in use, please try an other' },
      { status: 422 }
        );
    
    const user = await UserModel.create({ ...body });
    
    return NextResponse.json({
        user: {
            email: user.email,
            name: user.username,
            role: 

        }
    })
};
