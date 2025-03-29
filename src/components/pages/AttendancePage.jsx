import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import AttendanceCard from "../AttendanceCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav } from "react-bootstrap";
import "../styles/Customstyles.css";// Import custom CSS

const AttendancePage = () => {
  return (
    <Container className="mt-3">
      <div className="attendance-container">
        <AttendanceCard />
      </div>
    </Container>
  );
};

export default AttendancePage;
