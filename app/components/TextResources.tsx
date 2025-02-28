"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

const textResources = [
  {
    title: "Understanding Asthma Basics",
    description: "A comprehensive guide to asthma, its causes, and symptoms.",
    link: "/tutorials/asthma-basics",
    type: "Article",
  },
  {
    title: "Asthma Medications Guide",
    description: "Detailed information about various asthma medications and their uses.",
    link: "/tutorials/medications",
    type: "Guide",
  },
  {
    title: "Asthma and Exercise",
    description: "Guidelines for managing asthma while maintaining an active lifestyle.",
    link: "/tutorials/asthma-and-exercise",
    type: "Article",
  },
  {
    title: "Asthma Action Plan",
    description: "How to create and use an effective asthma action plan.",
    link: "/tutorials/action-plan",
    type: "Guide",
  },
]

export default function TextResources() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {textResources.map((resource, index) => (
        <motion.div
          key={resource.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                {resource.title}
              </CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <Badge>{resource.type}</Badge>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={resource.link}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

