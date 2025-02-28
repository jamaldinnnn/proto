"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Video, ExternalLink } from "lucide-react"
import Image from "next/image"

const videoResources = [
  {
    title: "Proper Inhaler Technique",
    description: "Video demonstration on how to use inhalers correctly.",
    link: "https://www.youtube.com/watch?v=dummylink1",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "5:30",
  },
  {
    title: "Understanding Spirometry Tests",
    description: "A visual guide to spirometry tests and their importance in asthma diagnosis.",
    link: "https://www.youtube.com/watch?v=dummylink2",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "7:15",
  },
  {
    title: "Emergency Asthma Attack Response",
    description: "Step-by-step video guide on how to respond to an asthma emergency.",
    link: "https://www.youtube.com/watch?v=dummylink3",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "6:45",
  },
]

export default function VideoResources() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videoResources.map((resource, index) => (
        <motion.div
          key={resource.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="relative h-40 mb-4">
                <Image
                  src={resource.thumbnail || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <Badge className="absolute bottom-2 right-2 bg-black bg-opacity-75">{resource.duration}</Badge>
              </div>
              <CardTitle className="flex items-center gap-2">
                <Video className="w-5 h-5 text-red-500" />
                {resource.title}
              </CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Video
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

