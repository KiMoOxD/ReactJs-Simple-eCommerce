import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="flex flex-col items-center w-[450px] px-4 max-w-full">
        <FiCheckCircle className="text-green-600 text-6xl mb-2" />
        <p className="text-2xl font-semibold">Payment Successful</p>
        <p className="text-md text-stone-500">Thank you for your purchase</p>
        <div className="flex flex-col gap-2 border rounded-lg p-5 text-sm mt-5 w-full">
          <div className="flex justify-between items-center">
            <p>Amount Paid:</p>
            <p>$100.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Date & Time:</p>
            <p>January 22, 2024, 10:30 AM</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Reference Number:</p>
            <p>1234567890</p>
          </div>
        </div>
        <Link to={'/'}><button type="button" className="rounded border border-black py-2 px-4 text-black mt-5">Return to Homepage</button></Link>
      </div>
    </div>
  );
}
