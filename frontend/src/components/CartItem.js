import "../styles/components/CartItem.scss";
import { CurrencyConverter } from "../utils/CurrencyConverter";
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
        <div className="product-qty">{item?.qty}</div>
      </div>
    </div>
  );
};

export default CartItem;
