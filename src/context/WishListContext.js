import { createContext, useContext } from "react";
import { useState } from "react";

const WishListContext = createContext();

async function fetchData() {
    let res = await fetch('https://fakestoreapi.com/products')
    let products = await res.json()
    console.log(products)
    return products
}

export default function WishListContextProvider({ children }) {
    const [wishListItems, setWishListItems] = useState([]);
    const [isWishListOpen, setisWishListOpen] = useState(true)


    function toggleWishListMenu() {
        setisWishListOpen(prev => !prev)
    }

    async function toggleWishList(id) {
        let foundInWishList = wishListItems.some(item => item.id === id)
        if (foundInWishList) {
            setWishListItems(prev => {
                return prev.filter(item => item.id !== id)
            })
        } else {
            let products = await fetchData()
            let FavProduct = products.find(item => item.id === id)
            setWishListItems(prev => {
                return [...prev, FavProduct]
            })
        }
    }

    function removeFromWishList(id) {
        setWishListItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    function ClearWishList(id) {
        setWishListItems([])
    }

    console.log(wishListItems)

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