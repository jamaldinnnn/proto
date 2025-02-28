import Header from "../../components/Header"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Target, CheckCircle2, AlertTriangle, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function TreatmentPlans() {
  const zones = [
    {
      name: "Green Zone",
      description: "Asthma is well controlled",
      symptoms: ["Breathing is good", "No cough or wheeze", "Can work and play", "Sleep through night"],
      color: "green",
      progress: 100,
    },
    {
      name: "Yellow Zone",
      description: "Caution - Asthma is getting worse",
      symptoms: ["Some symptoms", "Coughing", "Wheezing", "Tight chest"],
      color: "yellow",
      progress: 60,
    },
    {
      name: "Red Zone",
      description: "Medical Alert - Severe symptoms",
      symptoms: ["Medicine not helping", "Breathing is hard", "Cannot work or play", "Getting worse"],
      color: "red",
      progress: 30,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col bg-opacity-75 bg-[url('/game-pattern.svg')]">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Treatment Plans</h1>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <FileText size={14} />
                  <span>Action Plan</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>15 min read</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none space-y-8 text-gray-900">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Asthma Action Plan Zones</h2>
              <p>
                An asthma action plan is a written plan that you develop with your doctor to help control your asthma.
                The plan shows your daily treatment, such as what kind of medicines to take and when to take them.
              </p>
            </div>

            <div className="grid gap-6">
              {zones.map((zone, index) => (
                <Card key={index} className={`border-l-4 border-${zone.color}-500`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className={`w-6 h-6 text-${zone.color}-500`} />
                        <h3 className="text-xl font-bold text-gray-800">{zone.name}</h3>
                      </div>
                      <Badge variant="secondary" className={`bg-${zone.color}-100 text-${zone.color}-700`}>
                        {zone.description}
                      </Badge>
                    </div>
                    <Progress value={zone.progress} className={`mb-4 [&>div]:bg-${zone.color}-500`} />
                    <ul className="grid grid-cols-2 gap-2">
                      {zone.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className={`w-2 h-2 bg-${zone.color}-400 rounded-full`} />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h3 className="text-xl font-bold text-gray-800">Daily Management</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Take medications as prescribed",
                    "Monitor peak flow readings",
                    "Avoid known triggers",
                    "Exercise regularly",
                    "Keep environment clean",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-gray-800">When to Seek Help</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Symptoms getting worse",
                    "Medication not working",
                    "Difficulty speaking",
                    "Blue lips or fingernails",
                    "Severe anxiety",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

