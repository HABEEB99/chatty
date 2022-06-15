import React from 'react'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'

type PagesLayoutProps = {}

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <main className="flex h-[95vh] w-screen items-center">
        <Sidebar />
        <div className="hidden h-full bg-body md:inline-block md:w-[50%] lg:w-[70%] ">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default PagesLayout
