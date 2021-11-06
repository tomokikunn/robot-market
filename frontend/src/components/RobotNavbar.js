import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "../styles/components/RobotNavbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const RobotNavbar = (props) => {
  const { onCartClicked, cartItemsCount } = props;
  return (
    <Navbar className="main-navbar" expand="lg">
      <Container>
        <Navbar.Brand>
          <span className="brand-text">Robot Market</span>
        </Navbar.Brand>
        <Button className="cart-btn" onClick={onCartClicked}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartItemsCount > 0 && (
            <div className="item-count">{cartItemsCount}</div>
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default RobotNavbar;
