import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()
  return (
    <div className='flex justify-between px-4 pt-4 font-semibold'>
        <div className='flex items-center'>
          {session ? <button className='flex items-center p-1 rounded-lg justify-center bg-purple-600 border border-none text-white px-3' onClick={() => signOut()}>Sign Out</button> :  <h2>Dashboard</h2>  }
        </div>
         {session ? <h2>Welcome Back, Elijah</h2> : <h2>Kindly Sign In</h2>}
    </div>
     
  )
}

export default Header