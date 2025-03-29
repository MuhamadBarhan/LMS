import React from "react";
import { Container, Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import "../components/styles/Assessments.css"; // Custom styles

const assessments = [
    {
        title: "Git and GitHub - Assessment",
        date: "Mar 15, 2025",
        time: "10.00 AM",
        questions: 20,
        accuracy: 85,
        answered: "19/20",
    },
    {
        title: "JavaScript Fundamentals",
        date: "Mar 15, 2025",
        time: "10.00 AM",
        questions: 20,
        accuracy: 85,
        answered: "19/20",
    },
    {
        title: "Figma UI UX Design",
        date: "Mar 15, 2025",
        time: "10.00 AM",
        questions: 20,
        accuracy: 90,
        answered: "19/20",
    },
];

const Assessments = () => {
    return (
        <Container>
            <Row className="justify-content-center customRow">
                <Col md={10}>
                    {assessments.map((item, index) => (
                        <Card key={index} className="assessment-card">
                            <Card.Body>
                                <Row>
                                    <Col md={8}>
                                        <h5 className="assessment-title">{item.title}</h5>
                                        <p className="assessment-info">
                                            Finished • {item.date} • {item.time} • {item.questions} Questions
                                        </p>
                                    </Col>
                                    <Col md={4} className="text-md-end text-center">
                                        <div className="accuracy">
                                            <p>Accuracy</p>
                                            <ProgressBar now={item.accuracy} className="accuracy-bar" />
                                            <p className="accuracy-percentage">{item.accuracy}%</p>

                                        </div>
                                        <p className="answered">Answered <b>{item.answered}</b></p>
                                        <Button variant="info" className="retake-btn">Retake Quiz</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Assessments;
