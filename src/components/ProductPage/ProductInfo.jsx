export default function ProductInfo({ product }) {
  return (
    <>
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
    </>
  );
}
