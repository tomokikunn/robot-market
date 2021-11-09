import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { CartFunctions } from "../func/CartFunctions";
import "../styles/components/CartModal.scss";
import { CurrencyConverter } from "../utils/CurrencyConverter";
import CartItem from "./CartItem";
const CartModal = (props) => {
  const {
    show,
    handleClose,
    cartItems,
    setCartItems,
    totalAmount,
    totalPrice,
  } = props;
  return (
    <Modal show={show} onHide={handleClose} className={"right cart-modal"}>
      <Modal.Header closeButton>
        <Modal.Title className="cart-title">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems !== undefined &&
        cartItems.length !== undefined &&
        cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index}>
              <CartItem
                item={item}
                handleQuantityChange={(item, amount) =>
                  CartFunctions.modifyCart(
                    cartItems,
                    setCartItems,
                    item,
                    amount
                  )
                }
              />
            </div>
          ))
        ) : (
          <div className="empty-cart-container">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            <div className="empty-cart-message">The cart is empty</div>
          </div>
        )}
      </Modal.Body>
      {totalAmount !== 0 && (
        <Modal.Footer>
          <div className="row summary-row">
            <div className="col-12 col-lg-6 summary-column amount-column">
              <div className="summary-amount-text">{`${totalAmount} ${
                totalAmount > 1 ? "items" : "item"
              }`}</div>
            </div>
            <div className="col-12 col-lg-6 summary-column price-column">
              <div className="summary-price-text">{`${CurrencyConverter(
                totalPrice
              )}`}</div>
            </div>
          </div>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CartModal;
