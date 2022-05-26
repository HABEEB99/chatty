import React from 'react'
import { auth } from '../../utils/firebase'
import Footer from '../footer/Footer'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { BiLoaderCircle } from 'react-icons/bi'
import { BsChatSquareQuoteFill } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import toast from 'react-hot-toast'

type LoginProps = {}

const Login: React.FC<LoginProps> = () => {
  const [loginWithGoogle, user, loading, error] = useSignInWithGoogle(auth)

  const handleLogin = () => {
    if (error) {
      return toast.error('Network Error', {
        position: 'top-center',
        duration: 4000,
        style: {
          color: 'red',
        },
      })
    } else {
      loginWithGoogle()
      return toast.success('You Signed-in Successfully', {
        position: 'top-center',
        duration: 2000,
        style: {
          color: 'green',
        },
      })
    }
  }
  return (
    <div className="h-screen w-screen bg-body">
      <main className="flex h-[95vh] w-full items-center justify-center">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-col items-center space-y-1">
            <h1 className=" text-xl font-extrabold text-cta">
              Welcome to Chatty
            </h1>
            <BsChatSquareQuoteFill className="text-[12rem] text-gray-500" />
          </div>
          <span className="text-lg text-sidebar">
            Login to connect with your friends
          </span>
          <button className="group flex h-12 w-[18rem] items-center justify-center rounded-full bg-btn font-bold text-white hover:bg-cta">
            <FcGoogle
              onClick={handleLogin}
              className="mr-2 font-bold group-hover:animate-spin"
            />
            Login With Google
            {loading && <BiLoaderCircle />}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default Login
