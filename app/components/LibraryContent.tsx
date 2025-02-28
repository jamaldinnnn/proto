import { useState } from "react"
import { libraryResources } from "../data/libraryResources"

export default function LibraryContent() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredResources =
    activeTab === "all" ? libraryResources : libraryResources.filter((resource) => resource.type === activeTab)

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab("all")}>All</button>
        <button onClick={() => setActiveTab("book")}>Books</button>
        <button onClick={() => setActiveTab("article")}>Articles</button>
      </div>
      <ul>
        {filteredResources.map((resource) => (
          <li key={resource.id}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

