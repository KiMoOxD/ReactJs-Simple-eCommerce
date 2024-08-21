import { createContext, useContext, useState } from "react";


let cartContext = createContext();

let CartContextProvider = ({ children }) => {
    let [cartItems, setCartItems] = useState([])
    let [isCartOpen, setIsCartOpen] = useState(false)

    function toggleCart() {
        setIsCartOpen(prev => !prev)
    }

    // async function addToCart(id, qty=1) {
    //     let res = await fetch('https://dummyjson.com/products/'+ id)
    //     let product = await res.json()
        
    //     if (qty <= 0 ) return;
    //     setCartItems(prev => {
    //         if (prev.some(item => item.id === id) === false) {
    //             return [...prev, {id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail, quantity: qty}]
    //         } else {
    //             return [...prev]
    //         }
    //     })

    // }

    async function addToCart({id, title, price, thumbnail, discount}, qty=1) {
        if (qty <= 0 ) return;
        setCartItems(prev => {
            if (prev.some(item => item.id === id) === false) {
                return [...prev, {id, title, price, thumbnail, discount, quantity: qty}]
            } else {
                return [...prev]
            }
        })

    }

    function increaseQ(id) {
        setCartItems(prev => {
            let final = []
            prev.forEach((product, i, arr) => {
                if (product.id === id) {
                    arr[i].quantity = product.quantity+1
                }
                final[i] = product
            })
            return final
        })
    }

    function decreaseQ(id) {
        setCartItems(prev => {
            if (cartItems.find(item => item.id === id)?.quantity === 1) {
                
                return prev.filter(item => item.id !== id)
            }
            let final = []
            prev.forEach((product, i, arr) => {
                if (product.id === id) {
                    arr[i].quantity = product.quantity-1
                }
                final[i] = product
            })
            return final
        })
    }

    function removeItem(id) {
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