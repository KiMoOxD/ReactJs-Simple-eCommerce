import { useEffect, useState } from 'react'
import Product from './product'

export default function Products() {
  let [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await fetch('https://fakestoreapi.com/products')
      let products = await res.json()
      setProducts(products)
      console.log(products)
    }
    fetchData()
  }, [])

  return (
    <div className='px-4'>
      <h1 className='text-2xl lg:text-4xl mt-7 py-4 tracking-wider'>Feautured Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {products?.map(product => {
          return <Product key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}
