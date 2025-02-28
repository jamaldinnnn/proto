import Header from "../../components/Header"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Stethoscope, Activity, LineChartIcon as ChartLineUp } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function DiagnosisMethods() {
  const diagnosticTools = [
    {
      title: "Spirometry",
      description: "Measures how much and how quickly you can move air in and out of your lungs",
      icon: Activity,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Peak Flow Meter",
      description: "A simple device that measures how fast air comes out of the lungs",
      icon: ChartLineUp,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Physical Examination",
      description: "Doctor listens to your breathing and checks for signs of allergies",
      icon: Stethoscope,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col bg-opacity-75 bg-[url('/game-pattern.svg')]">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <Stethoscope className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Diagnosis Methods</h1>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <FileText size={14} />
                  <span>Interactive Guide</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>15 min read</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none space-y-8 text-gray-900">
            <div className="bg-green-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Asthma Diagnosis</h2>
              <p>
                Accurate diagnosis of asthma involves multiple steps and tools. Doctors use a combination of physical
                examination, medical history, and various tests to confirm the presence of asthma and determine its
                severity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {diagnosticTools.map((tool, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={tool.image || "/placeholder.svg"} alt={tool.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <tool.icon className="w-6 h-6 text-gray-600" />
                      <h3 className="text-xl font-bold text-gray-800">{tool.title}</h3>
                    </div>
                    <p className="text-gray-700">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Additional Tests</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Bronchial challenge test",
                  "Allergy testing",
                  "Chest X-ray",
                  "Blood tests",
                  "FeNO testing",
                  "Exercise challenge",
                ].map((test, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full" />
                    {test}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

