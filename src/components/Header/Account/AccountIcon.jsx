import { CiUser } from "react-icons/ci";
import { useCart } from "../../../context/ShoppingCartContext";
import { useWishList } from "../../../context/WishListContext";
import { useGeneralContext } from "../../../context/generalContext";
import AccountMenu from './AccountMenu'
import AccountPreMenu from './AccountPreMenu'

export default function AccountIcon() {
  let { isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();
  let { isMenuOpen, toggleMenu, isAccountOpen, toggleAccount, currentUser } = useGeneralContext();

  return (
    <div className="relative">
      <CiUser
        onClick={() => {
          if (isWishListOpen) toggleWishListMenu();
          if (isMenuOpen) toggleMenu();
          if (isCartOpen) toggleCart();
          toggleAccount()
        }}
      />

      {!currentUser && isAccountOpen && <AccountPreMenu />}
      {currentUser && isAccountOpen && <AccountMenu />}
      {isAccountOpen && (
        <div className="top-5 left-1.5 animate-bounce border-b-4 border-r-4 border-l-4 border-b-slate-950 border-transparent bg-transparent size-2.5 bg-slate-800 absolute"></div>
      )}
    </div>
  );
}
