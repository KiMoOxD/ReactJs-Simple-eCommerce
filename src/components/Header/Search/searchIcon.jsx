import { handleSearchClick } from "../../../helper/utils";
import { useCart } from "../../../context/ShoppingCartContext";
import { useWishList } from "../../../context/WishListContext";
import { useGeneralContext } from "../../../context/generalContext";
import { CiSearch } from "react-icons/ci";

export default function SearchIcon() {
  let { isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();
  let { isMenuOpen, toggleMenu, setIsSearchOpen } = useGeneralContext();

  return (
    <CiSearch
      onClick={() =>
        handleSearchClick(
          { isCartOpen, toggleCart },
          { isWishListOpen: isWishListOpen, toggleWishListMenu },
          { isMenuOpen, toggleMenu },
          setIsSearchOpen
        )
      }
    />
  );
}
