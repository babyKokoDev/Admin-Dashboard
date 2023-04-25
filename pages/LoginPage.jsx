import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {FaGithub, FaGoogle} from 'react-icons/fa'
import Header from '@/components/Header'

const LoginPage = () => {
  return (
    <>
    <Header />
    <div className='pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4'>
    <h2 className='text-3xl font-bold text-center'>Login</h2>
    <p className='py-4 text-center'>Choose the account you want to sign in with</p>
    <button className='flex items-center justify-center p-3 bg-gray-600 border border-gray-600 my-2 text-white' onClick={() => signIn()}><FaGithub className="mr-2" />Sign in with <span className='font-bold pl-1'>Github</span></button>
    <button className='flex items-center justify-center p-3 bg-orange-600 border border-orange-600 my-2 text-white' onClick={() => signIn()}><FaGoogle className="mr-2" />Sign in with <span className='font-bold pl-1'>Google</span></button>
    </div>
    </>
  )
}

export default LoginPage