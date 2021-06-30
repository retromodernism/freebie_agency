import React from "react";
import styles from "./App.module.scss";
import Component from "./components/component";
import Hero from "./components/hero";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Hero />
    </div>
  );
};

export default App;
