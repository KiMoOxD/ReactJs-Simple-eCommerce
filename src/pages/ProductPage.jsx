import { useLoaderData } from "react-router-dom";
import Products from "../components/products";
import { BsCurrencyDollar } from "react-icons/bs";
import ProductImages from "../components/ProductPage/ProductImages";
import ProductInfo from "../components/ProductPage/ProductInfo";
import ProductCartButton from "../components/ProductPage/ProductCartButton";
import ProductReviews from "../components/ProductPage/ProductReviews";

export default function ProductPage() {
  let [product, category] = useLoaderData();
  let newPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center gap-4 px-4 2xl:px-0 mt-5">
        <ProductImages
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />
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
          <ProductInfo product={product} />
          <ProductCartButton product={product} />
          <ProductReviews product={product} />
        </div>
      </div>
      <div className="flex justify-center md:justify-start">
        <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          Discover
        </p>
      </div>
      <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold">
        Simillar Products
      </h1>
      <Products List={category} />
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
  let similliar = categoryList.products.filter((item) => item.id !== +id);

  return Promise.all([product, similliar]);
}
