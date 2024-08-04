import { createContext, useContext, useState } from "react";


let cartContext = createContext();

let CartContextProvider = ({ children }) => {
    let [cartItems, setCartItems] = useState([])
    let [isCartOpen, setIsCartOpen] = useState(false)

    function toggleCart() {
        setIsCartOpen(prev => !prev)
    }

    async function addToCart(id) {
        
        let res = await fetch('https://fakestoreapi.com/products')
        let products = await res.json()
        let product = products.find(product => product.id === id)
        setCartItems(prev => {
            return [...prev, {id: product.id, title: product.title, price: product.price, image: product.image, quantity: 1}]
        })
    }

    async function increaseQ(id) {
        
        setCartItems(prev => {
            let preev = prev.filter((product) => { return product.id !== id})
            let preevT = prev.find((product) => {return product.id === id})
            return [...preev, {...preevT, quantity: preevT.quantity+1}]
        })
    }

    async function decreaseQ(id) {
        
        setCartItems(prev => {
            let preev = prev.filter((product) => { return product.id !== id})
            let preevT = prev.find((product) => {return product.id === id})
            if (preevT.quantity === 1) return [...preev]
            return [...preev, {...preevT, quantity: preevT.quantity-1}]
        })
    }

    async function removeItem(id) {
        
        setCartItems(prev => {
            let preev = prev.filter((product) => { return product.id !== id})
            return preev
        })
    }


    return <cartContext.Provider 
    value={{
        cartItems,
        addToCart,
        increaseQ,
        decreaseQ,
        removeItem,
        isCartOpen,
        toggleCart
    }}
    >
        {children}
    </cartContext.Provider>
}

export default CartContextProvider;

export function useCart() {
    return useContext(cartContext)
}