"use client"

import Link from "next/link"
import { FileText, Video, Headphones, CuboidIcon as Cube } from "lucide-react"

const categories = [
  { name: "Text", icon: FileText, color: "bg-blue-500", href: "/library/text" },
  { name: "Video", icon: Video, color: "bg-red-500", href: "/library/video" },
  { name: "Audio", icon: Headphones, color: "bg-green-500", href: "/library/audio" },
  { name: "Interactive/3D", icon: Cube, color: "bg-purple-500", href: "/library/interactive" },
]

export default function LibraryCategories() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <div key={category.name}>
          <Link href={category.href} className="block">
            <div className={`${category.color} rounded-lg p-4 text-white shadow-lg hover:shadow-xl transition-shadow`}>
              <category.icon className="w-8 h-8 mb-2" />
              <h2 className="text-lg font-bold">{category.name}</h2>
              <p className="mt-1 text-sm">Explore resources</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

