import LessonArea from "../components/LessonArea"
import ProgressTracker from "../components/ProgressTracker"
import LeagueRanking from "../components/LeagueRanking"
import Layout from "../components/Layout"

export default function QuizPage() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="lg:hidden">
          <ProgressTracker />
        </div>
        <LessonArea />
        <div className="lg:hidden">
          <LeagueRanking />
        </div>
        <div className="hidden lg:flex lg:flex-col gap-6 lg:w-1/4">
          <ProgressTracker />
          <LeagueRanking />
        </div>
      </div>
    </Layout>
  )
}

