import { useState } from "react";                 
import { sections } from "./sections";
import "./NavMenu.css";

type NavMenuProps = {
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
};

export function NavMenu({ currentLessonId, onSelectLesson }: NavMenuProps) {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);   

  function toggleSection(id: string) {                                    
    setOpenSectionId((prev) => (prev === id ? null : id));
  }

  function selectLesson(id: string) {                                  
    onSelectLesson(id);
    setOpenSectionId(null);
  }

  return (
    <nav className="app-nav">
      {sections.map((section) => (
        <div key={section.id} className="nav-section">
          <button                                                          
            type="button"
            className="nav-section-button"
            onClick={() => toggleSection(section.id)}
          >
            {section.title} ▾
          </button>

          {openSectionId === section.id && (                       
            <div className="nav-dropdown">
              {section.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  type="button"
                  className={currentLessonId === lesson.id ? "nav-lesson active" : "nav-lesson"}
                  onClick={() => selectLesson(lesson.id)}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}