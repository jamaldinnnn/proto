import Header from "../../components/Header"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Pill, Shield, Zap, AlertTriangle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MedicationGuide() {
  const medications = {
    controllers: [
      {
        name: "Inhaled Corticosteroids",
        description: "Reduces airway inflammation and prevents symptoms",
        examples: ["Fluticasone", "Budesonide", "Beclomethasone"],
        color: "blue",
      },
      {
        name: "Long-Acting Beta Agonists",
        description: "Provides long-term relief by relaxing airway muscles",
        examples: ["Salmeterol", "Formoterol"],
        color: "green",
      },
    ],
    relievers: [
      {
        name: "Short-Acting Beta Agonists",
        description: "Provides quick relief during asthma attacks",
        examples: ["Albuterol", "Levalbuterol"],
        color: "red",
      },
      {
        name: "Anticholinergics",
        description: "Helps relax and open airways",
        examples: ["Ipratropium", "Tiotropium"],
        color: "purple",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col bg-opacity-75 bg-[url('/game-pattern.svg')]">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-100 p-3 rounded-full">
              <Pill className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Medication Guide</h1>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <FileText size={14} />
                  <span>Reference Guide</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>20 min read</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none space-y-8 text-gray-900">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Asthma Medications</h2>
              <p>
                Asthma medications are typically divided into two main categories: long-term controllers and
                quick-relief medicines. Understanding the difference and proper usage is crucial for effective asthma
                management.
              </p>
            </div>

            <Tabs defaultValue="controllers" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="controllers" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Controllers
                </TabsTrigger>
                <TabsTrigger value="relievers" className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Quick-Relief
                </TabsTrigger>
              </TabsList>
              <TabsContent value="controllers">
                <div className="grid gap-6 mt-6">
                  {medications.controllers.map((med, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-2 mb-3 text-${med.color}-600`}>
                          <Shield className="w-6 h-6" />
                          <h3 className="text-xl font-bold">{med.name}</h3>
                        </div>
                        <p className="mb-4">{med.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {med.examples.map((example, i) => (
                            <Badge key={i} variant="secondary">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="relievers">
                <div className="grid gap-6 mt-6">
                  {medications.relievers.map((med, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className={`flex items-center gap-2 mb-3 text-${med.color}-600`}>
                          <Zap className="w-6 h-6" />
                          <h3 className="text-xl font-bold">{med.name}</h3>
                        </div>
                        <p className="mb-4">{med.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {med.examples.map((example, i) => (
                            <Badge key={i} variant="secondary">
                              {example}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="bg-orange-50 p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Important Reminders</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Always follow prescribed dosage",
                  "Keep track of medication usage",
                  "Check inhaler technique regularly",
                  "Report side effects to your doctor",
                  "Never skip controller medications",
                ].map((reminder, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-400 rounded-full" />
                    {reminder}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

