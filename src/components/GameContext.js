import React, { useEffect } from 'react';
import usePersistedState from "../hooks/usePersistedState";
import useInterval from "../hooks/use-interval.hook";
import items from "./data"

export const GameContext = React.createContext(null);

export const GameProvider = ({ children }) => {
    const [numCookies, setNumCookies] = usePersistedState("numCookies",1000);

    const [purchasedItems, setPurchasedItems] = usePersistedState("purchasedItems",{
        cursor: 0,
        grandma: 0,
        farm: 0,
    });

    const calculateCookiesPerSecond = (purchasedItems) => {
        //console.log("calculateCookiesPerSecond", purchasedItems)
        return Object.keys(purchasedItems).reduce((acc, itemId) => {
          //console.log("itemID",itemId,"accumulator", acc);
            const numOwned = purchasedItems[itemId];
            const item = items.find((item) => item.id === itemId);
            const value = item.value;
          return acc + value * numOwned;
        }, 0);
    };
    useInterval(() => {
        const numOfGeneratedCookies = calculateCookiesPerSecond(purchasedItems);
        setNumCookies(numCookies + numOfGeneratedCookies);
    }, 1000);

    return <GameContext.Provider value={{
        numCookies,
        setNumCookies,
        purchasedItems,
        setPurchasedItems,
        cookies:calculateCookiesPerSecond(purchasedItems),
    }}>{children}</GameContext.Provider>;
};