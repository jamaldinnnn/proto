import Header from "../../components/Header"
import InteractiveResources from "../../components/InteractiveResources"

export default function InteractiveResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col bg-opacity-75 bg-[url('/game-pattern.svg')]">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-7xl bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border-4 border-indigo-300 p-6">
          <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Interactive/3D Resources</h1>
          <InteractiveResources />
        </div>
      </main>
    </div>
  )
}

