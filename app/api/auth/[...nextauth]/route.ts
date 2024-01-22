import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import UserModel from "@/lib/models/User";
import { connectToDB } from '@/lib/db';

export const authOptions: NextAuthOptions = {

    session: {
        strategy: 'jwt',
    },
    
    providers: [
        CredentialsProvider({
          type: 'credentials',
          credentials: {
            username: {
              label: 'Username',
              type: 'text',
              placeholder: 'Your user name',
            },
            password: {
              label: 'Password',
              type: 'password',
              placeholder: 'Your password',
            },
          },
          async authorize(credentials, req) {
            try {
              const { username, password } = credentials as {
                username: string;
                password: string;
              };
          
          
              console.log('credentials: ', credentials);
          
              await connectToDB();
              const user = await UserModel.findOne({ username });
          
              if (!user) {
                // Returning an object with an error property to indicate authentication failure
                return { error: 'No user found' };
              } else {
                console.log('user from authorize: ', user);
              }                    
          
             const passwordIsMatch = await user.comparePassword(password)
              
              if (!passwordIsMatch) {
                // Returning an object with an error property to indicate authentication failure
                return { error: 'password is not matching' };
              }         
          
              // Returning the user object on successful authentication
              console.log('user from authorize after compare: ', user);
              return {
                name: user.username,
                email: user.email,
                role: user.role,
                id: user._id
              }
            } catch (error) {
              console.error('Error:', error);
              // Returning an object with an error property to indicate authentication failure
              return { error: 'Internal server error' };
            }
          }
        }),
      ],
    
     
    
      callbacks: {
        async jwt(params: any) {
          if (params.user?.user.role) {
            params.token.email = params.user.email;
              params.token.name = params.user.username;
              params.token.role = params.user.role;
              params.token.id = params.user._id;
          }
          return params.token
        },
        async session({ session, token }) {
          if (session.user) {
            (session.user as { id: string}).id = token.id as string
            (session.user as { role: string}).role = token.role as string
          }
          return session;
        }
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const authHandler = NextAuth(authOptions)

export {authHandler as GET, authHandler as POST}