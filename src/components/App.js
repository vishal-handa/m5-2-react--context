import React, {useEffect} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Game from "./Game";
import { GameContext } from "./GameContext"

function App() {
  const { numCookies, setNumCookies, purchasedItems, setPurchasedItems, cookies }=React.useContext(GameContext);

  window.onunload=function(){
    localStorage.setItem("onunloadTime", Date.now())
  }

  window.addEventListener("load", ()=>{
    const unloadTime=parseInt(localStorage.getItem("onunloadTime"));
    const timeDiff=Math.floor((Date.now()-unloadTime)/1000);
    //console.log(timeDiff);
    const generatedCookies=cookies*timeDiff;
    console.log("generatedcookies", generatedCookies, "timediff", timeDiff);
    setNumCookies(numCookies+generatedCookies);
    //console.log("added cookies on load: "+cookies*timeDiff)
  })

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
