// No need to import "react" just for JSX in React 17+
import React, { ReactElement } from "react";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/swc-banner.jpg";

import "../styles/index.scss";

const App = (): ReactElement => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React chem chem.</h1>
          <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
