import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/ShoppingCartContext";
import { useWishList } from "../../context/WishListContext";
import { useGeneralContext } from "../../context/generalContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  let { isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();
  let { isMenuOpen, toggleMenu, setIsSearchOpen, setSearchResult } =
    useGeneralContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isCartOpen) toggleCart();
    if (isWishListOpen) toggleWishListMenu();
    if (isMenuOpen) toggleMenu();
    setIsSearchOpen(false);
    setSearchResult({ isActive: false, items: [] });
    // eslint-disable-next-line
  }, [pathname]);

  return null;
};

export default ScrollToTop;
