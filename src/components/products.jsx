import Product from './product'

export default function Products({ List, Label }) {

  return (
    <div className='px-4'>
      <h1 className='text-2xl lg:text-4xl text-center md:text-start mt-7 py-4 tracking-wider'>{Label} Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {List?.map(product => {
          return <Product key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}

export async function loader() {
  return fetch('https://dummyjson.com/products')
}
