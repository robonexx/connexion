import { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { connectToDB } from '@/lib/db';
import User from '@/lib/models/User';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        name: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials?.password) {
          throw new Error('Missing credentials');
        }

        await connectToDB();

        const user = await User.findOne({ name: credentials.name });

        if (!user || !user.password) return null;

        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isMatch) {
          throw new Error('Invalid password');
        }
        console.log('user from mongodb: ', user)
        return user;
      },
    }),
  ],
  /* debug: process.env.NODE_ENV === 'development', */

  callbacks: {
    async jwt ({ token, user, session }) {
      console.log('jwt callback', {token, user, session})
      if (user) {
        return {
          ...token,
          id: user._id,
          role: user.role,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log('session callback: ', { session, token, user });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role,
        },
      }
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "/auth/login",
  },
};
