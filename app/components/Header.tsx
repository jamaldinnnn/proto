"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { FileText, Video, Headphones, CuboidIcon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const InhalerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 58.82 58.82" className={className} fill="currentColor">
    <path d="M52.575,44.293h-6.483v-0.528c0-1.598-1.276-3-2.73-3H28.856l-1.217-13.407c-0.103-1.267-0.899-2.723-1.913-3.577l-1.79-21.035c-0.067-0.796-0.442-1.52-1.057-2.038c-0.613-0.518-1.394-0.766-2.187-0.698L8.164,1.077C6.516,1.218,5.29,2.673,5.429,4.323l0.555,6.342c-0.847-0.422-1.707-0.32-2.237,0.258c-0.266,0.289-0.566,0.823-0.489,1.729L6.94,55.91c0.136,1.604,1.556,2.909,3.165,2.909h13.92H29.4c0.007,0.001,0.015,0,0.02,0h13.672c1.654,0,3-1.346,3-3v-0.528h6.483c1.654,0,3-1.346,3-3v-4.998C55.575,45.638,54.229,44.293,52.575,44.293z M8.112,12.048L7.749,7.896l14.514-1.235l1.334,15.668L8.112,12.048z M8.333,3.071l12.529-1.066c0.259-0.022,0.521,0.06,0.728,0.233c0.205,0.173,0.331,0.414,0.354,0.678l0.149,1.752L7.575,5.903L7.421,4.152C7.375,3.602,7.784,3.117,8.333,3.071z M24.025,56.819h-13.92c-0.576,0-1.124-0.503-1.173-1.078L5.255,12.553l19.007,12.619c0.66,0.438,1.319,1.557,1.384,2.357l2.659,29.291H24.025z M44.091,55.819c0,0.551-0.448,1-1,1H30.313l-1.275-14.054h14.323c0.25,0,0.73,0.422,0.73,1V55.819z M53.575,52.291c0,0.551-0.448,1-1,1h-6.483v-6.998h6.483c0.552,0,1,0.449,1,1V52.291z" />
  </svg>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <InhalerIcon className="h-8 w-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-800">AsthmaQuest</h1>
          </Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <NavItems setIsLibraryOpen={setIsLibraryOpen} />
          </ul>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <ul className="space-y-2">
            <NavItems setIsLibraryOpen={setIsLibraryOpen} />
          </ul>
        </div>
      )}
    </header>
  )
}

const NavItems: React.FC<{ setIsLibraryOpen: (open: boolean) => void }> = ({ setIsLibraryOpen }) => {
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/quiz", label: "Quiz" },
    { href: "/flashcards", label: "Flashcards" },
    { href: "/profile", label: "Profile" },
    { href: "/leaderboard", label: "Leaderboard" },
  ]

  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="text-gray-600 hover:text-blue-500">
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="p-0">
              <span className="text-gray-600 hover:text-blue-500">Library</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0">
            <ul className="py-2">
              <LibraryItems />
            </ul>
          </PopoverContent>
        </Popover>
      </li>
    </>
  )
}

const LibraryItems: React.FC = () => {
  const items = [
    { href: "/library/text", label: "Text", icon: FileText, color: "text-blue-500" },
    { href: "/library/video", label: "Video", icon: Video, color: "text-red-500" },
    { href: "/library/audio", label: "Audio", icon: Headphones, color: "text-green-500" },
    { href: "/library/interactive", label: "Interactive", icon: CuboidIcon, color: "text-purple-500" },
  ]

  return (
    <>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="flex items-center px-4 py-2 hover:bg-gray-100">
            <item.icon className={`mr-2 h-4 w-4 ${item.color}`} />
            <span className="text-sm text-gray-700">{item.label}</span>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Header

