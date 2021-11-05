import React, { useState } from "react";
import "./styles/pages/home.scss";
import { Button } from "react-bootstrap";
import CartModal from "./components/CartModal";
import RobotNavbar from "./components/RobotNavbar";
const App = () => {
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <div className="App">
      <RobotNavbar onCartClicked={() => setShowCartModal(true)} />
      <div className="main-content container-fluid">
        <CartModal
          show={showCartModal}
          handleClose={() => setShowCartModal(false)}
        />
      </div>
    </div>
  );
};

export default App;
