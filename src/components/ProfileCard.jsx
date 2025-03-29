import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/styles/Customstyles.css"; // Import CSS
import { Card, Row, Col } from "react-bootstrap";

const ProfileCard = () => {
  return (
    <Card className="profile-card">
      <Row className="align-items-center">
        {/* Profile Avatar - Left */}
        <Col xs="auto" className="text-center">
          <div className="profile-avatar">A</div>
        </Col>

        {/* Profile Details - Just next to avatar */}
        <Col xs="auto" className="profile-details">
          <h4 className="profile-name">Aswin R C</h4>
          <p className="profile-role">Student</p>
        </Col>

        {/* Profile Info - Right-aligned */}
        <Col className="profile-info text-end">
          <p>Email: rcaswin6@gmail.com</p>
          <p>Education: B.Tech IT</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
