import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/options'

const Home = () => {
  const session = getServerSession(authOptions)
  console.log(session)
  return (
    <div>Home page where everyone that is logged in comes in</div>
  )
}

export default Home