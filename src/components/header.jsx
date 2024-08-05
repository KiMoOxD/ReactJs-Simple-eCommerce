import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { BsCalendar2Heart } from "react-icons/bs";
import Menu from "./menu";
import Cart from "./cart";
import { useCart } from "../context/ShoppingCartContext";
import WishList from "./wishList";
import { useWishList } from "../context/WishListContext";
import { useMenu } from "../context/MenuContext";

export default function Header() {
  let { cartItems, isCartOpen, toggleCart } = useCart();
  let { wishListItems, isWishListOpen, toggleWishListMenu } = useWishList();
  let { isMenuOpen, toggleMenu } = useMenu()


  return (
    <div className="flex sticky top-0 z-40 bg-white mx-auto justify-between items-center py-2 px-4 2xl:px-0">
      <h1 className="font-['Edu_AU_VIC_WA_NT_Hand']">Shooopy!</h1>
      <ul className="hidden lg:flex gap-2 *:w-24 *:h-9 *:flex *:justify-center *:transition *:cursor-pointer *:items-center">
        <li className="hover:bg-slate-200">Home</li>
        <li className="hover:bg-slate-200">Catalogue</li>
        <li className="hover:bg-slate-200">Collections</li>
        <li className="hover:bg-slate-200">Popular</li>
        <li className="hover:bg-slate-200">Contacts</li>
      </ul>
      <div className="flex gap-3 py-2 lg:py-0 text-xl items-center cursor-pointer">
        <CiSearch />
        <div className={`relative p-1 rounded-sm`}>
          <BsCalendar2Heart
            className={`text-lg`}
            onClick={() => {
              if (isCartOpen) toggleCart();
              if (isMenuOpen) toggleMenu();
              toggleWishListMenu();
            }}
          />
          {isWishListOpen && <WishList />}
          {wishListItems.length > 0 && !isWishListOpen && (
            <div className="absolute size-2 top-0.5 right-0 text-white rounded-full bg-red-500"></div>
          )}
          {isWishListOpen && (
            <div className="top-6 left-2 animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
          )}
        </div>
        <CiUser />
        <div className={`relative p-1 rounded-sm`}>
          <IoCartOutline
            onClick={() => {
              if (isWishListOpen) toggleWishListMenu();
              if (isMenuOpen) toggleMenu();
              toggleCart();
            }}
          />
          {isCartOpen && <Cart />}
          {cartItems.length > 0 && !isCartOpen && (
            <div className="absolute size-2 top-1 right-0.5 text-white rounded-full bg-red-500"></div>
          )}
          {isCartOpen && (
            <div className="top-6 left-[0.7rem] animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
          )}
        </div>
        <Menu />
      </div>
    </div>
  );
}
