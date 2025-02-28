import Header from "../../components/Header"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, TreesIcon as Lungs, Wind, Thermometer, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function AsthmaBasicsTutorial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col bg-opacity-75 bg-[url('/game-pattern.svg')]">
      <Header />
      <main className="flex-grow flex justify-center px-4 py-8">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-full">
              <Lungs className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Understanding Asthma Basics</h1>
              <div className="flex items-center space-x-4 mt-2">
                <Badge variant="outline" className="flex items-center space-x-1">
                  <FileText size={14} />
                  <span>Text Tutorial</span>
                </Badge>
                <Badge variant="outline" className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>10 min read</span>
                </Badge>
              </div>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none space-y-6 text-gray-900">
            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <Image src="/placeholder.svg?height=256&width=896" alt="Asthma Overview" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent flex items-end p-6">
                <p className="text-white text-lg font-medium">Understanding the fundamentals of asthma management</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Wind className="w-6 h-6 mr-2 text-blue-600" />
                What is Asthma?
              </h2>
              <div className="space-y-4">
                <p>
                  Asthma is a chronic respiratory condition that affects millions of people worldwide, from young
                  children to adults. Think of your airways as branches in a tree – in asthma, these branches become
                  inflamed and narrow, making breathing more challenging.
                </p>

                <p>
                  When someone has asthma, their airways are more sensitive and reactive to various environmental
                  triggers. This sensitivity causes three main changes in the airways:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>The airway walls become swollen and inflamed</li>
                  <li>Muscles around the airways tighten (bronchospasm)</li>
                  <li>Extra mucus is produced, further narrowing the air passages</li>
                </ul>

                <p className="font-semibold">🔬 Inside Your Airways:</p>
                <p>
                  During an asthma episode, the airways undergo significant changes that can make breathing difficult.
                  The combination of inflammation, muscle tightening, and mucus production creates the classic symptoms
                  that asthma patients experience.
                </p>

                <p className="font-semibold">⚕️ Important to Know:</p>
                <p>
                  While asthma cannot be cured, it can be effectively managed with proper medical care and lifestyle
                  adjustments. Many people with asthma lead active, healthy lives by understanding their condition and
                  following their treatment plan.
                </p>

                <p className="font-semibold">🎯 Impact on Daily Life:</p>
                <p>
                  Asthma symptoms can vary from mild to severe and may change over time. Some people experience symptoms
                  only occasionally, while others might have more frequent episodes. Understanding your personal asthma
                  pattern is key to effective management.
                </p>

                <p className="font-semibold">💡 Did You Know?</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Over 300 million people worldwide live with asthma</li>
                  <li>Asthma often runs in families</li>
                  <li>Many famous athletes and performers have achieved great success while managing their asthma</li>
                  <li>Early recognition and treatment of symptoms can prevent severe attacks</li>
                </ul>

                <p>
                  Understanding asthma is the first step toward effective management. As you continue through this
                  learning module, you'll discover more about triggers, symptoms, and treatment strategies that can help
                  you or your patients better control this condition.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2 text-purple-600" />
                  Common Triggers
                </h3>
                <ul className="space-y-2">
                  {[
                    "Allergens (pollen, dust mites)",
                    "Respiratory infections",
                    "Air pollutants",
                    "Physical activity",
                    "Strong emotions",
                  ].map((trigger, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full" />
                      {trigger}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Thermometer className="w-6 h-6 mr-2 text-pink-600" />
                  Key Symptoms
                </h3>
                <ul className="space-y-2">
                  {[
                    "Wheezing during breathing",
                    "Chest tightness",
                    "Shortness of breath",
                    "Chronic coughing",
                    "Difficulty sleeping",
                  ].map((symptom, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full" />
                      {symptom}
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

