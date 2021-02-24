import React, { FC } from 'react';
import Recipes from 'src/components/Recipes';
import sword from 'src/images/swc-sword.png';
import swordSvg from 'src/images/sword.svg';

import 'src/styles/index.scss';

const App: FC = () => (
  <>
    <section className="hero" />
    <main>
      <section>
        <h1>Oh Herro, React.</h1>
        <img src={sword} alt="sword" width="250" />
        <img src={swordSvg} alt="sword" width="250" />
        <Recipes />
      </section>
    </main>
  </>
);

export default App;
