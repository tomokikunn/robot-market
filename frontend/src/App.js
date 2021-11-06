import React, { useEffect, useState } from "react";
import "./styles/pages/home.scss";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
import axios from "axios";
import ProductItem from "./components/ProductItem";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/robots");
    setProducts(response?.data?.data);
  };

  const onAddToCart = (item) => {
    let newCart = Object.assign([], cartItems);
    const foundInCart = newCart.find((v) => v?.name === item?.name);
    const currentItemIndex = newCart.indexOf(foundInCart);
    if (newCart?.length >= 5 && foundInCart === undefined) {
      //check if the entries is more than 5 and currently not in cart
      window.alert("The robot is exceed 5 items");
      return;
    } else if (foundInCart?.qty + 1 > item?.stock) {
      //check if the item in cart is exceeding stock
      window.alert(
        `The currently selected robot is exceeding the stock quantity, stock ${item?.stock} : selected in cart ${foundInCart?.qty}`
      );
      return;
    } else {
      if (currentItemIndex === -1) {
        newCart = [...newCart, { ...item, qty: 1 }];
      } else {
        newCart[currentItemIndex].qty += 1;
      }
    }
    setCartItems(newCart);
  };

  const handleQuantityChange = (item, type) => {
    console.log(item, type);
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
        handleQuantityChange={handleQuantityChange}
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
