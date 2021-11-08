import React, { useEffect, useState } from "react";
import "./styles/pages/home.scss";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
import axios from "axios";
import ProductItem from "./components/ProductItem";
import { useRecoilState } from "recoil";
import { currentCartState } from "./atoms/currentCartState";
import { CartFunctions } from "./func/CartFunctions";
import Loading from "./components/Loading";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useRecoilState(currentCartState);

  const getAllProducts = async () => {
    setIsLoading(true);
    const response = await axios.get("http://localhost:8000/api/robots");
    setProducts(response?.data?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="App Homepage">
      <RobotNavbar
        onCartClicked={() => setShowCartModal(true)}
        cartItemsCount={CartFunctions.getTotalAmount(cartItems)?.qty}
      />
      <CartModal
        show={showCartModal}
        handleClose={() => setShowCartModal(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalAmount={CartFunctions.getTotalAmount(cartItems)?.qty}
        totalPrice={CartFunctions.getTotalAmount(cartItems)?.price}
      />
      <Loading show={isLoading} />
      <div className="main-content container">
        <div className="row product-container">
          {products !== undefined &&
          products.length !== undefined &&
          products.length > 0 ? (
            products?.map((item) => (
              <div className="col-12 col-lg-6 product-column">
                <ProductItem
                  productData={item}
                  onAddToCart={(item) =>
                    CartFunctions.onAddToCart(cartItems, setCartItems, item)
                  }
                />
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
