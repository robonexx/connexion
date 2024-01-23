import NextAuth, {AuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

import { connectToDB } from "@/lib/db";
import User from "@/lib/models/User";
import { signIn } from "next-auth/react";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await connectToDB()

        const user = await User.findOne({ username: credentials.username });

        if (!user || !user?.password) {
          throw new Error("Invalid email or password");
        }

        const isMatch = await compare(credentials.password, user.password);

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

  debug: process.env.NODE_ENV === 'development',

  callbacks: {
    async session({ session }) {
      const mongodbUser = await User.findOne({ username: session.user.username })
      session.user.id = mongodbUser._id.toString()

      session.user = { ...session.user, ...mongodbUser._doc }

      return session
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };