import React, { useEffect, useState } from "react";
import "./styles/pages/home.scss";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
import axios from "axios";
import ProductItem from "./components/ProductItem";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState({});

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/robots");
    setProducts(response?.data?.data);
  };

  const onAddToCart = (item) => {
    const currentCart = Object.assign({}, itemsInCart);
    //check if the entries is more than 5 and currently not in cart
    if (
      Object.entries(currentCart)?.length >= 5 &&
      currentCart[item.name] === undefined
    ) {
      window.alert("Exceed 5 items");
      return;
    }
    //check if the item in cart is exceeding stock
    const currentQuantityInCart = currentCart[item.name] ?? 0;
    if (currentQuantityInCart >= item?.stock) {
      return;
    }
    const newCart = { ...currentCart, [item.name]: currentQuantityInCart + 1 };
    setItemsInCart(newCart);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="App Homepage">
      <RobotNavbar
        onCartClicked={() => setShowCartModal(true)}
        cartItemsCount={Object.entries(itemsInCart)?.length}
      />
      <CartModal
        show={showCartModal}
        handleClose={() => setShowCartModal(false)}
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
