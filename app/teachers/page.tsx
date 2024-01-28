"use client";
import { signOut, useSession } from "next-auth/react";


import React from 'react'

const Teachers = () => {
  const { data: session } = useSession();
  
  console.log('session from dashboard: ', session);

    if (session?.user.role !== "admin" && session?.user.role !== "teacher") {
      return <h1 className="text-5xl">Access Denied</h1>
 }
  return (
      <div>
          <h2>Teachers view</h2>
          {session && <span className="text-2xl tracking-normal py-10 font-semibold text-black">{session.user?.name}</span>}

<button onClick={()=> signOut()} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase">
  Logout
</button>
    </div>
  )
}

export default Teachers