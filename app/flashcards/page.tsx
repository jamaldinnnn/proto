import FlashcardArea from "../components/FlashcardArea"
import Layout from "../components/Layout"

export default function FlashcardPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Asthma Flashcards</h1>
      <p className="text-center text-gray-600 mb-4">Rate your understanding to optimize your learning!</p>
      <p className="text-center text-gray-600 mb-4">The buttons show when you'll see this card again.</p>
      <FlashcardArea />
    </Layout>
  )
}

