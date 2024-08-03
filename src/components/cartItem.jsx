import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useCart } from '../context/ShoppingCartContext';
import { CiTrash } from "react-icons/ci";



export default function CartItem({ id, title, price, image, quantity }) {  
  let {increaseQ, decreaseQ, removeItem} = useCart()
  return (
    <div className='flex items-center gap-2 py-1'>
      {/* <img className='size-9 object-contain' src={image} alt="" /> */}
      <div className='size-9 bg-contain bg-center block bg-no-repeat' style={{backgroundImage: `url(${image})`}}></div>
      <div className='w-full overflow-x-hidden'>
        <div className='flex items-center my-1 gap-2'>
            <p className='w-[213px] text-sm truncate'>{title}</p>
            <CiTrash onClick={() => removeItem(id)} className='text-lg'/>
        </div>
        <div className='flex'>
            <p className='text-xs flex-grow'>${price}</p>
            <div className='flex gap-2 pr-1 text-sm items-center'>
                <CiSquarePlus onClick={() => increaseQ(id)} className='text-xl' />
                <p>x{quantity}</p>
                <CiSquareMinus onClick={() => decreaseQ(id)} className='text-xl'/>
            </div>
        </div>
      </div>
    </div>
  )
}
