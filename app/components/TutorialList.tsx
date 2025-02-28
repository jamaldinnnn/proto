"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Book, Video, FileText, CheckCircle } from "lucide-react"

const tutorials = [
  {
    title: "Understanding Asthma Basics",
    description: "Learn the fundamentals of asthma, its causes, and symptoms.",
    type: "text",
    duration: "10 min read",
    link: "/tutorials/asthma-basics",
  },
  {
    title: "Proper Inhaler Technique",
    description: "Watch a video demonstration on how to use inhalers correctly.",
    type: "video",
    duration: "5 min watch",
    link: "/tutorials/inhaler-technique",
  },
  {
    title: "Asthma Action Plan",
    description: "Create an effective asthma action plan for your patients.",
    type: "interactive",
    duration: "15 min activity",
    link: "/tutorials/action-plan",
  },
]

export default function TutorialList() {
  const [completedTutorials, setCompletedTutorials] = useState<string[]>([])

  const handleComplete = (title: string) => {
    if (!completedTutorials.includes(title)) {
      setCompletedTutorials([...completedTutorials, title])
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-indigo-800">Featured Tutorials</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="overflow-hidden transition-shadow hover:shadow-lg">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <CardTitle>{tutorial.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription>{tutorial.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Badge variant="outline" className="flex items-center space-x-1">
                {tutorial.type === "text" && <FileText size={14} />}
                {tutorial.type === "video" && <Video size={14} />}
                {tutorial.type === "interactive" && <Book size={14} />}
                <span>{tutorial.duration}</span>
              </Badge>
              {completedTutorials.includes(tutorial.title) ? (
                <Button variant="outline" className="text-green-600" disabled>
                  <CheckCircle className="mr-2 h-4 w-4" /> Completed
                </Button>
              ) : (
                <Button
                  variant="default"
                  onClick={() => handleComplete(tutorial.title)}
                  className="bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Start Tutorial
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

