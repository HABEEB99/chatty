import React from 'react'
import Sidebar from '../sidebar/Sidebar'

type PagesLayoutProps = {}

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <main className="h-[95vh] w-screen">
        <Sidebar />
        {children}
      </main>
    </div>
  )
}
export default PagesLayout
