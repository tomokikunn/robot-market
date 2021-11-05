import { Modal } from "react-bootstrap";
import "../styles/components/CartModal.scss";
const CartModal = (props) => {
  const { show, handleClose, cartItems } = props;
  return (
    <Modal show={show} onHide={handleClose} className={"right cart-modal"}>
      <Modal.Header closeButton>
        <Modal.Title className="cart-title">Items in cart</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default CartModal;
