"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Heart, Star, Trophy } from "lucide-react"
import confetti from "canvas-confetti"

const lessons = [
  {
    question: "What is the first step in managing an acute asthma exacerbation?",
    options: [
      "Administer oral corticosteroids",
      "Assess the severity of the exacerbation",
      "Start nebulizer treatment",
      "Perform spirometry",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a common trigger for asthma?",
    options: ["Drinking water", "Sleeping", "Pollen", "Eating fruits"],
    correctAnswer: 2,
  },
  {
    question: "What is the main purpose of a quick-relief inhaler?",
    options: [
      "To prevent asthma symptoms",
      "To cure asthma",
      "To provide immediate relief during an asthma attack",
      "To boost the immune system",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which of these is NOT a common symptom of asthma?",
    options: ["Wheezing", "Chest tightness", "Shortness of breath", "High fever"],
    correctAnswer: 3,
  },
  {
    question: "What does a peak flow meter measure?",
    options: ["Blood oxygen levels", "How fast you can exhale air", "Heart rate", "Body temperature"],
    correctAnswer: 1,
  },
]

export default function LessonArea() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [points, setPoints] = useState(0)
  const [level, setLevel] = useState(1)
  const [progress, setProgress] = useState(0)
  const [streak, setStreak] = useState(0)

  const handleSubmit = () => {
    setShowFeedback(true)
    if (selectedAnswer === lessons[currentLesson].correctAnswer) {
      const newPoints = points + 10
      setPoints(newPoints)
      setStreak((prevStreak) => prevStreak + 1)
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 20
        if (newProgress >= 100) {
          setLevel((prevLevel) => prevLevel + 1)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          })
          return 0
        }
        return newProgress
      })
    } else {
      setStreak(0)
    }
  }

  const handleNext = () => {
    setCurrentLesson((prev) => (prev + 1) % lessons.length)
    setSelectedAnswer(null)
    setShowFeedback(false)
  }

  const lesson = lessons[currentLesson]

  return (
    <div className="space-y-4 p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold text-indigo-800">Asthma Quest</h2>
        <div className="flex items-center gap-3 w-full justify-center">
          {/* Streak Counter */}
          <div className="flex items-center bg-white/90 px-2 py-1 rounded-full shadow-sm">
            <Heart className="text-red-500 w-4 h-4 mr-1" />
            <span className="text-sm font-bold text-red-500">{streak}</span>
          </div>

          {/* Points Badge */}
          <Badge variant="secondary" className="text-sm bg-yellow-400 text-yellow-900 flex items-center">
            <Star className="w-4 h-4 mr-1" /> {points}
          </Badge>

          {/* Level Indicator */}
          <div className="flex items-center bg-indigo-600 text-white px-2 py-1 rounded-full shadow-sm">
            <Trophy className="w-4 h-4 mr-1" />
            <span className="text-sm font-bold mr-2">Level {level}</span>
            <Progress value={progress} className="w-16 [&>div]:bg-yellow-400" />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div key={currentLesson} className="bg-white p-4 rounded-lg shadow-md border-4 border-indigo-300">
        <p className="text-lg text-indigo-800 mb-4 font-semibold">{lesson.question}</p>
        <RadioGroup
          value={selectedAnswer?.toString()}
          onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
        >
          {lesson.options.map((option, index) => (
            <div key={index} className="mb-3 last:mb-0">
              <Label
                htmlFor={`option-${index}`}
                className="flex items-center p-3 bg-indigo-50 rounded-lg cursor-pointer transition-all hover:bg-indigo-100"
              >
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="mr-3" />
                <span className="text-base text-indigo-700">{option}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Action Buttons */}
      {!showFeedback ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full text-lg py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
        >
          Submit Answer
        </Button>
      ) : (
        <div className="space-y-4">
          <p
            className={`font-bold text-center text-xl ${
              selectedAnswer === lesson.correctAnswer ? "text-green-500" : "text-red-500"
            }`}
          >
            {selectedAnswer === lesson.correctAnswer ? "Correct! +10 points" : "Incorrect. Try again!"}
          </p>
          <Button
            onClick={handleNext}
            className="w-full text-lg py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
          >
            Next Question
          </Button>
        </div>
      )}

      {/* Level Up Animation */}
      {level > 1 && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <Sparkles className="text-yellow-400 w-24 h-24 animate-ping" />
        </div>
      )}
    </div>
  )
}

