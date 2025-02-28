import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const activities = [
  { action: "Completed tutorial", item: "Understanding Asthma Basics", points: 50 },
  { action: "Watched video", item: "Proper Inhaler Technique", points: 30 },
  { action: "Took quiz", item: "Asthma Medications", points: 100 },
]

export default function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-indigo-800">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center justify-between bg-indigo-50 p-3 rounded-lg">
              <div>
                <p className="font-semibold text-indigo-800">{activity.action}</p>
                <p className="text-sm text-indigo-600">{activity.item}</p>
              </div>
              <Badge variant="secondary" className="bg-green-500 text-white">
                +{activity.points} pts
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

