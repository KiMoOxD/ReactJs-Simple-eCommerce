import Hero from "../components/Home/hero";
import Products from "../components/Containers/products";
import Banner from "../components/Home/banner";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import SimpleSlider from "../components/Home/Carousel";
import CatCarousel from "../components/Home/CatCarousel";
import Timer from "../components/Other/Timer";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import HeadLine from "../components/Containers/HeadLine";
import LineSeparator from "../components/Other/LineSeparator";
import Separator from "../components/Other/Separator";
import Featured from "../components/Home/Featured";

export default function Home() {
  let products = useRouteLoaderData("root").products;
  let FlashSale = useLoaderData();
  console.log(FlashSale);
  return (
    <>
      <Hero />
      <HeadLine head={`Today's`} label={`Flash Sales`} extra={<Timer />} />
      <SimpleSlider List={FlashSale} />
      <LineSeparator level={8} />
      <HeadLine head={`Categories`} label={`Browse By Category`} />
      <CatCarousel />
      <LineSeparator level={8} />
      <HeadLine head={`This Month`} label={`Best Selling Products`} />
      <Products List={products} />
      <Separator level={7} />
      <Banner />
      <Separator level={4} />
      <HeadLine head={`Featured`} label={`New Arrival`} />
      <Featured />
      <Separator level={7} />
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 py-5">
        <div className="flex flex-col gap-1 items-center">
          <TbTruckDelivery className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white" />
          <p className="font-semibold mt-2">FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over 140$</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <RiCustomerService2Line className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white" />
          <p className="font-semibold mt-2">24/7 CUSTOMER SERVICE</p>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <BsShieldCheck className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white" />
          <p className="font-semibold mt-2">MONEY BACK GUARANTEE</p>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
      <Separator level={7} />
    </>
  );
}

export async function FlashSaleLoader() {
  let watches = await fetch(
    "https://dummyjson.com/products/category/mens-watches"
  );
  watches = await watches.json();
  let decor = await fetch(
    `https://dummyjson.com/products/category/home-decoration?limit=10`
  );
  decor = await decor.json();
  console.log(watches, decor);
  let final = [...watches.products, ...decor.products];

  return final;
}
