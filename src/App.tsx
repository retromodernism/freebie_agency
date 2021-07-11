import React from "react";
import styles from "./App.module.scss";
import Component from "./components/component";
import Hero from "./components/hero";
import FirstSection from "./components/firstSection";
import Services from "./components/services";
import LatestWorks from "./components/latestWorks";
import Team from "./components/team";

import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.app}>
        <Hero />
        <FirstSection />
        <Services />
        <LatestWorks />
        <Team />
      </div>
    </Provider>
  );
};

export default App;
