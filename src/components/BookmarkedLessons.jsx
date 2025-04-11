import { Card, Button } from "react-bootstrap";
import { BsBookmarkFill, BsBook, BsFileEarmarkText } from "react-icons/bs";
import "./styles/BookmarkedLessons.css";

const lessons = [
  {
    id: 1,
    title: "CSS Grid Layout Techniques",
    module: "Web Development Fundamentals • Module 3",
    icon: <BsBook />,
  },
  {
    id: 2,
    title: "User Research Methods",
    module: "UX Design Principles • Module 2",
    icon: <BsFileEarmarkText />,
  },
  {
    id: 3,
    title: "JavaScript Promises and Async/Await",
    module: "Web Development Fundamentals • Module 5",
    icon: <BsBook />,
  },
];

const BookmarkedLessons = () => {
  return (
    <Card className="p-4 shadow-sm rounded-4 mt-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold mb-0">Bookmarked Lessons</h5>
        <Button variant="link" className="p-0 text-decoration-none fw-semibold viewalltext">
          View All &nbsp;&gt;
        </Button>
      </div>
      <p className="text-muted small mb-3">
        Quick access to your saved content
      </p>
      <div className="d-flex flex-column gap-3">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="bookmark-card p-3 d-flex flex-row align-items-center justify-content-between rounded-3">
            <div className="d-flex align-items-start gap-3">
              <div className="icon-box">{lesson.icon}</div>
              <div>
                <div className="fw-semibold">{lesson.title}</div>
                <div className="text-muted small">{lesson.module}</div>
              </div>
            </div>
            <BsBookmarkFill className="bookmark-icon" />
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default BookmarkedLessons;
