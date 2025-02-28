"use client"

import type React from "react"
import dynamic from "next/dynamic"

const Header = dynamic(() => import("./Header"), { ssr: false })

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-6 sm:py-8 overflow-hidden">
        <div className="w-full max-w-7xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg overflow-y-auto border border-white/20 p-4 sm:p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

