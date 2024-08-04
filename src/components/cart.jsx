import React from 'react'
import CartItem from './cartItem'
import { useCart } from '../context/ShoppingCartContext'
import { BsCurrencyDollar } from "react-icons/bs";


export default function Cart() {
  let { cartItems } = useCart()
  let totalPrice = cartItems.length > 0 ? cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0) : 0;
  return (
    <div className="absolute min-w-80 h-80 border bg-stone-50 p-2 right-[-32px] sm:right-0 top-[155%] rounded"> 
        <div className='overflow-y-auto bg-white h-64'>
          {cartItems?.map((item) => {
            return <CartItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} quantity={item.quantity}/>
          })}
          {cartItems.length === 0 && <p className="text-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">You didn't add anything...</p>}
        </div>
        <div className='flex items-center mt-2 text-sm justify-between'>
          <button className='py-2 px-4 border border-stone-500 rounded-full  hover:bg-stone-200 transition'>Checkout</button>
          <div className='pr-5 flex items-center font-semibold'>Total: <BsCurrencyDollar/>{totalPrice.toFixed(2)}</div>
        </div>
    </div>
  )
}
