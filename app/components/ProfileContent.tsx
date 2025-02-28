import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Star, Zap, Brain, Book, Target, Award, Flame } from "lucide-react"
import { leaderboardData } from "../data/leaderboardData"

export default function ProfileContent() {
  const currentUser = leaderboardData[0] // Assuming the first user is the current user
  const userRank = leaderboardData.findIndex((user) => user.name === currentUser.name) + 1

  const achievements = [
    { name: "Quick Learner", icon: Zap, earned: true },
    { name: "Asthma Expert", icon: Brain, earned: true },
    { name: "Perfect Score", icon: Star, earned: false },
    { name: "Completion Master", icon: Trophy, earned: false },
    { name: "Bookworm", icon: Book, earned: true },
    { name: "Goal Setter", icon: Target, earned: true },
  ]

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center space-x-6">
        <Avatar className="w-24 h-24">
          <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
          <AvatarFallback>
            {currentUser.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-indigo-800">{currentUser.name}</h1>
          <p className="text-xl text-indigo-600">Asthma Management Specialist</p>
          <div className="flex items-center mt-2">
            <Award className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-lg font-semibold text-indigo-700">{currentUser.league} League</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <Flame className="w-6 h-6 mr-2 text-orange-500" />
            Progress Overview
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-700 font-semibold">Overall Rank</span>
                <span className="text-indigo-700 font-bold">#{userRank}</span>
              </div>
              <Progress
                value={100 - (userRank / leaderboardData.length) * 100}
                className="w-full [&>div]:bg-indigo-500"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-700 font-semibold">Current Streak</span>
                <span className="text-indigo-700 font-bold">{currentUser.streak} days</span>
              </div>
              <Progress value={currentUser.streak * 10} max={100} className="w-full [&>div]:bg-red-500" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-indigo-700 font-semibold">Total Points</span>
              <Badge variant="secondary" className="text-lg bg-yellow-400 text-yellow-900">
                <Star className="w-5 h-5 mr-1" /> {currentUser.points}
              </Badge>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-100 to-indigo-100 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
            Achievements
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <Badge
                key={index}
                variant={achievement.earned ? "default" : "outline"}
                className={`flex items-center gap-2 py-2 px-3 ${
                  achievement.earned ? "bg-gradient-to-r from-yellow-400 to-orange-500" : ""
                }`}
              >
                {<achievement.icon className={`w-5 h-5 ${achievement.earned ? "text-white" : ""}`} />}
                <span className={`text-sm ${achievement.earned ? "text-white" : ""}`}>{achievement.name}</span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center">
            <Book className="w-6 h-6 mr-2 text-green-500" />
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-white bg-opacity-50 p-3 rounded-lg">
              <span className="text-indigo-700">Completed "Acute Asthma Management" module</span>
              <Badge variant="secondary" className="bg-green-500 text-white">
                +50 pts
              </Badge>
            </li>
            <li className="flex items-center justify-between bg-white bg-opacity-50 p-3 rounded-lg">
              <span className="text-indigo-700">Achieved {currentUser.streak}-day streak</span>
              <Badge variant="secondary" className="bg-blue-500 text-white">
                +20 pts
              </Badge>
            </li>
            <li className="flex items-center justify-between bg-white bg-opacity-50 p-3 rounded-lg">
              <span className="text-indigo-700">Earned "Asthma Expert" badge</span>
              <Badge variant="secondary" className="bg-purple-500 text-white">
                +100 pts
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

