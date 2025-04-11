import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/EnrolledCoursePage.css';
import { ProgressBar, Button, Tab, Nav, Accordion } from 'react-bootstrap';

const modules = [
  {
    title: 'Module 1: Web Development Fundamentals',
    lessons: '12 lessons',
    hours: '10 hours',
    topics: [
      { title: 'Introduction to HTML5', preview: true, watch: true },
      { title: 'CSS Fundamentals', preview: true, watch: true },
      { title: 'CSS Layout and Flexbox' },
      { title: 'Responsive Design Principles' },
      { title: 'JavaScript Basics' },
    ],
  },
  {
    title: 'Module 2: Frontend Development with React',
    lessons: '15 lessons',
    hours: '12 hours',
    topics: [
      { title: 'React Components' },
      { title: 'Props and State' },
      { title: 'React Hooks' },
    ],
  },
  {
    title: 'Module 3: Backend Development with Node.js',
    lessons: '14 lessons',
    hours: '11 hours',
    topics: [
      { title: 'Node.js Basics' },
      { title: 'Express.js Setup' },
      { title: 'REST API Development' },
    ],
  },
  {
    title: 'Module 4: Full Stack Integration',
    lessons: '10 lessons',
    hours: '8 hours',
    topics: [
      { title: 'Connecting Frontend and Backend' },
      { title: 'Authentication Flows' },
      { title: 'Deployment Strategies' },
    ],
  },
];

export default function CoursePage() {
  return (
    <div className="container-fluid p-4 bg-light">
      <div className="row">
        <div className="col-md-8">
          <p className="text-muted mb-0">Courses &gt; Web Development</p>
          <h2 className="fw-bold">Full Stack Development Basics</h2>

          <div className="d-flex align-items-center text-muted my-2">
            <span className="me-3"><i className="bi bi-clock"></i> 24 hours of content</span>
            <span className="me-3"><i className="bi bi-files"></i> 4 modules</span>
            <span><i className="bi bi-people"></i> Active community</span>
          </div>

          <div className="p-3 border rounded bg-white my-3">
            <div>
              <p className="mb-1 fw-medium">Course Progress</p>
              <ProgressBar now={45} label={`45%`} className="mb-3" />
            </div>
            <div>
              <p className="mb-1 fw-medium">Attendance</p>
              <ProgressBar now={85} label={`85%`} />
              <p className="text-muted small mt-1">20.5 of 24 hours attended</p>
            </div>
            <Button variant="dark" className="mt-3 w-100">
              <i className="bi bi-play-circle me-2"></i> Continue Learning
            </Button>
          </div>

          <div className="bg-white rounded mt-4 border">
            <Nav variant="tabs" defaultActiveKey="lesson" className="px-3">
              <Nav.Item>
                <Nav.Link eventKey="lesson">Lesson</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notes">Notes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="assignments">Assignments</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="discussion">Discussion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="downloads">Downloads</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>

        <div className="col-md-4 course-sidebar">
          <div className="bg-white p-3 rounded border">
            <h5 className="fw-bold">Course Content</h5>
            <p className="text-muted mb-1">4 modules • {modules.reduce((acc, m) => acc + m.topics.length, 0)} lessons</p>
            <p className="text-muted">20.5 of 24 hours attended</p>
            <ProgressBar now={85} label={`85%`} className="mb-3" />

            <Accordion defaultActiveKey="0">
              {modules.map((module, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{module.title}</Accordion.Header>
                  <Accordion.Body>
                    <ul className="list-unstyled">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="d-flex align-items-center mb-1">
                          {topic.watch ? (
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                          ) : (
                            <i className="bi bi-circle me-2"></i>
                          )}
                          {topic.title}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
