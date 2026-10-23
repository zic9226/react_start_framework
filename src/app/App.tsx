import { useState } from "react";
import { sections } from "./navigation";
import "./App.css"


export default function App() {
  const [currentPage, setCurrentPage] = useState("quick-start");

  const allLessons = sections.flatMap(section => section.lessons);
  const currentLesson = allLessons.find(lesson => lesson.id === currentPage);
  const CurrentLesson = currentLesson?.component;
  

  return (
    <div className="app">
      <nav className="app-nav">
        {sections.map((section) => (
          <div key={section.id} className="nav-section">
            <span className="nav-section-title">{section.title}</span>

            {section.lessons.map((lesson) => (
              <button
                key={lesson.id}
                type="button"
                className={currentPage === lesson.id ? "nav-lesson active" : "nav-lesson"}
                onClick={() => setCurrentPage(lesson.id)}
              >
                {lesson.title}
              </button>
            ))}
          </div>
        ))}
      </nav>
      {CurrentLesson && <CurrentLesson />}
     
    </div>
  )
}