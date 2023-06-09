import BarCharts from '@/components/BarCharts'
import Header from '@/components/Header'
import RecentOrder from '@/components/RecentOrder'
import TopCards from '@/components/TopCards'
import Head from 'next/head'
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginPage from './LoginPage'


export default function Home() {
  const { data: session } = useSession()
  if (session) {
  return (
    <>
    <Head>
     <title>Admin Dashboard</title>
    </Head>
    <main className="bg-gray-100 min-h-screen">
    <Header />
    <TopCards />
    <div className='p-4 grid grid-cols-1 md:grid-cols-3 gap-4'>
      <BarCharts />
      <RecentOrder />
    </div>
    </main>
    </>
  )
  }

  return (
    <>
        <LoginPage />
    </>
  )

}
