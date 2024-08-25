import Menu from "./menu";
import { useGeneralContext } from "../../context/generalContext";
import SearchBar from "./Search/SearchBar";
import { Link } from "react-router-dom";
import WishListIcon from "./Wishlist/wishlistIcon";
import CartIcon from "./Cart/cartIcon";
import NavLinks from "./NavLinks";
import SearchIcon from "./Search/searchIcon";
import AccountIcon from './Account/AccountIcon'

export default function Header() {
  let { isSearchOpen } = useGeneralContext();

  return (
    <div className="flex sticky h-12 top-0 z-40 bg-white mx-auto justify-between items-center px-4 2xl:px-0">
      <Link to={`/`}>
        <h1 className="font-['Edu_AU_VIC_WA_NT_Hand']">Shooopy!</h1>
      </Link>
      {!isSearchOpen && <NavLinks />}
      {isSearchOpen && <SearchBar />}
      <div className="flex gap-3 text-xl items-center cursor-pointer">
        {!isSearchOpen && <SearchIcon />}
        <WishListIcon />
        <AccountIcon />
        <CartIcon />
        <Menu />
      </div>
    </div>
  );
}
