import { CiCirclePlus } from "react-icons/ci";

export default function PaymentBar() {
  return (
    <>
      <p className="text-2xl">Saved Payment</p>
      <div className="flex flex-wrap gap-3 md:h-[150px] *:w-full sm:*:w-fit p-1 rounded cursor-pointer">
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
        <div className="bg-stone-100/50 rounded min-w-36 border p-2 flex justify-center items-center hover:border-stone-300 transition">
          <div className="flex flex-col gap-1 items-center">
            <CiCirclePlus className="text-3xl text-stone-500" />
            <p className="text-sm text-stone-400">Add Payment</p>
          </div>
        </div>
      </div>
    </>
  );
}
