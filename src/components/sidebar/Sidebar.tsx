import { signOut, User } from 'firebase/auth'
import Image from 'next/image'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BiLogOutCircle } from 'react-icons/bi'
import { auth, dataBase } from '../../utils/firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, doc } from 'firebase/firestore'

type SidebarProps = {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [currentUser] = useAuthState(auth)

  const getOtherUsers = (users: Array<User>, mainUser: User) => {
    return users?.filter((user) => user !== mainUser)[0]
  }

  const logOut = () => {
    signOut(auth)
  }

  const [snapshot, loading, error] = useCollection(
    collection(dataBase, 'chats')
  )
  const chats = snapshot?.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  console.log('chatsss', chats)
  return (
    <div className="h-full w-full bg-sidebar md:w-[50%] lg:w-[30%]">
      <div className="flex h-16 w-full items-center justify-between bg-purple-200 px-4">
        <div className="flex items-center space-x-2">
          <div className="relative h-10 w-10 rounded-[100%]">
            <Image
              src={currentUser?.photoURL}
              layout="fill"
              className="rounded-[100%]"
            />
          </div>
          <h2 className="text-lg font-bold text-purple-900">
            {currentUser?.displayName || currentUser?.email?.split('@')[0]}
          </h2>
        </div>

        <button
          onClick={logOut}
          className="flex h-[2rem] w-[6rem] items-center justify-center rounded-full bg-white font-bold text-red-500 hover:bg-red-700 hover:text-white"
        >
          <BiLogOutCircle className="mr-1" />
          Logout
        </button>
      </div>

      <div className="p-3">
        <div className="mb-3">
          <h3>Click on a user below to start a chat</h3>
        </div>
        {chats?.map((chat) => (
          <div
            key={chat.id}
            className="flex w-full items-center justify-center bg-purple-500 p-2"
          >
            <h1>{getOtherUsers(chat.users, currentUser?.email)}</h1>
            {/* <h1>{chat.users}</h1> */}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Sidebar
