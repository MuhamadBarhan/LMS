import React, { useState } from "react";
import { CourseProvider } from "../../context/CourseContext";
import VideoPlayer from "../../components/VideoPlayer";
import ModuleList from "../../components/ModuleList";
import AttendanceCalendar from "../../components/AttendanceCalendar";
import AssessmentModal from "../../components/AssessmentModal";
import AITutor from "../../components/AITutor";
import { useCourse } from "../../context/CourseContext";
import { 
  GraduationCap, 
  CalendarDays, 
  BookOpen, 
  ListChecks, 
  Calendar, 
  Clock, 
  FileText, 
  MessageSquare, 
  Users, 
  Award,
  Bookmark,
  CheckSquare,
  Star,
  ThumbsUp
} from "lucide-react";
import BreadcrumbNav from "../../components/BreadcrumbNav";
import ResourceCategorized from "../../components/ResourceCategorized";
import LearningObjectives from "../../components/LearningObjectives";
import DiscussionSection from "../../components/DiscussionSection";
import { format, parseISO } from "date-fns";

const NotesPanel = () => {
  const { currentLesson, isNotesOpen, progress, addNote, updateNote, deleteNote } = useCourse();
  const [noteContent, setNoteContent] = useState('');
  const [editing, setEditing] = useState(false);
  const [currentEditingNote, setCurrentEditingNote] = useState(null);
  
  if (!isNotesOpen) return null;
  
  const lessonNotes = currentLesson 
    ? progress.notes.filter(note => note.lessonId === currentLesson.id)
    : [];
  
  const handleAddNote = () => {
    if (!noteContent.trim()) return;
    addNote(noteContent);
    setNoteContent('');
  };
  
  const handleUpdateNote = (noteId) => {
    if (!noteContent.trim()) return;
    updateNote(noteId, noteContent);
    setNoteContent('');
    setEditing(false);
    setCurrentEditingNote(null);
  };
  
  const startEditing = (note) => {
    setNoteContent(note.content);
    setEditing(true);
    setCurrentEditingNote(note.id);
  };
  
  return (
    <div className="card mt-4 border-0 shadow-sm">
      <div className="card-header bg-white border-bottom-0 pb-0">
        <h5 className="card-title mb-1">My Notes</h5>
        <p className="card-text text-muted small">
          Add personal notes for this lesson
        </p>
      </div>
      <div className="card-body pt-0">
        <div className="mb-3">
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Add a note about this lesson..."
            className="form-control mb-2"
            rows="4"
          />
          <div className="d-flex justify-content-end">
            {editing ? (
              <div className="btn-group">
                <button 
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => {
                    setNoteContent('');
                    setEditing(false);
                    setCurrentEditingNote(null);
                  }}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => currentEditingNote && handleUpdateNote(currentEditingNote)}
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <button className="btn btn-primary btn-sm" onClick={handleAddNote}>
                Add Note
              </button>
            )}
          </div>
        </div>
        
        {lessonNotes.length > 0 && (
          <div className="mt-3">
            <h6 className="text-muted mb-2">Your Notes</h6>
            {lessonNotes.map((note) => (
              <div key={note.id} className="card mb-2 border">
                <div className="card-body p-3">
                  <p className="card-text small mb-2">{note.content}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      {format(parseISO(note.updatedAt), 'MMM d, yyyy h:mm a')}
                    </small>
                    <div>
                      <button 
                        className="btn btn-sm btn-link text-primary p-0 me-2"
                        onClick={() => startEditing(note)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-link text-danger p-0"
                        onClick={() => deleteNote(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const QuestionSection = () => {
  const { currentLesson, questions, submitQuestion, submitAnswer, upvoteQuestion, upvoteAnswer } = useCourse();
  const [newQuestionText, setNewQuestionText] = useState('');
  const [replyingToId, setReplyingToId] = useState(null);
  const [answerText, setAnswerText] = useState('');
  const [showNewQuestion, setShowNewQuestion] = useState(false);
  
  if (!currentLesson) return null;
  
  const lessonQuestions = questions.filter(q => q.lessonId === currentLesson.id);
  
  const handleSubmitQuestion = () => {
    if (newQuestionText.trim()) {
      submitQuestion(newQuestionText);
      setNewQuestionText('');
      setShowNewQuestion(false);
    }
  };
  
  const handleSubmitAnswer = (questionId) => {
    if (answerText.trim()) {
      submitAnswer(questionId, answerText);
      setAnswerText('');
      setReplyingToId(null);
    }
  };
  
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 d-flex align-items-center">
          <MessageSquare className="text-primary me-2" size={18} />
          Questions & Answers
        </h5>
        <button 
          className="btn btn-primary btn-sm"
          onClick={() => setShowNewQuestion(!showNewQuestion)}
        >
          Ask a Question
        </button>
      </div>
      
      {showNewQuestion && (
        <div className="card mb-3 border-0 shadow-sm">
          <div className="card-body">
            <textarea
              placeholder="What's your question about this lesson?"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              className="form-control mb-2"
              rows="3"
            />
            <div className="d-flex justify-content-end gap-2">
              <button 
                className="btn btn-outline-secondary btn-sm"
                onClick={() => setShowNewQuestion(false)}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary btn-sm"
                onClick={handleSubmitQuestion}
                disabled={!newQuestionText.trim()}
              >
                Submit Question
              </button>
            </div>
          </div>
        </div>
      )}
      
      {lessonQuestions.length === 0 ? (
        <div className="card border-0 bg-light">
          <div className="card-body text-center py-4">
            <p className="text-muted mb-0">
              No questions for this lesson yet. Ask a question to get help from instructors and peers.
            </p>
          </div>
        </div>
      ) : (
        <div className="gap-3 d-flex flex-column">
          {lessonQuestions.map(question => (
            <div key={question.id} className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div className="p-3 pb-2">
                  <div className="d-flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <span className={`badge ${question.resolved ? 'bg-success' : 'bg-secondary'}`}>
                        {question.resolved ? "Resolved" : "Open"}
                      </span>
                    </div>
                    
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between mb-1">
                        <div className="d-flex align-items-center text-muted small gap-2">
                          <span className="fw-medium text-dark">{question.userName}</span>
                          <span>•</span>
                          <span>{format(parseISO(question.createdAt), 'MMM d, yyyy')}</span>
                        </div>
                        
                        <button 
                          className="btn btn-sm btn-link text-muted p-0"
                          onClick={() => upvoteQuestion(question.id)}
                        >
                          <ThumbsUp size={14} className="me-1" />
                          {question.upvotes}
                        </button>
                      </div>
                      
                      <p className="mb-2">{question.content}</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-top p-3 bg-light">
                  <div className="d-flex flex-column gap-3">
                    {question.answers && question.answers.map(answer => (
                      <div 
                        key={answer.id} 
                        className={`card ${answer.isInstructor ? 'border-primary bg-primary-light' : 'border-light'}`}
                      >
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex align-items-center small gap-2">
                              <span className="fw-medium">{answer.userName}</span>
                              {answer.isInstructor && (
                                <span className="badge bg-primary">Instructor</span>
                              )}
                              <span className="text-muted">•</span>
                              <span className="text-muted">
                                {format(parseISO(answer.createdAt), 'MMM d, yyyy')}
                              </span>
                            </div>
                            
                            <button 
                              className="btn btn-sm btn-link text-muted p-0"
                              onClick={() => upvoteAnswer(question.id, answer.id)}
                            >
                              <ThumbsUp size={14} className="me-1" />
                              {answer.upvotes}
                            </button>
                          </div>
                          <p className="mb-0 small">{answer.content}</p>
                        </div>
                      </div>
                    ))}
                    
                    {replyingToId === question.id ? (
                      <div className="mt-2">
                        <textarea
                          placeholder="Write your answer..."
                          value={answerText}
                          onChange={(e) => setAnswerText(e.target.value)}
                          className="form-control mb-2 small"
                          rows="3"
                        />
                        <div className="d-flex justify-content-end gap-2">
                          <button 
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => {
                              setReplyingToId(null);
                              setAnswerText('');
                            }}
                          >
                            Cancel
                          </button>
                          <button 
                            className="btn btn-primary btn-sm"
                            onClick={() => handleSubmitAnswer(question.id)}
                            disabled={!answerText.trim()}
                          >
                            Post Answer
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button 
                        className="btn btn-outline-secondary btn-sm align-self-start"
                        onClick={() => setReplyingToId(question.id)}
                      >
                        Answer
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CourseContent = () => {
  const { 
    modules: coursesModules, 
    currentLesson, 
    currentModule, 
    assessments, 
    courseMetadata,
    progress,
    isResourcesOpen,
    isNotesOpen,
    toggleBookmark,
    isBookmarked,
    downloadCertificate
  } = useCourse();
  
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-4">
        <BreadcrumbNav />
        
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
              <div>
                <h1 className="h2 mb-1">
                  {currentModule?.title || "Course Content"}
                </h1>
                {currentModule?.description && (
                  <p className="text-muted mb-0 small">
                    {currentModule.description}
                  </p>
                )}
              </div>
              
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary bg-opacity-10 text-primary d-flex align-items-center">
                  <Calendar size={14} className="me-1" />
                  {courseMetadata.startDate && format(parseISO(courseMetadata.startDate), 'MMM d')} - 
                  {courseMetadata.endDate && format(parseISO(courseMetadata.endDate), 'MMM d, yyyy')}
                </span>
                
                <span className="badge bg-success bg-opacity-10 text-success">
                  {courseMetadata.skillLevel.charAt(0).toUpperCase() + courseMetadata.skillLevel.slice(1)}
                </span>
              </div>
            </div>
            
            {currentLesson && (
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h2 className="h4 mb-1">{currentLesson.title}</h2>
                    <div className="d-flex align-items-center gap-2">
                      {currentLesson.completed && (
                        <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center">
                          <CheckSquare size={12} className="me-1" />
                          Completed
                        </span>
                      )}
                      {currentLesson.hasAssessment && (
                        <span className="badge bg-info bg-opacity-10 text-info">
                          Assessment Available
                        </span>
                      )}
                      <button 
                        className="btn btn-sm btn-link p-0"
                        onClick={() => toggleBookmark(currentLesson.id)}
                      >
                        <Bookmark 
                          size={16} 
                          className={isBookmarked(currentLesson.id) ? "text-warning fill-warning" : "text-muted"} 
                        />
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center text-muted small">
                    <Clock size={14} className="me-1" />
                    {Math.floor(currentLesson.duration / 60)} min
                  </div>
                </div>
              </div>
            )}
            
            <VideoPlayer />
            
            {currentLesson && currentLesson.description && (
              <LearningObjectives />
            )}
            
            {isResourcesOpen && <ResourceCategorized />}
            {isNotesOpen && <NotesPanel />}
            
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0">
                <h3 className="h5 mb-0">Course Information</h3>
              </div>
              <div className="card-body">
                <ul className="nav nav-tabs mb-4" id="courseTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="modules-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#modules"
                      type="button"
                      role="tab"
                    >
                      <BookOpen size={16} className="me-1" />
                      Modules
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="assessments-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#assessments"
                      type="button"
                      role="tab"
                    >
                      <ListChecks size={16} className="me-1" />
                      Assessments
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="progress-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#progress"
                      type="button"
                      role="tab"
                    >
                      <GraduationCap size={16} className="me-1" />
                      Progress
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="discussions-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#discussions"
                      type="button"
                      role="tab"
                    >
                      <Users size={16} className="me-1" />
                      Discussions
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="qa-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#qa"
                      type="button"
                      role="tab"
                    >
                      <MessageSquare size={16} className="me-1" />
                      Q&A
                    </button>
                  </li>
                </ul>
                
                <div className="tab-content" id="courseTabsContent">
                  <div className="tab-pane fade show active" id="modules" role="tabpanel">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <h4 className="h6 mb-3">About This Course</h4>
                        <p className="small text-muted mb-4">
                          {courseMetadata.description}
                        </p>
                        
                        <div className="row">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <h5 className="h6 mb-2">Prerequisites</h5>
                            <ul className="small text-muted ps-3">
                              {courseMetadata.prerequisites.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <h5 className="h6 mb-2">Target Audience</h5>
                            <ul className="small text-muted ps-3">
                              {courseMetadata.targetAudience.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <h5 className="h6 mb-2">Instructor</h5>
                          <div className="d-flex align-items-center gap-3 p-3 bg-white rounded">
                            <img 
                              src={courseMetadata.instructorImage} 
                              alt={courseMetadata.instructorName}
                              className="rounded-circle"
                              width="40"
                              height="40"
                            />
                            <div>
                              <h6 className="mb-0">{courseMetadata.instructorName}</h6>
                              <p className="small text-muted mb-0">
                                {courseMetadata.instructorBio}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-pane fade" id="assessments" role="tabpanel">
                    <div className="mb-3">
                      <p className="small text-muted">
                        Complete each lesson's assessment to progress through the course. 
                        A passing score of 80% or higher is required to mark a lesson as complete.
                      </p>
                    </div>
                    
                    <div className="row g-3">
                      {assessments.map(assessment => {
                        const result = progress.assessmentResults[assessment.id];
                        
                        return (
                          <div key={assessment.id} className="col-md-6">
                            <div className="card border-0 shadow-sm h-100">
                              <div className={`card-top-border ${result?.completed ? (result.score >= 80 ? 'bg-success' : 'bg-danger') : 'bg-secondary'}`}></div>
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <h5 className="h6 mb-1">{assessment.title}</h5>
                                    <div className="d-flex align-items-center gap-2 small text-muted">
                                      <span className="badge bg-light text-dark">
                                        <Calendar size={12} className="me-1" />
                                        Due {format(parseISO(assessment.dueDate), 'MMM d')}
                                      </span>
                                      <span>{assessment.questions.length} questions</span>
                                    </div>
                                  </div>
                                  
                                  {result?.completed && (
                                    <span className={`badge ${result.score >= 80 ? 'bg-success' : 'bg-danger'}`}>
                                      {result.score}%
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="tab-pane fade" id="progress" role="tabpanel">
                    <div className="card border-0 bg-light">
                      <div className="card-body">
                        <h4 className="h6 mb-3">Your Progress</h4>
                        
                        {currentModule && (
                          <div className="mb-4">
                            <div className="mb-3">
                              <div className="d-flex justify-content-between mb-1 small">
                                <span>Current Module</span>
                                <span>
                                  {currentModule.lessons.filter(l => progress.completedLessons.includes(l.id)).length}/{currentModule.lessons.length} lessons
                                </span>
                              </div>
                              <div className="progress" style={{ height: '6px' }}>
                                <div 
                                  className="progress-bar bg-primary" 
                                  style={{ 
                                    width: `${currentModule.lessons.filter(l => progress.completedLessons.includes(l.id)).length / currentModule.lessons.length * 100}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                            
                            <div>
                              <div className="d-flex justify-content-between mb-1 small">
                                <span>Overall Progress</span>
                                <span>
                                  {progress.completedLessons.length}/{coursesModules.flatMap(m => m.lessons).length} lessons
                                </span>
                              </div>
                              <div className="progress" style={{ height: '6px' }}>
                                <div 
                                  className="progress-bar bg-primary" 
                                  style={{ 
                                    width: `${progress.completedLessons.length / coursesModules.flatMap(m => m.lessons).length * 100}%` 
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {courseMetadata.certificateAvailable && (
                          <div className="d-flex align-items-center justify-content-between p-3 bg-white border rounded">
                            <div className="d-flex align-items-center gap-3">
                              <Award size={24} className="text-primary" />
                              <div>
                                <h5 className="h6 mb-0">Course Certificate</h5>
                                <p className="small text-muted mb-0">
                                  Complete all lessons to earn your certificate
                                </p>
                              </div>
                            </div>
                            
                            <button 
                              className="btn btn-outline-primary btn-sm"
                              disabled={progress.completedLessons.length < coursesModules.flatMap(m => m.lessons).length}
                              onClick={downloadCertificate}
                            >
                              {progress.completedLessons.length < coursesModules.flatMap(m => m.lessons).length
                                ? `${coursesModules.flatMap(m => m.lessons).length - progress.completedLessons.length} lessons left`
                                : "Download Certificate"
                              }
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-pane fade" id="discussions" role="tabpanel">
                    <DiscussionSection />
                  </div>
                  
                  <div className="tab-pane fade" id="qa" role="tabpanel">
                    <QuestionSection />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="d-none d-lg-flex align-items-center mb-3">
              <CalendarDays size={20} className="text-primary me-2" />
              <h3 className="h5 mb-0">My Learning</h3>
            </div>
            
            <ModuleList />
            <AttendanceCalendar />
          </div>
        </div>
        
        <AssessmentModal />
        <AITutor />
      </div>
    </div>
  );
};

const CoursePage = () => {
  return (
    <CourseProvider>
      <CourseContent />
    </CourseProvider>
  );
};

export default CoursePage;