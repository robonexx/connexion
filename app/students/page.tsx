"use client";
import { signOut, useSession } from "next-auth/react";


import React from 'react'

const Students = () => {
    const {data:session} = useSession();
  return (
      <div>
          <h2>Students page</h2>
          {session && <span className="text-2xl tracking-normal py-10 font-semibold text-black">{session.user?.name}</span>}

<button onClick={()=> signOut()} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase">
  Logout
</button>
    </div>
  )
}

export default Students;