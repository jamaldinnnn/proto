import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Zap, Brain } from "lucide-react"

export default function ProgressTracker() {
  const achievements = [
    { name: "Quick Learner", icon: Zap, earned: true },
    { name: "Asthma Expert", icon: Brain, earned: true },
    { name: "Perfect Score", icon: Star, earned: false },
    { name: "Completion Master", icon: Trophy, earned: false },
  ]

  return (
    <div className="space-y-4 bg-gradient-to-br from-blue-100 to-purple-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-gray-800">Your Progress</h3>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">Lessons Completed</span>
          <span className="text-sm font-bold text-blue-600">3/10</span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2.5 overflow-hidden">
          <div className="bg-blue-600 h-2.5 transition-all duration-1000 ease-out" style={{ width: "30%" }} />
        </div>
      </div>
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-gray-700">Achievements</h4>
        <div className="grid grid-cols-2 gap-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="transition-all duration-300 ease-in-out transform hover:scale-105">
              <Badge
                variant={achievement.earned ? "default" : "outline"}
                className={`flex items-center gap-1 py-1 ${
                  achievement.earned ? "bg-gradient-to-r from-yellow-400 to-orange-500" : ""
                }`}
              >
                {<achievement.icon className={`w-3 h-3 ${achievement.earned ? "text-white" : ""}`} />}
                <span className={`text-xs ${achievement.earned ? "text-white" : ""}`}>{achievement.name}</span>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

