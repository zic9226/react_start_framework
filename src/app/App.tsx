import { useState } from "react";
import { NavMenu, sections } from "./navigation";
import "./App.css";

export default function App() {
  const [currentLessonId, setCurrentLessonId] = useState("quick-start");

  const allLessons = sections.flatMap((section) => section.lessons);
  const currentLesson = allLessons.find((lesson) => lesson.id === currentLessonId);
  const CurrentLesson = currentLesson?.component;

  return (
    <div className="app">
      <NavMenu
        currentLessonId={currentLessonId}
        onSelectLesson={setCurrentLessonId}
      />
      {CurrentLesson && <CurrentLesson />}
    </div>
  );
}