import Hero from "../components/hero";
import Products from "../components/products";
import Banner from "../components/banner";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
// eslint-disable-next-line
import styles from "./home.module.css";
import SimpleSlider from "../components/Carousel";
import CatCarousel from "../components/CatCarousel";
import Timer from "../components/Timer";
import PS5 from "../PS5.webp";
import womanImg from "../Womanimage.webp";
import gucciImg from '../gucci.webp'
import speakersImg from '../speakers.webp'
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";




export default function Home() {
  let products = useRouteLoaderData("root").products;
  let categories = useLoaderData();

  return (
    <>
      <Hero />
      {/* <div className={styles.slider} style={{
            '--width': '200px',
            '--height': '40px',
            '--quantity': categories.length
     }}>
      <div className={styles.list}>
          {categories.map((cat, i) => {
            console.log(i)
            return <div key={cat.id} className={`flex items-center justify-center text-sm rounded border bg-stone-50/10 ${styles.item}`} style={{ '--position': i}} >
                  {cat.name}
              </div>
          })}
      </div>
    </div> */}
      <div className="flex justify-center md:justify-start mt-4">
        <p className="relative mt-5 text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          Today's
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-16 items-center md:items-end py-3">
        <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold">
          Flash Sales
        </h1>
        <Timer />
      </div>
      <SimpleSlider List={products} />
      <hr className="my-8" />
      <div className="flex justify-center md:justify-start">
        <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          Categories
        </p>
      </div>
      <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold">
        Browse By Category
      </h1>
      <CatCarousel List={categories} />
      <hr className="my-8" />
      <div className="flex justify-center md:justify-start">
        <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          This Month
        </p>
      </div>
      <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold">
        Best Selling Products
      </h1>
      <Products List={products} />
      <div className="my-7 h-1"></div>
      <Banner />
      <div className="my-7 h-1" />
      <div className="flex justify-center md:justify-start">
        <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">
          Featured
        </p>
      </div>
      <h1 className="text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold">
        New Arrival
      </h1>
      <div className="flex flex-col gap-0.5 lg:gap-2 lg:flex-row mt-7">
        <div className="flex items-end bg-black w-full lg:w-1/2 h-[450px] lg:h-[650px] relative overflow-hidden">
          <div className="z-10 w-[400px] pl-14 pb-14 flex flex-col gap-2 text-white text-lg">
            <h2 className="text-3xl">PlayStation 5</h2>
            <p className="text-stone-100">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="underline underline-offset-4 w-fit text-md">
              Shop Now
            </button>
          </div>
          <img
            src={PS5}
            alt="PS5"
            className="w-[360px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[600px] absolute bottom-0 left-1/2 translate-x-[-50%] drop-shadow-[0_0_50px_#ffffff20]"
          />
        </div>

        <div className="flex flex-col gap-0.5 lg:gap-2 w-full lg:w-1/2 min-h-[650px] lg:h-[650px]">
          
          <div className="flex items-end h-[300px] lg:h-1/2  relative overflow-hidden bg-[#0D0D0D]">
            <div className="z-10  w-[400px] pl-10 pb-10 lg:pl-14 lg:pb-14 flex flex-col gap-2 text-white text-lg">
              <h2 className="text-3xl">Women's Collections</h2>
              <p className="text-stone-100">
                Featured woman collections that give you another vibe.
              </p>
              <button className="underline underline-offset-4 w-fit text-md">
                Shop Now
              </button>
            </div>
            <img
              src={womanImg}
              alt="PS5"
              className="w-[360px] sm:w-[400px] md:w-[450px] lg:w-[450px] xl:w-[500px] absolute bottom-0 right-0"
            />
          </div>
          
          <div className="flex flex-col md:flex-row h-[600px] md:h-[300px] lg:h-1/2 gap-0.5 lg:gap-2 relative overflow-hidden">
            
            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-end bg-stone-950 relative overflow-hidden">
              <div className="z-10 w-[300px] pl-10 pb-10 flex flex-col gap-2 text-white text-lg">
                <h2 className="text-3xl">Speakers</h2>
                <p className="text-stone-100">
                  Amazon Wireless Speakers.
                </p>
                <button className="underline underline-offset-4 w-fit text-md">
                  Shop Now
                </button>
              </div>
              <img
                src={speakersImg}
                alt="speaker"
                className="w-[200px] md:w-[250px] lg:w-[200px] xl:w-[230px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0_50px_#ffffff30]"
              />
            </div>

            <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-end bg-stone-950 relative overflow-hidden">
              <div className="z-10 w-[300px] pl-10 pb-10 flex flex-col gap-2 text-white text-lg">
                <h2 className="text-3xl">Perfume</h2>
                <p className="text-stone-100">
                  GUCCI INTENSE OUD EDP.
                </p>
                <button className="underline underline-offset-4 w-fit text-md">
                  Shop Now
                </button>
              </div>
              <img
                src={gucciImg}
                alt="perfume"
                className="w-[200px] md:w-[250px] lg:w-[200px] xl:w-[230px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] drop-shadow-[0_0_50px_#ffffff30]"
              />
            </div>

          </div>
        </div>
      </div>
      <div className="my-7 h-1" />
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 items-center">
          <TbTruckDelivery className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white"/>
          <p className="font-semibold mt-2">FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over 140$</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <RiCustomerService2Line className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white"/>
          <p className="font-semibold mt-2">24/7 CUSTOMER SERVICE</p>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <BsShieldCheck className="size-16 rounded-full p-2 bg-black border-8 border-stone-300 text-white"/>
          <p className="font-semibold mt-2">MONEY BACK GUARANTEE</p>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
      <div className="my-7 h-1"></div>
    </>
  );
}

export function CatLoader() {
  return fetch("https://dummyjson.com/products/categories");
}
