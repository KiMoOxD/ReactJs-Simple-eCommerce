import React from "react";
import { useCart } from "../../context/ShoppingCartContext";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function CartItemsList() {
  let { cartItems, increaseQ, decreaseQ, removeItem } = useCart();
  return (
    <div className="border relative h-[350px] overflow-y-auto bg-stone-50/85 p-1.5 rounded">        
        {cartItems?.map((item) => {
          return (
            <div className="flex items-center gap-2 py-2 hover:bg-slate-100 cursor-pointer">
                <div
                    className="size-12 md:size-16 lg:size-20 bg-contain bg-center block bg-no-repeat"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                ></div>

                <div className="w-full overflow-x-hidden px-1">
                    <div className="flex items-center my-1 gap-2">
                        <p className="flex-grow text-sm md:text-md lg:text-lg truncate">
                            {item.title}
                        </p>
                        <CiTrash onClick={() => removeItem(item.id)} className="text-xl md:text-2xl" />
                    </div>
                    <div className="flex">
                    <p className="text-xs md:text-sm lg:text-md flex-grow">${item.price}</p>
                    <div className="flex gap-2 pr-1 text-sm items-center">
                        <CiSquarePlus
                        onClick={() => increaseQ(item.id)}
                        className="text-xl md:text-2xl"
                        />
                        <p>x{item.quantity}</p>
                        <CiSquareMinus
                        onClick={() => decreaseQ(item.id)}
                        className="text-xl md:text-2xl"
                        />
                    </div>
                    </div>
                </div>
            </div>
          );
        })}

        {cartItems.length === 0 && (
          <p className="text-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            Your Cart is empty...
          </p>
        )}

    </div>
  );
}
