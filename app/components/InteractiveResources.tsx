"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, ExternalLink } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const LungModel3D = dynamic(() => import("./LungModel3D"), { ssr: false })

const interactiveResources = [
  {
    title: "3D Lung Model",
    description: "Explore an interactive 3D model of the lungs to understand asthma effects.",
    link: "/interactive/3d-lung-model",
    type: "3D Model",
  },
  {
    title: "Asthma Attack Simulator",
    description: "Experience a simulated asthma attack and learn how to respond.",
    link: "/interactive/asthma-attack-simulator",
    type: "Simulation",
  },
  {
    title: "Inhaler Technique Trainer",
    description: "Practice proper inhaler technique with this interactive guide.",
    link: "/interactive/inhaler-technique-trainer",
    type: "Interactive Guide",
  },
]

export default function InteractiveResources() {
  return (
    <div className="space-y-8">
      <Card className="w-full overflow-hidden">
        <CardHeader>
          <CardTitle>3D Lung Model</CardTitle>
          <CardDescription>Explore the 3D model of lungs to understand asthma effects</CardDescription>
        </CardHeader>
        <CardContent>
          <LungModel3D />
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link href="/interactive/3d-lung-model">
              <ExternalLink className="w-4 h-4 mr-2" />
              Explore Full 3D Model
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {interactiveResources.map((resource, index) => (
          <Card key={resource.title} className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cube className="w-5 h-5 text-purple-500" />
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
                  Launch Interactive
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

