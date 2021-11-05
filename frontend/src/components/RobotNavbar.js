import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/components/RobotNavbar.scss";

const RobotNavbar = (props) => {
  const { onCartClicked } = props;
  return (
    <Navbar className="main-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <span className="brand-text">Robot Market</span>
          <p className="brand-desc">Get Yourself a new robot today</p>
        </Navbar.Brand>
        <Button variant="primary" onClick={onCartClicked}>
          <i className="fas fa-shopping-cart"></i>
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
      </Nav>
    </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default RobotNavbar;
