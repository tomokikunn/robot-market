import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/components/RobotNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const RobotNavbar = (props) => {
  const { onCartClicked, cartItemsCount } = props;
  return (
    <Navbar className="main-navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <span className="brand-text">Robot Market</span>
          <p className="brand-desc">Get Yourself a new robot today</p>
        </Navbar.Brand>
        <Button className="cart-btn" onClick={onCartClicked}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItemsCount > 0 && (
            <div className="item-count">{cartItemsCount}</div>
          )}
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default RobotNavbar;
