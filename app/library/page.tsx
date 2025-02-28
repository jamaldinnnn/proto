import LibraryCategories from "../components/LibraryCategories"
import Layout from "../components/Layout"

export default function LibraryPage() {
  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          Asthma Learning Library
        </h1>
        <LibraryCategories />
      </div>
    </Layout>
  )
}

