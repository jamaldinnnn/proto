"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Headphones, Play, Pause } from "lucide-react"
import { useState } from "react"

const audioResources = [
  {
    title: "Asthma Management Podcast",
    description: "Expert discussion on the latest asthma management strategies.",
    audioSrc: "/audio/asthma-management-podcast.mp3",
    duration: "25:30",
  },
  {
    title: "Living with Asthma: Patient Stories",
    description: "Real-life experiences and tips from asthma patients.",
    audioSrc: "/audio/living-with-asthma.mp3",
    duration: "18:45",
  },
  {
    title: "Asthma and Allergies: What's the Connection?",
    description: "An in-depth discussion about the relationship between asthma and allergies.",
    audioSrc: "/audio/asthma-and-allergies.mp3",
    duration: "22:15",
  },
]

export default function AudioResources() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {audioResources.map((resource, index) => (
        <motion.div
          key={resource.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AudioCard resource={resource} />
        </motion.div>
      ))}
    </div>
  )
}

function AudioCard({ resource }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Here you would typically implement the actual audio playback logic
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-green-500" />
          {resource.title}
        </CardTitle>
        <CardDescription>{resource.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <Badge>{resource.duration}</Badge>
      </CardContent>
      <CardFooter>
        <Button onClick={togglePlay} className="w-full">
          {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
          {isPlaying ? "Pause" : "Play"} Audio
        </Button>
      </CardFooter>
    </Card>
  )
}

