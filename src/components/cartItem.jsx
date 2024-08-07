import React from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { useCart } from '../context/ShoppingCartContext';
import { CiTrash } from "react-icons/ci";



export default function CartItem({ item }) {  
  let {increaseQ, decreaseQ, removeItem} = useCart()
  console.log(item)
  return (
    <div className='flex items-center gap-2 py-1'>
      <div className='size-10 bg-contain bg-center block bg-no-repeat' style={{backgroundImage: `url(${item.thumbnail})`}}></div>
      <div className='w-full overflow-x-hidden'>
        <div className='flex items-center my-1 gap-2'>
            <p className='max-w-[237px] flex-grow text-sm truncate'>{item.title}</p>
            <CiTrash onClick={() => removeItem(item.id)} className='text-lg'/>
        </div>
        <div className='flex'>
            <p className='text-xs flex-grow'>${item.price}</p>
            <div className='flex gap-2 pr-1 text-sm items-center'>
                <CiSquarePlus onClick={() => increaseQ(item.id)} className='text-xl' />
                <p>x{item.quantity}</p>
                <CiSquareMinus onClick={() => decreaseQ(item.id)} className='text-xl'/>
            </div>
        </div>
      </div>
    </div>
  )
}
