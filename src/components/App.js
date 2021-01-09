import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { GameContext } from "./GameContext"

function App() {
  const { numCookies, setNumCookies, purchasedItems, setPurchasedItems, cookies }=React.useContext(GameContext);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game numCookies={numCookies}
                setNumCookies={setNumCookies}
                purchasedItems={purchasedItems}
                setPurchasedItems={setPurchasedItems}
                cookies={cookies}
          />
        </Route>
      </Router>
    </>
  );
}

export default App;
