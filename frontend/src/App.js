import * as React from "react";
import styles from "./styles/home.module.scss";
function App() {
  return (
    <div className="App">
      <div className={`${styles.mainContent} container-fluid `}>
        <h1 className={styles.pageTitle}>Robot Market</h1>
        <p className={styles.pageDescription}>
          Get yourself a new assistant today!
        </p>
      </div>
      {/*Add your code here*/}
    </div>
  );
}

export default App;
