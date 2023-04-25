import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'

const Header = () => {
  const { data: session } = useSession()
  return (
    <div className='flex justify-between px-4 pt-4 font-semibold'>
        <div className='flex items-center'>
          {session ? <button className='flex items-center p-1 rounded-lg justify-center bg-purple-600 border border-none text-white px-3' onClick={() => signOut()}>Sign Out</button> :  <h2>Dashboard</h2>  }
        </div>
         {session ? <div className='flex items-center'>
          <h2>Welcome Back, {session.user.name}</h2>
          <Image src={session.user.image} width={40} height={40} className='rounded-lg hidden sm:flex ms-3' />
         </div> 
         : 
        <h2>Kindly Sign In</h2>}
    </div>
     
  )
}

export default Header