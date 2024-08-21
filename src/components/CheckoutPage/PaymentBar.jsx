
export default function PaymentBar({ handleProgress }) {
  return (
    <>
      <p className="text-2xl">Saved Payment</p>
      <div className="flex flex-wrap gap-1 lg:gap-3 md:min-h-[150px] *:w-full sm:*:w-fit p-1 rounded cursor-pointer">
        <div className="bg-white rounded min-w-60 border border-stone-950 p-5 relative">
          <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg" alt="" />
          <p className="text-sm mt-3">**** **** **** 9568</p>
          <p className="text-sm mb-3">08/26</p>
          <p className="text-xs mb-0.5">Osama Mohamed</p>
        </div>
        <div className="bg-white rounded min-w-60 border hover:border-stone-950 transition p-5">
          <img className="h-8 w-auto" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
          <p className="text-sm mt-3">**** **** **** 3235</p>
          <p className="text-sm mb-3">12/30</p>
          <p className="text-xs mb-0.5">Kareem Mohamed</p>
        </div>
      </div>
      <button type="button" className="px-8 py-1.5 text-white hover:text-black border border-transparent hover:border hover:border-stone-300 transition focus:ring-4 focus:outline-none font-medium rounded-sm text-md w-fit text-center bg-stone-950 hover:bg-transparent" onClick={() => handleProgress(3)}>Next</button>
    </>
  );
}
