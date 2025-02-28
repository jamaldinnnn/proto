import type React from "react"
import LearningPath from "../components/LearningPath"
import RecentActivity from "../components/RecentActivity"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Zap } from "lucide-react"
import Layout from "../components/Layout"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Welcome to Asthma Quest</h1>

      <div className="mb-6 sm:mb-8 p-4 bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-500" />
          Daily Challenge
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">Complete a quick quiz to earn bonus XP!</p>
        <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-blue-500 text-white">
          Start Challenge
        </Button>
      </div>

      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mr-2" />
          <span className="text-xl sm:text-2xl font-bold text-gray-800">Level 5</span>
        </div>
        <div className="flex-1 mx-2 sm:mx-4">
          <Progress value={65} max={100} className="w-full [&>div]:bg-blue-400" />
        </div>
        <div className="flex items-center">
          <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 mr-1" />
          <span className="text-lg sm:text-xl font-bold text-gray-800">650 XP</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2">
          <LearningPath />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

