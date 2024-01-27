
import {AuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";

export const authOptions: AuthOptions = {
    providers: [
      Credentials({
        name: "credentials",
        credentials: {
          name: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.name || !credentials?.password) {
            throw new Error("Missing credentials");
          }
  
          await connectToDB()
  
          const user = await User.findOne({ name: credentials.name });
  
          if (!user || !user.password) return null
  
          const isMatch = await bcrypt.compare(credentials.password, user.password);
  
          if (!isMatch) {
            
            throw new Error("Invalid password");
           
          }  
          return user
        },
      }),
    ],
  
    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt"
  },
  
    /* debug: process.env.NODE_ENV === 'development', */
  
      callbacks: {
          jwt: async ({ token, user }) => {
              if (user) {
                  token.role = user.role;
                  token.startYear = user.startYear;
              }
              return token;
          },
      async session({ session }) {
        const mongodbUser = await User.findOne({ name: session.user.name }).select({ password: 0, email: 0 })
        session.user.id = mongodbUser._id.toString()
  
        session.user = mongodbUser
  
        return session
      }
    }
  };