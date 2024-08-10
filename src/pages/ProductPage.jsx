import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import image from "../pngwing.png";
import { useCart } from "../context/ShoppingCartContext";
import Products from "../components/products";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";



function DateFormater(date) {
  let mydate = new Date(date);
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][mydate.getMonth()];
  return month + " " + mydate.getFullYear();
}

export default function ProductPage() {
  let [product, category] = useLoaderData();
  let [content, setContent] = useState(product.description);
  let [imgCont, setImgCont] = useState(product.thumbnail);
  let { cartItems, addToCart, removeItem } = useCart();
  let newPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);
  let [qty, setQty] = useState(1)
  let btnContent = 'Add to Cart',
  foundInCart = cartItems.some((item) => item.id === product.id)

  useEffect(() => {
    setImgCont(product.thumbnail);
  }, [product.thumbnail]);

  if (typeof content !== "string") {
    content = content.map((review) => {
      return (
        <div key={review.reviewerName} className="flex my-4 gap-2">
          <img className="size-10" src={image} alt="" />
          <div className="flex w-full bg-stone-100 p-2 flex-col gap-2">
            <div className="flex text-sm">
              <div className="flex-grow">
                <p>{review.reviewerName}</p>
                <p className="text-xs">{review.reviewerEmail}</p>
              </div>
              <p>{DateFormater(review.date)}</p>
            </div>
            <p className="text-sm">{review.comment}</p>
          </div>
        </div>
      );
    });
  }

  if (foundInCart === false && btnContent === "Added to Cart") {
    btnContent = "Add to Cart"
  } else if (btnContent === "Add to Cart" && foundInCart === true) {
    btnContent = "Remove from Cart"
  }

  function handleCartClick() {
    btnContent === 'Remove from Cart' ? removeItem(product.id) : addToCart(product.id, qty)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 px-4 2xl:px-0 mt-5">
        <ul className="flex order-1 lg:order-none lg:flex-col gap-2 *:bg-cover *:size-16 lg:*:size-20 *:bg-center *:bg-no-repeat cursor-pointer">
          {product.images.map((image) => {
            return (
              <li
                key={image}
                onClick={() => setImgCont(image)}
                className={`border flex items-center justify-center hover:border-stone-950 hover:bg-stone-100 ${
                  imgCont === image ? "border-stone-950 bg-stone-100" : ""
                }`}
              >
                <img className="w-12 max-h-full" src={image} alt="" />
              </li>
            );
          })}
        </ul>
        <div className="lg:self-start flex flex-grow justify-center object-contain items-center max-w-full lg:w-[550px] min-h-[350px] lg:h-[700px]">
          <img
            className="w-[250px] md:w-[350px] lg:w-[400px] max-h-full"
            src={imgCont}
            alt={product.title}
          />
        </div>
        <div className="lg:w-[500px] w-full order-2 min-h-[700px] flex flex-col">
          <p className="text-xs bg-stone-800 px-1 py-0.5 text-white w-fit">
            Online App-Only Price
          </p>
          <h1 className="text-3xl mt-1.5">{product.title}</h1>
          <div className="text-2xl  font-semibold">
            <p className="flex items-center">
              <span className="font-light text-[18px] pr-1">
                -{product.discountPercentage}%
              </span>
              <BsCurrencyDollar className="text-sm self-start mt-1.5" />
              {newPrice}
            </p>
            <p className="flex items-center font-normal text-sm mb-1">
              <span>List Price:</span>
              <span className="flex items-center text-gray-500 line-through">
                <BsCurrencyDollar className="text-xs" />
                {product.price}
              </span>
            </p>
          </div>
          <div className="text-gray-500 flex flex-wrap gap-2 my-1">
            <p className="text-xs rounded bg-stone-200 pr-2 py-0.5 w-fit">
              <span className="bg-blue-500 pl-1 pr-3.5 relative before:size-7 before:rounded-xl before:absolute before:top-1/2 before:translate-y-[-50%] before:right-[-2.5px] before:border-stone-200 before:border-8 before:border-t-transparent before:border-b-transparent before:border-l-transparent be py-0.5 rounded text-stone-50 ">
                WARRANTY
              </span>
              <span className="pl-1">{product.warrantyInformation}</span>
            </p>
            <p className="text-xs rounded bg-stone-200 pr-2 py-0.5 w-fit">
              <span className="bg-orange-400 pl-1 pr-3.5 relative before:size-7 before:rounded-xl before:absolute before:top-1/2 before:translate-y-[-50%] before:right-[-2.5px] before:border-stone-200 before:border-8 before:border-t-transparent before:border-b-transparent before:border-l-transparent be py-0.5 rounded text-stone-50 ">
                SHIPPING
              </span>
              <span className="pl-1">{product.shippingInformation}</span>
            </p>
            <p className="text-xs rounded bg-stone-200 pr-2 py-0.5 w-fit">
              <span
                className={`bg-red-500 pl-1 pr-3.5 relative before:size-7 before:rounded-xl before:absolute before:top-1/2 before:translate-y-[-50%] before:right-[-2.5px] before:border-stone-200 before:border-8 before:border-t-transparent before:border-b-transparent before:border-l-transparent  py-0.5 rounded text-stone-50`}
              >
                AVAILABILITY
              </span>
              <span className="pl-1">{product.availabilityStatus}</span>
            </p>
          </div>
          <hr />
          <div className="flex flex-col w-full gap-1 test-sm my-2">
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Brand</span>
              <span>{product.brand}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">SKU</span>
              <span>{product.sku}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Height</span>
              <span>{product.dimensions.height}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Width</span>
              <span>{product.dimensions.width}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Depth</span>
              <span>{product.dimensions.depth}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Return Policy</span>
              <span>{product.returnPolicy}</span>
            </p>
            <p className="w-full flex">
              <span className="flex-grow font-semibold">Min Order Qty</span>
              <span>{product.minimumOrderQuantity}</span>
            </p>
            <div className="w-full flex">
              <span className="flex-grow font-semibold">Tags</span>
              <ul className="flex gap-1 flex-wrap">
                {product.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs text-center place-content-center px-1.5 bg-stone-900 text-white rounded-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-2">
            <div className="flex gap-7 cursor-pointer items-center border py-2 px-4">
              <span className="text-lg" onClick={() => setQty(prev => prev-1)}><FiMinus /></span>
              <span className="text-base">{qty}</span>
              <span className="text-lg" onClick={() => setQty(prev => prev+1)}><FiPlus /></span>
            </div>
            <button
              className={`py-2 w-full my-2 ${
                foundInCart
                  ? "bg-stone-200 text-black"
                  : "bg-stone-900 text-slate-50"
              }`}
              onClick={handleCartClick}
            >
              {btnContent}
            </button>
          </div>
          <div className="flex *:flex-1 *:text-center *:cursor-pointer">
            <div
              className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${
                content === product.description && "border-slate-500"
              }`}
              onClick={() => setContent(product.description)}
            >
              Product Details
            </div>
            <div
              className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${
                content === product.reviews && "border-slate-500"
              }`}
              onClick={() => setContent(product.reviews)}
            >
              Reviews
            </div>
          </div>
          <div
            className={`h-[200px] overflow-x-hidden overflow-y-auto ${typeof content === "string" ? "p-4 bg-slate-50" : ""}`}
          >
            {content}
          </div>
        </div>
      </div>
      <Products List={category} Label={`Discover Similliar`} />
    </>
  );
}

export async function loader({ params }) {
  let id = params.id;
  let data = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await data.json();
  let categoryList = await fetch(
    "https://dummyjson.com/products/category/" + product.category
  );
  categoryList = await categoryList.json();
  let similliar = categoryList.products.filter(item => item.id !== +id)

  return Promise.all([product, similliar]);
}
