import CheckOutProgress from "../components/CheckoutPage/CheckOutProgress";
import BillingAdressForm from "../components/CheckoutPage/BillingAdressForm";
import PaymentForm from "../components/CheckoutPage/PaymentForm";
import Separator from "../components/Other/Separator";
import { useState } from "react";
import AddressBar from '../components/CheckoutPage/AddressBar'
import { IoMdArrowBack } from "react-icons/io";
import PaymentBar from '../components/CheckoutPage/PaymentBar'
import PriceInfo from '../components/CheckoutPage/PriceInfo'
import CartItemsList from '../components/CheckoutPage/CartItemsList'




export default function CheckoutPage() {
  let [progress, setProgress] = useState(3);

  function handleProgress(prog) {
    setProgress(prog);
  }

  return (
    <div className="min-h-[65vh] w-full flex flex-col md:flex-row  xl:gap-36 2xl:gap-52 pt-5">
      <div className="p-5 flex flex-col gap-2 lg:p-12 max-w-full md:w-[600px] lg:w-[700px] xl:w-[750px]">
        <CheckOutProgress progress={progress} />
        <Separator level={7} />
        {progress > 1 && <button className="rounded py-2 px-4 text-md border self-start flex gap-2.5 items-center"  onClick={() => setProgress(prev => prev-1)}><IoMdArrowBack className="text-sm"/> Back</button>}
        {progress === 1 && (
          <BillingAdressForm handleProgress={handleProgress} />
        )}
        <Separator level={3} />
        {progress === 1 && <AddressBar />}
        {progress === 2 && <PaymentForm />}
        {progress === 2 && <Separator level={3} />}
        {progress === 2 && <PaymentBar />}
        {progress === 3 && <CartItemsList />}
      </div>
      <PriceInfo progress={progress} />
    </div>
  );
}
