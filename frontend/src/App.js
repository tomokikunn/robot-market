import React, { useEffect, useState } from "react";
import "./styles/pages/home.scss";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
import axios from "axios";
import ProductItem from "./components/ProductItem";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get("http://localhost:8000/api/robots");
    setProducts(response?.data?.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div className="App Homepage">
      <RobotNavbar
        onCartClicked={() => setShowCartModal(true)}
        cartItemsCount={itemsInCart?.length}
      />
      <CartModal
        show={showCartModal}
        handleClose={() => setShowCartModal(false)}
      />
      <div className="main-content container-fluid">
        <div className="row">
          {products !== undefined &&
          products.length !== undefined &&
          products.length > 0 ? (
            products?.map((item) => (
              <div className="col-12 col-md-6 col-xl-4 product-column">
                <ProductItem productData={item} />
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
