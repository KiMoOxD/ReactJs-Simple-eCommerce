import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useCart } from "../../context/ShoppingCartContext";

export default function ProductCartButton({ product }) {
    let { cartItems, addToCart, removeItem } = useCart(),
    [qty, setQty] = useState(1),
    btnContent = 'Add to Cart',
    foundInCart = cartItems.some((item) => item.id === product.id)

    useEffect(() => {
      setQty(1)
    }, [product])

    if (foundInCart === false && btnContent === "Added to Cart") {
        btnContent = "Add to Cart"
      } else if (btnContent === "Add to Cart" && foundInCart === true) {
        btnContent = "Remove from Cart"
      }

    function handleCartClick() {
        btnContent === 'Remove from Cart' ? removeItem(product.id) 
        : 
        addToCart({id: product.id, title: product.title, price: product.price, thumbnail: product.thumbnail}, qty)
    }

    function handleMinus() {
        setQty(prev => {
        if (prev === 1) return 1;    
        return prev - 1
        })
    }

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-7 cursor-pointer items-center border py-2 px-4">
        <span className="text-lg" onClick={handleMinus}>
          <FiMinus />
        </span>
        <span className="text-base">{qty}</span>
        <span className="text-lg" onClick={() => setQty((prev) => prev + 1)}>
          <FiPlus />
        </span>
      </div>
      <button
        className={`py-2 w-full my-2 ${
          foundInCart ? "bg-stone-200 text-black" : "bg-stone-900 text-slate-50"
        }`}
        onClick={handleCartClick}
      >
        {btnContent}
      </button>
    </div>
  );
}
