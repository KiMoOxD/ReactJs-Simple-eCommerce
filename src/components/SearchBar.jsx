import { IoIosCloseCircleOutline } from "react-icons/io";


export default function SearchBar({ isSearchOpen, handleSearchClick }) {

  return (
    <div>
      {isSearchOpen && <div className="absolute top-[63px] md:top-3 left-1/2 translate-x-[-50%] w-3/4 md:w-1/2">
        <input type="text" placeholder="Search millions of products" className="rounded-full border border-slate-400 w-full p-1.5 outline-none text-xs md:text-sm shadow-sm font-mono"/>
        {isSearchOpen && <IoIosCloseCircleOutline 
        className="absolute top-1/2 right-1.5 translate-y-[-50%] text-2xl cursor-pointer text-slate-500" 
        onClick={handleSearchClick}
        />}
      </div>}
    </div>
  )
}
