import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PagesLayout from '../components/layout/PagesLayout'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import Login from '../components/login/Login'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentUser, loading, error] = useAuthState(auth)
  return currentUser ? (
    <>
      <Toaster />
      <Login />
    </>
  ) : (
    <PagesLayout>
      <Toaster />
      <Component {...pageProps} />
    </PagesLayout>
  )
}

export default MyApp
