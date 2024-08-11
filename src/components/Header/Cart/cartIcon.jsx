import { useCart } from "../../../context/ShoppingCartContext";
import { useWishList } from "../../../context/WishListContext";
import { useGeneralContext } from "../../../context/generalContext";
import CartMenu from "../Cart/cartmenu";
import { PiShoppingCartLight } from "react-icons/pi";


export default function CartIcon() {
  let { cartItems, isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();
  let { isMenuOpen, toggleMenu } = useGeneralContext();

  return (
    <div className={`relative p-1 rounded-sm`}>
      <PiShoppingCartLight
        onClick={() => {
          if (isWishListOpen) toggleWishListMenu();
          if (isMenuOpen) toggleMenu();
          toggleCart();
        }}
      />
      {isCartOpen && <CartMenu />}
      {cartItems.length > 0 && !isCartOpen && (
        <div className="absolute size-2 top-1 right-0.5 text-white rounded-full bg-red-500"></div>
      )}
      {isCartOpen && (
        <div className="top-6 left-[0.6rem] animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
