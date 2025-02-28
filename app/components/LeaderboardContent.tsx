"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Heart } from "lucide-react"
import { leaderboardData, leagueColors } from "../data/leaderboardData"

const leagues = [
  { name: "Bronze", color: "from-amber-700 to-amber-500" },
  { name: "Silver", color: "from-gray-400 to-gray-300" },
  { name: "Gold", color: "from-yellow-500 to-yellow-300" },
  { name: "Platinum", color: "from-indigo-600 to-indigo-400" },
]

export default function LeaderboardContent() {
  const [selectedLeague, setSelectedLeague] = useState("All")

  const filteredData =
    selectedLeague === "All" ? leaderboardData : leaderboardData.filter((user) => user.league === selectedLeague)

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-indigo-800 text-center">Asthma Quest Leaderboard</h1>

      <div className="flex justify-center space-x-4">
        <Button onClick={() => setSelectedLeague("All")} variant={selectedLeague === "All" ? "default" : "outline"}>
          All
        </Button>
        {leagues.map((league) => (
          <Button
            key={league.name}
            onClick={() => setSelectedLeague(league.name)}
            variant={selectedLeague === league.name ? "default" : "outline"}
            className={`bg-gradient-to-r ${league.color} text-white`}
          >
            {league.name}
          </Button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredData.map((user, index) => (
          <div
            key={user.name}
            className="flex items-center justify-between bg-white bg-opacity-75 p-4 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <span className="font-bold text-2xl text-indigo-800 w-8">{index + 1}</span>
              <Avatar className="w-12 h-12">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg text-indigo-800">{user.name}</p>
                <Badge variant="outline" className={`bg-gradient-to-r ${leagueColors[user.league]} text-white`}>
                  {user.league}
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="text-lg bg-yellow-400 text-yellow-900">
                <Trophy className="w-4 h-4 mr-1" />
                {user.points}
              </Badge>
              <div className="flex items-center space-x-1">
                <Heart className="text-red-500 w-4 h-4" />
                <span className="text-sm font-bold text-red-500">{user.streak}</span>
              </div>
              {index === 0 && <Medal className="w-6 h-6 text-yellow-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

