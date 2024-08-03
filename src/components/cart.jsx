import React from 'react'
import CartItem from './cartItem'
import { useCart } from '../context/ShoppingCartContext'

export default function Cart() {
  let { cartItems } = useCart()
  return (
    <div className="absolute w-80 h-80 border bg-stone-50 p-2 right-[-32px] sm:right-0 top-[155%] rounded"> 
        <div className='overflow-y-scroll bg-white h-64'>
          {cartItems?.map((item) => {
            return <CartItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} quantity={item.quantity}/>
          })}
        </div>
        <button className='py-2 px-4 text-sm border border-stone-500 rounded-full mt-2 hover:bg-stone-200 transition'>Checkout</button>
    </div>
  )
}
