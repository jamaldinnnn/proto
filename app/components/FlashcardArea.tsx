"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RotateCcw } from "lucide-react"

interface Flashcard {
  id: number
  question: string
  answer: string
  nextReview: number
  interval: number
}

const initialFlashcards: Flashcard[] = [
  {
    id: 1,
    question: "What is asthma?",
    answer:
      "A chronic respiratory condition characterized by inflammation and narrowing of the airways, leading to breathing difficulties.",
    nextReview: Date.now(),
    interval: 1,
  },
  {
    id: 2,
    question: "What are common asthma triggers?",
    answer:
      "Allergens (e.g., pollen, dust mites), respiratory infections, air pollutants, physical activity, and strong emotions.",
    nextReview: Date.now(),
    interval: 1,
  },
  {
    id: 3,
    question: "What is a peak flow meter used for?",
    answer:
      "To measure how fast air comes out of the lungs, helping to monitor asthma control and detect early signs of worsening symptoms.",
    nextReview: Date.now(),
    interval: 1,
  },
  {
    id: 4,
    question: "What is the purpose of a quick-relief inhaler?",
    answer: "To provide immediate relief during an asthma attack by quickly opening up the airways.",
    nextReview: Date.now(),
    interval: 1,
  },
  {
    id: 5,
    question: "What are the main components of an asthma action plan?",
    answer:
      "Daily management instructions, how to recognize and handle worsening symptoms, and when to seek emergency care.",
    nextReview: Date.now(),
    interval: 1,
  },
]

export default function FlashcardArea() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards)
  const [currentCard, setCurrentCard] = useState<Flashcard | null>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    getNextCard()
  }, [])

  const getNextCard = () => {
    const now = Date.now()
    const dueCards = flashcards.filter((card) => card.nextReview <= now)
    if (dueCards.length > 0) {
      setCurrentCard(dueCards[0])
      setIsFlipped(false)
    } else {
      setCurrentCard(null)
    }
  }

  const handleFlip = () => {
    setIsFlipped((prev) => !prev)
  }

  const handleDifficulty = (difficulty: "easy" | "medium" | "hard" | "fail") => {
    if (!currentCard) return

    const intervalMultiplier = {
      easy: 7,
      medium: 3,
      hard: 1,
      fail: 0,
    }

    const newInterval = intervalMultiplier[difficulty]
    const updatedCard = {
      ...currentCard,
      nextReview: Date.now() + newInterval * 24 * 60 * 60 * 1000, // Convert days to milliseconds
      interval: newInterval,
    }

    setFlashcards((prev) => prev.map((card) => (card.id === currentCard.id ? updatedCard : card)))
    getNextCard()
  }

  if (!currentCard) {
    return <div className="text-center text-xl text-indigo-800">Great job! You've reviewed all the cards for now.</div>
  }

  return (
    <div className="space-y-6">
      <div className="relative h-64">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Card className="w-full h-full flex items-center justify-center cursor-pointer" onClick={handleFlip}>
              <CardContent className="p-6 text-center">
                <AnimatePresence mode="wait">
                  {isFlipped ? (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: 90 }}
                      transition={{ duration: 0.4 }}
                      className="text-xl text-indigo-800"
                    >
                      {currentCard.answer}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="question"
                      initial={{ opacity: 0, rotateY: -90 }}
                      animate={{ opacity: 1, rotateY: 0 }}
                      exit={{ opacity: 0, rotateY: 90 }}
                      transition={{ duration: 0.4 }}
                      className="text-2xl font-semibold text-indigo-800"
                    >
                      {currentCard.question}
                    </motion.p>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-between items-center">
        <Button onClick={() => handleDifficulty("fail")} variant="destructive" className="flex-1 mr-2">
          Fail (Retry)
        </Button>
        <Button
          onClick={() => handleDifficulty("hard")}
          variant="default"
          className="flex-1 mr-2 bg-red-500 hover:bg-red-600 text-white"
        >
          Hard (1 day)
        </Button>
        <Button
          onClick={() => handleDifficulty("medium")}
          variant="default"
          className="flex-1 mx-2 bg-yellow-500 hover:bg-yellow-600 text-white"
        >
          Medium (3 days)
        </Button>
        <Button
          onClick={() => handleDifficulty("easy")}
          variant="secondary"
          className="flex-1 ml-2 bg-green-500 hover:bg-green-600 text-white"
        >
          Easy (1 week)
        </Button>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleFlip} variant="outline" className="flex items-center">
          <RotateCcw className="mr-2 h-4 w-4" /> Flip
        </Button>
      </div>
    </div>
  )
}

