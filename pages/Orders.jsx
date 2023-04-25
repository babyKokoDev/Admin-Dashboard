import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { data } from '@/data/data'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginPage from './LoginPage'
import Image from 'next/image'

const Orders = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between px-4 pt-4 font-semibold items-center'>
          <h2>Orders</h2>
          <div className='flex items-center'>
          <h2>Welcome Back, {session.user.name}</h2>
          <Image src={session.user.image} width={40} height={40} className='rounded-lg hidden sm:flex ms-3' />
         </div> 
        </div>
        <div className='p-4'>
          <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
              <span>Order</span>
              <span className='sm:text-left text-right'>Status</span>
              <span className='hidden md:grid'>Last Order</span>
              <span className='hidden sm:grid'>Method</span>
            </div>
            <ul>
              {
                data.map((order, id) => (
                  <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex'>
                      <div className='bg-purple-100 p-3 rounded-lg'>
                        <FaShoppingBag className='text-purple-800' />
                      </div>
                      <div className='pl-4'>
                        <p className='text-gray-800 font-bold'>${order.total.toLocaleString()}</p>
                        <p className='text-gray-800 text-sm'>{order.name.first}</p>
                      </div>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>
                      <span
                        className={
                          order.status == "Processing" ? "bg-green-200 p-2 rounded-lg"
                            : order.status == "Completed" ? "bg-blue-200 p-2 rounded-lg"
                              : "bg-yellow-200 p-2 rounded-lg"
                        }
                      >{order.status}</span>
                    </p>
                    <p className='hidden md:flex'>{order.date}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                      <p>{order.method}</p>
                      <BsThreeDotsVertical />
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
 
   return (

    <LoginPage />
   )

}

export default Orders