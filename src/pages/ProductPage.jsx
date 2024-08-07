import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import image from '../pngwing.png'
import { useCart } from "../context/ShoppingCartContext";
import Products from "../components/products";



function DateFormater(date) {
  let mydate = new Date(date);
  let month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"][mydate.getMonth()];
  return month + ' ' + mydate.getFullYear();
}


export default function ProductPage() {

    let [product, category] = useLoaderData()
    let [content, setContent] = useState(product.description)
    let [imgCont, setImgCont] = useState(product.thumbnail)
    let { cartItems, addToCart } = useCart()
    let isInCart = cartItems.some(item => item.id === product.id);
    
    useEffect(() => {
      setImgCont(product.thumbnail)
    }, [product.thumbnail])

    if (typeof content !== 'string') {
      content = content.map(review => {
        return <div className="flex my-4 gap-2">
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
      })
    }

  return (
    <>
     <div className="flex items-center gap-4 px-4 2xl:px-0 mt-5">
      <ul className="flex flex-col gap-2 *:bg-cover *:size-20 *:bg-center *:bg-no-repeat">
        {product.images.map(image => {
          return <li 
          onClick={() => setImgCont(image)} 
          style={{backgroundImage: `url('${image}')`}}
          className={`border hover:border-stone-950 hover:bg-stone-100 ${imgCont === image ? 'border-stone-950 bg-stone-100': ''}`}
          ></li>
        })}
      </ul>
      <div className="flex flex-grow justify-center items-center w-[750px] h-[700px] bg-slate-50">
        <img className="w-[400px]" src={imgCont} alt="" />
      </div>
      <div className="w-[500px] min-h-[700px] flex flex-col">
        <p className="text-sm bg-stone-800 px-1 py-0.5 text-white w-fit">Online App-Only Price</p>
        <h1 className="text-4xl">{product.title}</h1>
        <p className="text-xl">${product.price}</p>
        <hr />
        <h2 className="text-2xl font-semibold mt-2">Color :</h2>
        <div className="flex gap-4 mt-2 mb-4">
            <span className="size-7 bg-slate-800 rounded-full"></span>
            <span className="size-7 bg-red-800 rounded-full"></span>
            <span className="size-7 bg-green-800 rounded-full"></span>
            <span className="size-7 bg-stone-800 rounded-full"></span>
        </div>
        <hr />
        <h2 className="text-2xl">Size :</h2>
        <ul className="flex my-2 gap-3 *:border *:size-12 *:text-center *:place-content-center *:font-semibold">
            <li>XXS</li>
            <li>XS</li>
            <li>S</li>
            <li>M</li>
        </ul>
        <hr />
        <button className={`py-2 w-full bg-stone-900 text-slate-50 mb-2 ${isInCart && 'pointer-events-none'}`} onClick={() => addToCart(product.id)}>
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
        <div className="flex *:flex-1 *:text-center *:cursor-pointer">
            <div className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${content === product.description && 'border-slate-500'}`} onClick={() => setContent(product.description)}>Product Details</div>
            <div className={`border-b-2 py-1 hover:border-slate-500 hover:border-b ${content === product.reviews && 'border-slate-500'}`} onClick={() => setContent(product.reviews)}>Reviews</div>
        </div>
        <div className={`flex-grow overflow-x-hidden overflow-y-auto ${typeof content === 'string' ? "p-4 bg-slate-50" : ''}`}>
            {content}
        </div>
      </div>
    </div>
    <Products List={category} Label={`Similliar`} />
    </>
   
  )
}

export async function loader({params}) {
  let id = params.id
  let data = await fetch(`https://dummyjson.com/products/${id}`)
  let product = await data.json()  
  let categoryList = await fetch('https://dummyjson.com/products/category/'+ product.category)
  categoryList = await categoryList.json()

  return Promise.all([product, categoryList.products])
}
