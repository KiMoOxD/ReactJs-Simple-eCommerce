
export default function CheckOutProgress({ progress }) {
  console.log(progress)
  return (
    <div className="relative self-start h-0.5 bg-stone-200 max-w-full w-[300px] rounded mx-auto">
        <div className={`absolute top-1/2 translate-y-[-50%] left-0 size-7 rounded-full ${progress === 1 ? 'bg-stone-950 text-white' : 'bg-white text-stone-500'} border border-stone-200`}>
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-sm">1</p>
            <p className={`absolute top-[120%] left-1/2 translate-x-[-50%] text-xs w-16 text-center text-black`}>Shipping & Gift Option</p>
        </div>
        <div className={`absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] size-7 rounded-full border border-stone-200 ${progress === 2 ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-sm">2</p>
            <p className="absolute top-[120%] left-1/2 translate-x-[-50%] text-xs w-16 text-center text-black">Payment & Billing</p>
        </div>
        <div className={`absolute top-1/2 translate-y-[-50%] right-0 size-7 rounded-full border border-stone-200 ${progress === 3 ? 'bg-stone-950 text-white' : 'bg-white text-black'}`}>
            <p className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-semibold text-sm">3</p>
            <p className="absolute top-[120%] left-1/2 translate-x-[-50%] text-xs w-16 text-center text-black">Review & Place Order</p>
        </div>
    </div>
  )
}
