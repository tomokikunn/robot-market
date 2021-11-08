import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/components/CartItem.scss";
import { CurrencyConverter } from "../utils/CurrencyConverter";
import ItemAmountSpinner from "./ItemAmountSpinner";
const CartItem = (props) => {
  const { item, handleQuantityChange } = props;
  const itemPrice = CurrencyConverter(item?.price);
  const totalPrice = CurrencyConverter(item?.price * item?.qty);
  return (
    <div className="row cart-item">
      <div className="col-8 item-info-container">
        <div className="product-name">{item?.name}</div>
        <div className="product-price">{`${totalPrice}`}</div>
        <div className="product-price-times">{`(${itemPrice} x ${item?.qty})`}</div>
      </div>
      <div className="col-4 qty-container">
        <ItemAmountSpinner
          value={item?.qty}
          onDecrease={() => handleQuantityChange(item, -1)}
          onIncrease={() => handleQuantityChange(item, 1)}
        />
      </div>
    </div>
  );
};

export default CartItem;
