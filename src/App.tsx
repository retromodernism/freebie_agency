import React from "react";
import styles from "./App.module.scss";
import Component from "./components/component";
import Hero from "./components/hero";
import FirstSection from "./components/firstSection";
import Services from "./components/services";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Hero />
      <FirstSection />
      <Services />
    </div>
  );
};

export default App;
