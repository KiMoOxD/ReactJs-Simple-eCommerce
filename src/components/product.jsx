import { BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";




export default function Product({ product }) {
  let { cartItems, addToCart, removeItem } = useCart()
  let [btnContent, setBtnContent] = useState('Add to Cart')
  let [classes, setClasses] = useState('border rounded-full text-black border-black text-sm w-fit px-4 py-1.5 hover:animate-pulse hover:bg-stone-100 transition');

  useEffect(() => {
    let found = cartItems.some(item => item.id === product.id)
    if ((found === false) && btnContent === 'Added to Cart') {
      setBtnContent('Add to Cart') 
      setClasses('border rounded-full text-black border-black text-sm w-fit px-4 py-1.5 hover:animate-pulse hover:bg-stone-100 transition')
    } else if (btnContent === 'Added to Cart' && (found === true)) {
      setClasses('border rounded-full text-white bg-stone-900 border-black text-sm w-fit px-4 py-1.5 transition pointer-events-none')
    }
  }, [cartItems])

  function handeAddtoCart() {
    setBtnContent('Added to Cart')
  }  

  return (
    <div className="p-2 flex flex-col gap-2 bg-stone-50 relative group cursor-pointer">
      <div className="absolute right-5 top-5 p-2 rounded-full bg-stone-100 text-xl cursor-pointer hover:bg-red-500 hover:text-white transition">
        <CiHeart className="" />
      </div>
      <div className="h-72 flex justify-center items-center bg-white">
        <img className="max-w-full w-40 group-hover:scale-110 group-hover:animate-pulse transition" alt={product.title} src={product.image} />
      </div>
      <div className="flex gap-1 text-sm">
        <p className="flex-grow truncate">{product.title}</p>
        <p className="flex gap-0.5 items-center"><BsCurrencyDollar />{product.price}</p>
      </div>
      <p className="font-light text-xs mb-1">{product.category.toUpperCase()}</p>
      <div className="flex gap-2 items-center">
        <button 
        className={classes}
        onClick={() => {
          addToCart(product.id)
          handeAddtoCart()
        }}
        >
          {btnContent}
        </button>
        {btnContent === 'Added to Cart' && (cartItems.some(item => item.id === product.id) === true) && 
        <button 
        className="border rounded-full text-black border-black text-sm w-fit px-4 py-1.5 hover:animate-pulse hover:bg-stone-100 transition"
        onClick={() => removeItem(product.id)}
        >
          Dissmis
        </button>
        }
      </div>
    </div>
  )
}
