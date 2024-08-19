import Product from './product'


export default function FlashSaleProducts({ List }) {

  return (
    <div className='px-4 pt-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {List?.map(product => {
          return <Product key={product.id} product={product} />
          })}
      </div>
    </div>
  )
}


