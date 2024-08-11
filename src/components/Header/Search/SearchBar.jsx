import { IoIosCloseCircleOutline } from "react-icons/io";
import { useGeneralContext } from "../../../context/generalContext";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/ShoppingCartContext";
import { useWishList } from "../../../context/WishListContext";
import { handleSearchClick } from "../../../helper/utils";

let initial = { isActive: false, items: [] };

export default function SearchBar() {
  let {
    searchResult,
    setSearchResult,
    isSearchOpen,
    setIsSearchOpen,
    isMenuOpen,
    toggleMenu,
  } = useGeneralContext();
  let { isCartOpen, toggleCart } = useCart();
  let { isWishListOpen, toggleWishListMenu } = useWishList();

  async function handleChange(e) {
    if (e.target.value === "") {
      setSearchResult(initial);
      return;
    } else {
      let res = await fetch(
        `https://dummyjson.com/products/search?q=${e.target.value}&limit=5`
      );
      let result = await res.json();
      setSearchResult((prev) => {
        return { ...prev, isActive: true, items: result };
      });
    }
  }

  return (
    <div className="absolute top-[52px] md:top-2 left-1/2 translate-x-[-50%] w-3/4 md:w-1/2">
      <input
        type="text"
        placeholder="Search millions of products"
        className="rounded-full border border-slate-400 w-full px-3 py-1.5 outline-none text-xs md:text-sm shadow-sm font-mono"
        onChange={handleChange}
      />
      {isSearchOpen && (
        <IoIosCloseCircleOutline
          className="absolute top-1/2 right-1.5 translate-y-[-50%] text-2xl cursor-pointer text-slate-500"
          onClick={() => {
            handleSearchClick(
              { isCartOpen, toggleCart },
              { isWishListOpen: isWishListOpen, toggleWishListMenu },
              { isMenuOpen, toggleMenu },
              setIsSearchOpen
            );
            setSearchResult(initial);
          }}
        />
      )}
      {searchResult.isActive && (
        <ul className="absolute flex flex-col gap-1.5 bg-white/60 border rounded-2xl p-2 top-[110%] w-full left-0 backdrop-blur-3xl">
          {searchResult.items.products.length > 0 ? (
            searchResult.items.products.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                onClick={() => setSearchResult(initial)}
              >
                <li className="flex items-center gap-2 rounded-lg bg-slate-300/15 backdrop-blur p-1 text-sm hover:bg-slate-100">
                  <img
                    src={item.thumbnail}
                    className="size-9 md:size-10 xl:size-12"
                    alt=""
                  />
                  <div className="text-stone-900 max-h-[72px] max-w-[252px] md:max-w-full truncate">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                </li>
              </Link>
            ))
          ) : (
            <p className="text-center text-sm">No Search Results</p>
          )}
        </ul>
      )}
    </div>
  );
}
