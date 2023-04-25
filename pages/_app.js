import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps, session }) {
  return (
    <>
    <SessionProvider session={session}>
    <Sidebar>
    <Component {...pageProps} />
    </Sidebar>
    </SessionProvider>
    </>
  )
}
