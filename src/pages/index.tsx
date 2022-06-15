import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex items-center justify-center">
      <Head>
        <title>CHATTY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <h1>Start chatting by clicking on a user</h1>
      </div>
    </div>
  )
}

export default Home
