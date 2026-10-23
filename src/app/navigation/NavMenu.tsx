import { sections } from "./sections";

type NavMenuProps = {
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
};

export function NavMenu({ currentLessonId, onSelectLesson }: NavMenuProps) {
  return (
    <nav className="app-nav">
      {sections.map((section) => (
        <div key={section.id} className="nav-section">
          <span className="nav-section-title">{section.title}</span>

          {section.lessons.map((lesson) => (
            <button
              key={lesson.id}
              type="button"
              className={currentLessonId === lesson.id ? "nav-lesson active" : "nav-lesson"}
              onClick={() => onSelectLesson(lesson.id)}
            >
              {lesson.title}
            </button>
          ))}
        </div>
      ))}
    </nav>
  );
}