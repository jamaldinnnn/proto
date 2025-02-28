"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Lock,
  Star,
  Stethoscope,
  Pill,
  BookOpen,
  Trophy,
  CheckCircle,
  TreesIcon as Lungs,
  Activity,
} from "lucide-react"
import Link from "next/link"

const modules = [
  {
    id: 1,
    title: "Asthma Basics",
    description: "Learn the fundamentals of asthma",
    icon: Lungs,
    status: "completed",
    path: "/tutorials/asthma-basics",
    position: "right",
  },
  {
    id: 2,
    title: "Diagnosis Methods",
    description: "Understanding how asthma is diagnosed",
    icon: Stethoscope,
    status: "completed",
    path: "/tutorials/diagnosis",
    position: "left",
  },
  {
    id: 3,
    title: "Medication Guide",
    description: "Learn about different medications",
    icon: Pill,
    status: "current",
    path: "/tutorials/medications",
    position: "right",
  },
  {
    id: 4,
    title: "Treatment Plans",
    description: "Create effective treatment plans",
    icon: Activity,
    status: "locked",
    path: "/tutorials/treatment",
    position: "left",
  },
  {
    id: 5,
    title: "Case Studies",
    description: "Real-world patient scenarios",
    icon: BookOpen,
    status: "locked",
    path: "/tutorials/cases",
    position: "right",
  },
  {
    id: 6,
    title: "Advanced Management",
    description: "Master complex cases",
    icon: Trophy,
    status: "locked",
    path: "/tutorials/advanced",
    position: "left",
  },
]

export default function LearningPath() {
  return (
    <div className="relative max-w-3xl mx-auto py-8 px-4">
      {/* Curved path SVG */}
      <svg
        className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-4 h-full"
        viewBox="0 0 40 800"
        preserveAspectRatio="none"
      >
        <path
          d="M20,0 C30,100 10,200 20,300 C30,400 10,500 20,600 C30,700 10,800 20,800"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="4"
          className="path-line"
        />
      </svg>

      {/* Modules */}
      <div className="relative space-y-20">
        {modules.map((module, index) => (
          <div key={module.id} className={`relative ${module.position === "left" ? "text-right" : "text-left"}`}>
            {/* Module node */}
            <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-10">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                  module.status === "current"
                    ? "bg-green-500 text-white"
                    : module.status === "completed"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
              >
                {module.status === "current" ? (
                  <Star className="w-8 h-8" />
                ) : module.status === "completed" ? (
                  <CheckCircle className="w-8 h-8" />
                ) : (
                  <Lock className="w-8 h-8" />
                )}
              </div>
            </div>

            {/* Module card */}
            <Card
              className={`w-[calc(50%-3rem)] ${module.position === "left" ? "mr-auto" : "ml-auto"} p-4 ${
                module.status === "locked" ? "opacity-50" : ""
              } hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-2 rounded-lg ${
                    module.status === "current"
                      ? "bg-green-100 text-green-600"
                      : module.status === "completed"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <module.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                  <div className="flex items-center gap-2">
                    {module.status === "current" && <Badge className="bg-green-500">Current</Badge>}
                    {module.status === "completed" && <Badge className="bg-blue-500">Completed</Badge>}
                    <Button
                      asChild
                      variant={module.status === "locked" ? "outline" : "default"}
                      className={module.status === "locked" ? "pointer-events-none" : ""}
                      disabled={module.status === "locked"}
                    >
                      <Link href={module.path}>
                        {module.status === "current"
                          ? "Start Learning"
                          : module.status === "completed"
                            ? "Review"
                            : "Locked"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Decorative elements */}
            {module.status === "current" && (
              <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-green-500/20" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Decorative characters */}
      <div className="absolute left-1/4 top-1/3 -translate-x-1/2">
        <div className="w-16 h-16 bg-blue-500 rounded-full opacity-20" />
      </div>
      <div className="absolute right-1/4 bottom-1/3 translate-x-1/2">
        <div className="w-12 h-12 bg-green-500 rounded-full opacity-20" />
      </div>
    </div>
  )
}

