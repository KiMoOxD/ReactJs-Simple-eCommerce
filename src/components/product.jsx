import { BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useCart } from "../context/ShoppingCartContext";
import { useEffect, useState } from "react";
import { useWishList } from "../context/WishListContext";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { BsCartDash } from "react-icons/bs";

let WishClasses, addToCartClasses, removefromCartClasses;

export default function Product({ product, ...props }) {
  let { cartItems, addToCart, removeItem } = useCart(),
    { wishListItems, toggleWishList } = useWishList(),
    [isLoading, setIsLoading] = useState(false),
    // btnContent = "Add to Cart",
    // eslint-disable-next-line
    // classes = "border rounded-full text-black border-black text-sm w-fit px-4 py-1.5 hover:animate-pulse hover:bg-stone-100 transition",
    foundInCart = cartItems.some((item) => item.id === product.id),
    foundInWishList = wishListItems.some((item) => item.id === product.id);

  useEffect(() => {
    setIsLoading(false);
  }, [product]);

  // eslint-disable-next-line
  // if (foundInCart === false && btnContent === "Added to Cart") {
  //   btnContent = "Add to Cart"
  //   classes = "border rounded-full text-black border-black text-sm w-fit px-4 py-1.5 hover:animate-pulse hover:bg-stone-100 transition"
  // } else if (btnContent === "Add to Cart" && foundInCart === true) {
  //   btnContent = "Remove from Cart"
  //   classes = "border rounded-full text-white bg-stone-900 border-black text-sm w-fit px-4 py-1.5 transition"
  // }

  if (foundInWishList) {
    WishClasses =
      "absolute right-5 top-5 p-2 rounded-full  text-xl cursor-pointer bg-red-500 text-white transition";
  } else {
    WishClasses =
      "absolute right-5 top-5 p-2 rounded-full bg-stone-100 text-xl cursor-pointer lg:hover:bg-red-500 lg:hover:text-white transition";
  }

  // eslint-disable-next-line
  // function handleCartClick() {
  //   btnContent === 'Remove from Cart' ? removeItem(product.id) : addToCart(product.id)
  // }

  if (foundInCart) {
    addToCartClasses = "hidden";
    removefromCartClasses =
      "absolute right-16 top-5 p-2 rounded-full bg-stone-900 text-xl text-stone-50 cursor-pointer";
  } else {
    addToCartClasses =
      "absolute right-16 top-5 p-2 rounded-full bg-stone-100 text-xl cursor-pointer lg:hover:bg-stone-900 lg:hover:text-white transition";
    removefromCartClasses = "hidden";
  }

  return (
    <div
      className="p-2 flex flex-col gap-2 bg-stone-50 relative group cursor-pointer"
      {...props}
    >
      <div
        className={WishClasses}
        onClick={() =>
          toggleWishList({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
          })
        }
      >
        <CiHeart />
      </div>
      <div
        className={addToCartClasses}
        onClick={() =>
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
            discount: product.discountPercentage
          })
        }
      >
        <BsCartPlus />
      </div>
      <div
        className={removefromCartClasses}
        onClick={() => removeItem(product.id)}
      >
        <BsCartDash />
      </div>
      <div
        className="absolute left-5 top-5 w-14 h-6 flex items-center justify-center  text-xs cursor-pointer bg-red-500 text-white transition"
        onClick={() => removeItem(product.id)}
      >
        -{product.discountPercentage}%
      </div>
      <Link to={"/products/" + product.id} onClick={() => setIsLoading(true)}>
        <div className="h-72 flex justify-center items-center bg-white">
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <img
              className="max-w-full w-40 group-hover:scale-110 transition"
              alt={product.title}
              src={product.thumbnail}
            />
          )}
        </div>
      </Link>
      <div className="flex gap-1 text-sm">
        <p className="flex-grow truncate">{product.title}</p>
        <p className="flex items-center">
          <BsCurrencyDollar />
          {product.price}
        </p>
      </div>
      <p className="font-light text-xs mb-1">
        {product.category?.toUpperCase()}
      </p>
      {/* <button
          className={classes}
          onClick={handleCartClick}
        >
          {btnContent}
        </button> */}
    </div>
  );
}
