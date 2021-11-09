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
import RobotDropdown from "./components/RobotDropdown";
import { getMaterialLists } from "./utils/getMaterialLists";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useRecoilState(currentCartState);
  const [materialLists, setMaterialLists] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const getAllProducts = async () => {
    setIsLoading(true);
    const response = await axios
      .get("http://localhost:8000/api/robots")
      .catch((e) => console.log(e));
    const materials = getMaterialLists(response?.data?.data);
    setMaterialLists(["All", ...materials]);
    setProducts(response?.data?.data);
    setFilteredProducts(response?.data?.data);
    setIsLoading(false);
  };

  const onFilterDropdown = (filter) => {
    setSelectedMaterial(filter);
    if (filter == "All") {
      setFilteredProducts(products);
      return;
    }
    const productsByMaterial = products.filter(
      (item) => item.material == filter
    );
    setFilteredProducts(productsByMaterial);
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
        <div className="filtering-row">
          <div className="filtering-title">Filter by </div>
          <RobotDropdown
            dropdowns={materialLists}
            value={selectedMaterial}
            onSelectDropdown={onFilterDropdown}
          />
        </div>
        <div className="row product-container">
          {filteredProducts !== undefined &&
          filteredProducts.length !== undefined &&
          filteredProducts.length > 0 ? (
            filteredProducts?.map((item, index) => (
              <div key={index} className="col-12 col-lg-6 product-column">
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
