import { Link } from "react-router-dom";
import { useWishList } from "../../../context/WishListContext";
import { CiTrash } from "react-icons/ci";

export default function WishListItem({ id, title, price, image }) {
  let { removeFromWishList } = useWishList();
  return (
    <Link to={`/products/${id}`}>
    <div className="flex items-center gap-2 py-1 hover:bg-stone-100 transition">
      {/* <img className='size-9 object-contain' src={image} alt="" /> */}
      <div
        className="size-11 bg-contain bg-center block bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="flex items-center gap-2 w-full overflow-x-hidden">
        <div className="flex flex-grow flex-col justify-center my-1 gap-2">
          <p className="w-[220px] text-sm truncate">{title}</p>
          <p className="text-xs">${price}</p>
        </div>
        <CiTrash
          onClick={() => removeFromWishList(id)}
          className="text-2xl mr-2"
        />
      </div>
    </div>
    </Link>
  );
}
