import React from "react";
import styles from "./App.module.scss";
import Component from "./components/component";
import Hero from "./components/hero";
import FirstSection from "./components/firstSection";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Hero />
      <FirstSection />
    </div>
  );
};

export default App;
