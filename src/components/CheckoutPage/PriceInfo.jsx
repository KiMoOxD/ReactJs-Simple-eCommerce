import { useCart } from "../../context/ShoppingCartContext";

export default function PriceInfo({ progress }) {
  let {cartItems} = useCart()
  let totalPrice =
    cartItems.length > 0 ? cartItems.reduce(
      (totalPrice, item) => totalPrice + item.price * item.quantity,0).toFixed(2)
      : 0;
  let savings = cartItems.length > 0 ? cartItems.reduce(
    (totalSavings, item) => totalSavings + (item.price * item.discount) / 100 * item.quantity, 0).toFixed(2)
      : 0;

  return (
    <div class="mt-6 grow sm:mt-8 lg:mt-0 p-4 lg:p-10">
      <div class="space-y-3 rounded-lg border border-gray-100 bg-gray-50 p-6 ">
        <p className="text-xl font-semibold">Order Summary</p>
        <div class="space-y-2">
          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500">Price</dt>
            <dd class="text-base font-medium text-gray-900">${totalPrice}</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500">Savings</dt>
            <dd class="text-base font-medium text-green-500">-${savings}</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500">Delivery Charges</dt>
            <dd class="text-base font-medium text-gray-900">Free</dd>
          </dl>

          <dl class="flex items-center justify-between gap-4">
            <dt class="text-base font-normal text-gray-500">Tax</dt>
            <dd class="text-base font-medium text-gray-900">$0</dd>
          </dl>
        </div>

        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
          <dt class="text-base font-bold text-gray-900">
            Total
          </dt>
          <dd class="text-base font-bold text-gray-900">
            ${(totalPrice - savings).toFixed(2)}
          </dd>
        </dl>
        <button className={`border ${progress === 3 && cartItems.length !== 0 ? 'bg-stone-950 text-white hover:text-black hover:bg-transparent hover:border-black' : 'bg-stone-200 text-stone-500 pointer-events-none'}  transition py-2 w-full`}>Pay Now</button>
      </div>
    </div>
  );
}
