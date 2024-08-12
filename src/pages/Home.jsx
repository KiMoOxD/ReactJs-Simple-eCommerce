import Hero from "../components/hero";
import Products from "../components/products";
import Banner from "../components/banner";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import styles from './home.module.css'
import SimpleSlider from "../components/Carousel";
import CatCarousel from '../components/CatCarousel'
import Timer from "../components/Timer";

export default function Home() {
  let products = useRouteLoaderData('root').products
  let categories = useLoaderData()

  return <>
    <Hero />
    <div className={styles.slider} style={{
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
    </div>
    <div className="flex justify-center md:justify-start">
     <p className="relative mt-5 text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">Today's</p>
    </div>
    <div className="flex flex-col md:flex-row md:gap-16 items-center md:items-end py-3">
      <h1 className='text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold'>Flash Sales</h1>
      <Timer />
    </div>
    <SimpleSlider List={products} />
    <hr className="my-8"/>
    <div className="flex justify-center md:justify-start">
      <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">Categories</p>
    </div>
    <h1 className='text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold'>Browse By Category</h1>
    <CatCarousel List={categories} />
    <hr className="my-8"/>
    <div className="flex justify-center md:justify-start">
      <p className="relative text-red-500 font-semibold text-md md:pl-3 lg:pl-0 before:w-4 before:rounded before:h-10 before:bg-red-500 before:inline-block gap-2 flex items-center">This Month</p>
    </div>
    <h1 className='text-3xl pl-3 lg:pl-0 lg:text-4xl text-center md:text-start mt-1  tracking-wider font-semibold'>Best Selling Products</h1>
    <Products List={products} Label={`Featured`}/>
    <Banner />
  </>
}


export function CatLoader() {
 return fetch('https://dummyjson.com/products/categories')
}