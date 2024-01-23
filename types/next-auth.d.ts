import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string
      id: string
      role: 'admin' | 'student' | 'teacher'
      username: string
      password: string
    } & DefaultSession['user']
  }

  export interface User extends DefaultUser {
    _id?: string
    role?: string
    username: string
      password: string
  }
}