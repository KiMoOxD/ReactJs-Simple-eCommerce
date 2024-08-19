import CheckOutProgress from "../components/CheckoutPage/CheckOutProgress";
import BillingAdressForm from '../components/CheckoutPage/BillingAdressForm';
import PaymentForm from '../components/CheckoutPage/PaymentForm';
import Separator from "../components/Other/Separator";
import { useState } from "react";

export default function CheckoutPage() {
    let [progress, setProgress] = useState(1)
    function handleProgress(prog) {
        setProgress(prog)
    }
  return (
    <div className="min-h-[65vh] w-full flex flex-col lg:flex-row gap-10 pt-5">
      <div className="p-5 flex flex-col justify-center gap-5 lg:p-10 max-w-full w-[600px]">
        <CheckOutProgress progress={progress} />
        <Separator level={7} />
        <Separator level={3} />
        {progress === 1 && <BillingAdressForm handleProgress={handleProgress} />}
        {progress === 2 && <PaymentForm />}
      </div>
      <div className="bg-slate-300">sd</div>
    </div>
  );
}
