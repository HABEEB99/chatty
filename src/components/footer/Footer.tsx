import Link from 'next/link'
import React from 'react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="flex h-[5vh] w-screen items-center justify-center space-x-4 bg-purple-200 px-3 sm:px-5 md:px-12 lg:px-32">
      <span className="text-xs text-gray-500 md:text-lg">
        Created by habeebahmadu1@gmail.com
      </span>

      <div className="flex cursor-pointer items-center justify-center space-x-2">
        <Link href="https://github.com/HABEEB99" passHref>
          <BsGithub className="text-xl text-btn hover:text-cta" />
        </Link>

        <Link href="www.linkedin.com/in/habeeb-ahmadu" passHref>
          <BsLinkedin className="text-xl text-btn hover:text-cta" />
        </Link>
      </div>
    </div>
  )
}
export default Footer
