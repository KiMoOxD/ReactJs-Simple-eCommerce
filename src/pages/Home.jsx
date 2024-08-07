import Hero from "../components/hero";
import Products from "../components/products";
import Banner from "../components/banner";
import { useRouteLoaderData } from "react-router-dom";



export default function Home() {
  let products = useRouteLoaderData('root').products

  return <>
    <Hero />
    <Products List={products} Label={`Featured`}/>
    <Banner />
  </>
}
