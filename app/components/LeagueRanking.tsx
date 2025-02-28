import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart, Trophy } from "lucide-react"
import { leaderboardData, leagueColors } from "../data/leaderboardData"

export default function LeagueRanking() {
  const topPerformers = leaderboardData.slice(0, 3)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-md p-4">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-bold text-indigo-800">Top Performers</h3>
      </div>

      <div className="space-y-3">
        {topPerformers.map((user, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Rank and Avatar */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-sm font-bold text-indigo-800">{index + 1}</span>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Name and League */}
            <div className="flex-grow min-w-0">
              <div className="text-sm font-medium text-indigo-800 truncate">{user.name}</div>
              <Badge
                variant="outline"
                className={`text-xs bg-gradient-to-r ${leagueColors[user.league]} text-white mt-1`}
              >
                {user.league}
              </Badge>
            </div>

            {/* Points and Streak */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Badge className="bg-yellow-400/90 text-yellow-900 text-xs">{user.points}p</Badge>
              <div className="flex items-center gap-1 bg-pink-50 px-2 py-1 rounded-full">
                <Heart className="w-3 h-3 text-red-500" />
                <span className="text-xs font-bold text-red-500">{user.streak}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/leaderboard"
        className="block text-center mt-4 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
      >
        View Full Leaderboard →
      </Link>
    </div>
  )
}

