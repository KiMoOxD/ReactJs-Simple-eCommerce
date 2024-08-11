import WishListMenu from "./wishListMenu";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../../../context/ShoppingCartContext";
import { useWishList } from "../../../context/WishListContext";
import { useGeneralContext } from "../../../context/generalContext";

export default function WishListIcon() {
  let { wishListItems, isWishListOpen, toggleWishListMenu } = useWishList(),
    { isMenuOpen, toggleMenu } = useGeneralContext(),
    { isCartOpen, toggleCart } = useCart();

  return (
    <div className={`relative p-1 rounded-sm`}>
      <CiHeart
        onClick={() => {
          if (isCartOpen) toggleCart();
          if (isMenuOpen) toggleMenu();
          toggleWishListMenu();
        }}
      />
      {isWishListOpen && <WishListMenu />}
      {wishListItems.length > 0 && !isWishListOpen && (
        <div className="absolute size-2 top-1 right-1 text-white rounded-full bg-red-500"></div>
      )}
      {isWishListOpen && (
        <div className="top-6 left-[9px] animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
