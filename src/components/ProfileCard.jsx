import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../components/styles/Customstyles.css"; // Import CSS
import { Card, Row, Col } from "react-bootstrap";

const ProfileCard = ({userDetails}) => {
  return (
    <Card className="profile-card">
      <Row className="align-items-center">
        {/* Profile Avatar - Left */}
        <Col xs="auto" className="text-center">
          <div className="profile-avatar">A</div>
        </Col>

        {/* Profile Details - Just next to avatar */}
        <Col xs="auto" className="profile-details">
          <h4 className="profile-name">{userDetails.name}</h4>
          <p className="profile-role">{userDetails.userRole}</p>
        </Col>

        {/* Profile Info - Right-aligned */}
        <Col className="profile-info text-end">
          <p>{`Email: ${userDetails.email}`}</p>
          <p>{`Education: ${userDetails.education}`}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
