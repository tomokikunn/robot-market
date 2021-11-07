import React, { useEffect, useState } from "react";
import "./styles/pages/home.scss";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
import axios from "axios";
import ProductItem from "./components/ProductItem";
import { useRecoilState } from "recoil";
import { currentCartState } from "./atoms/currentCartState";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useRecoilState(currentCartState);

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/robots");
    setProducts(response?.data?.data);
  };

  const onAddToCart = (item) => {
    const existingItemInCart = cartItems.find((v) => v.name === item.name);
    if (existingItemInCart == undefined) {
      if (cartItems?.length >= 5) {
        window.alert("The robot is exceed 5 items");
        return;
      } else {
        let newCart = [...cartItems];
        newCart.push({ ...item, qty: 1 });
        setCartItems(newCart);
        return;
      }
    } else {
      modifyCart(item, 1);
    }
  };

  const modifyCart = (item, amount) => {
    const newCart = cartItems?.map((cartItem) => {
      if (cartItem?.name == item?.name) {
        if (cartItem?.qty + amount > item?.stock) {
          //check if the item in cart is exceeding stock
          window.alert(
            `The currently selected robot is exceeding the stock quantity, stock ${item?.stock} : selected in cart ${cartItem?.qty}`
          );
        } else if (cartItem?.qty + amount <= 0) {
          return null;
        } else {
          cartItem = { ...cartItem, qty: cartItem["qty"] + amount };
        }
      }
      return cartItem;
    });
    setCartItems(newCart.filter((v) => v !== null));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="App Homepage">
      <RobotNavbar
        onCartClicked={() => setShowCartModal(true)}
        cartItemsCount={Object.entries(cartItems)?.length}
      />
      <CartModal
        show={showCartModal}
        handleClose={() => setShowCartModal(false)}
        cartItems={cartItems}
        handleQuantityChange={modifyCart}
      />
      <div className="main-content container">
        <div className="row product-container">
          {products !== undefined &&
          products.length !== undefined &&
          products.length > 0 ? (
            products?.map((item) => (
              <div className="col-12 col-lg-6 product-column">
                <ProductItem productData={item} onAddToCart={onAddToCart} />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
