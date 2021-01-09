import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import usePersistedState from "../hooks/usePersistedState";

function App(props) {
  const [numCookies, setNumCookies] = usePersistedState("numCookies",1000);

  const [purchasedItems, setPurchasedItems] = usePersistedState("purchasedItems",{
    cursor: 0,
    grandma: 0,
    farm: 0,
  });
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game 
            numCookies={numCookies}
            setNumCookies={setNumCookies}
            purchasedItems={purchasedItems}
            setPurchasedItems={setPurchasedItems}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
