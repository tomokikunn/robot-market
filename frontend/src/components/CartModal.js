import { Modal } from "react-bootstrap";
import "../styles/components/CartModal.scss";
import CartItem from "./CartItem";
const CartModal = (props) => {
  const { show, handleClose, cartItems, handleQuantityChange } = props;
  return (
    <Modal show={show} onHide={handleClose} className={"right cart-modal"}>
      <Modal.Header closeButton>
        <Modal.Title className="cart-title">Items in cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems !== undefined &&
          cartItems.length !== undefined &&
          cartItems.length > 0 &&
          cartItems.map((item) => (
            <CartItem item={item} handleQuantityChange={handleQuantityChange} />
          ))}
      </Modal.Body>
      <Modal.Footer>
        <div>{cartItems?.length} items : </div>
        <div>$902,202 THB</div>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
