import { CiMenuBurger } from "react-icons/ci";
import { IoMdExit } from "react-icons/io";
import { useMenu } from "../../context/MenuContext";
import { useCart } from "../../context/ShoppingCartContext";
import { useWishList } from "../../context/WishListContext";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


export default function Menu() {
  let { isMenuOpen, toggleMenu } = useMenu();
  let { isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();
  return (
    <div className="lg:hidden text-xl cursor-pointer relative">
      {!isMenuOpen && <CiMenuBurger
        onClick={() => {
          if (isCartOpen) toggleCart();
          if (isWishListOpen) toggleWishListMenu();
          toggleMenu();
        }}
      />}
      {isMenuOpen && <IoMdClose onClick={toggleMenu} />}
      {isMenuOpen && (
        <div className="h-[98vh] w-[100vw] *:w-full *:text-center md:w-96 absolute top-[198%] right-[-75%] pt-14 flex flex-col gap-2 bg-[#0c0b1549] border border-stone-50/10 backdrop-blur-md shadow rounded-sm">
          <div
            className="text-white text-2xl absolute top-5 left-5"
            onClick={toggleMenu}
          >
            <IoMdExit />
          </div>
          <NavLink onClick={toggleMenu} to={"/"}>
            <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
              Home
            </div>
          </NavLink>
          <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
            Catalogue
          </div>
          <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
            Collections
          </div>
          <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
            Popular
          </div>
          <div className="hover:bg-[#ffffff2f] py-3 border border-stone-50/0 hover:border-stone-50/25 hover:backdrop-blur-lg shadow text-stone-50 hover:text-stone-200 transition">
            Contacts
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className="top-6 left-1.5 animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
