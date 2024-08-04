import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsCalendar2Heart } from "react-icons/bs";
import Menu from "./menu";
import Cart from "./cart";
import { useCart } from "../context/ShoppingCartContext";
import WishList from "./wishList";
import { useWishList } from "../context/WishListContext";


export default function Header() {
  let {cartItems, isCartOpen, toggleCart} = useCart()
  let { isWishListOpen, toggleWishListMenu } = useWishList()

  return (
    <div className="flex justify-between items-center py-2 px-4 2xl:px-0">
      <h1>Z-Shop</h1>
      <ul className="hidden lg:flex gap-2 *:w-24 *:h-9 *:flex *:justify-center *:transition *:cursor-pointer *:items-center">
        <li className="hover:bg-slate-200">Home</li>
        <li className="hover:bg-slate-200">Catalogue</li>
        <li className="hover:bg-slate-200">Collections</li>
        <li className="hover:bg-slate-200">Popular</li>
        <li className="hover:bg-slate-200">Contacts</li>
      </ul>
      <div className="flex gap-3 py-2 lg:py-0 text-xl items-center cursor-pointer">
        <CiSearch />
        <div className="relative">
           <BsCalendar2Heart className="text-lg" onClick={() => {
            if (isCartOpen) {
              toggleCart()
            }
            toggleWishListMenu()
            }} />
           {isWishListOpen && <WishList />}
        </div>
        <CiUser />
        <div className="relative">
          <IoCartOutline onClick={() => {
            if (isWishListOpen) {
              toggleWishListMenu()
            }
            toggleCart()
            }}/>
          {isCartOpen && <Cart />}
          {cartItems.length > 0 && <div className="absolute size-2 top-0 right-0 text-white rounded-full bg-red-500">
          </div>}
        </div>
        <Menu />
      </div>
    </div>
  )
}
