import { useWishList } from "../context/WishListContext"
import WishListItem from "./WishListItem.jsx"


export default function WishList() {

    let {wishListItems, ClearWishList} = useWishList()
  return (
    <div className="absolute min-w-80 h-80 border bg-stone-50 p-2 right-[-95px] sm:right-0 top-[160%] rounded"> 
        <div className='overflow-y-auto bg-white h-64'>
          {wishListItems?.map((item) => {
            return <WishListItem key={item.id} id={item.id} title={item.title} price={item.price} image={item.image}/>
          })}
          {wishListItems.length === 0 && <p className="text-sm absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">You didn't like anything...</p>}
        </div>
        <div className='flex items-center mt-2 text-sm justify-between'>
        <button 
          className='py-1.5 px-7 border border-stone-500 rounded-full  hover:bg-stone-200 transition'
          onClick={ClearWishList}
        >
            Clear
        </button>
        </div>
    </div>
  )
}
