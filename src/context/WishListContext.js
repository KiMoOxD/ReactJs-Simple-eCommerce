import { createContext, useContext } from "react";
import { useState } from "react";

const WishListContext = createContext();

async function fetchData() {
    let res = await fetch('https://dummyjson.com/products')
    let products = await res.json()
    // console.log(products)
    return products.products
}

export default function WishListContextProvider({ children }) {
    const [wishListItems, setWishListItems] = useState([]);
    const [isWishListOpen, setisWishListOpen] = useState(false)


    function toggleWishListMenu() {
        setisWishListOpen(prev => !prev)
    }

    async function toggleWishList(id) {
        let products = await fetchData()
        setWishListItems(prev => {
            let foundInWishList = prev.some(item => item.id === id)
            if (foundInWishList) {
                return [...prev.filter(item => item.id !== id)]
            } else {
                let FavProduct = products.find(item => item.id === id)
                return [...prev, FavProduct]
            }
        })
    }

    function removeFromWishList(id) {
        setWishListItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    function ClearWishList(id) {
        setWishListItems([])
    }

    return <WishListContext.Provider value={{
        wishListItems,
        toggleWishList,
        removeFromWishList,
        ClearWishList,
        toggleWishListMenu,
        isWishListOpen

        }}>
        {children}
    </WishListContext.Provider>
}

export function useWishList() { 
    return useContext(WishListContext)
 }