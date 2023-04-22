import Header from '@/components/Header'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <Head>
     <title>Admin Dashboard</title>
    </Head>
    <main className="bg-gray-100 min-h-screen">
    <Header />
    </main>
    </>
  )
}
