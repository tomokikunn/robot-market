import React, { useState } from "react";
import styles from "./styles/home.module.scss";
import { Button } from "react-bootstrap";
import CartModal from "./components/CartModal";
function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  return (
    <div className="App">
      <div className={`${styles.mainContent} container-fluid `}>
        <h1 className={styles.pageTitle}>Robot Market</h1>
        <p className={styles.pageDescription}>
          Get yourself a new assistant today!
        </p>
        <Button variant="primary" onClick={() => setShowCartModal(true)}>
          show cart
        </Button>
        <CartModal
          show={showCartModal}
          handleClose={() => setShowCartModal(false)}
        />
      </div>
    </div>
  );
}

export default App;
