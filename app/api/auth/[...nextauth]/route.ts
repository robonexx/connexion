import NextAuth from "next-auth";
import { authOptions } from "./options";
/* import Credentials from "next-auth/providers/credentials";

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

        if (!user || !user?.password) {
          throw new Error("Invalid email or password");
          }

          async function PasswordsMatch(password1: string, password2: string) {
            return password1 === password2;
        }

        const isMatch = await PasswordsMatch(credentials.password, user.password);

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
        jwt: async ({ token, user }) => {
            if (user) {
                // Add user-specific claims to the token
                token.role = user.role;
                token.startYear = user.startYear;
            }
    
            console.log('token from jwt', token);
            return token;
        },
    async session({ session }) {
      const mongodbUser = await User.findOne({ name: session.user.name }).select("-password")
      session.user.id = mongodbUser._id.toString()

      session.user = mongodbUser

      console.log('session data: ',session.user)

      return session
    }
  }
}; */

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };