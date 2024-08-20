import { CiCirclePlus } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";

export default function AddressBar() {
  return (
    <>
      <p className="text-2xl">Saved Addresses</p>
      <div className="flex flex-wrap gap-3 md:h-[150px] *:w-full sm:*:w-fit p-1 rounded cursor-pointer">
        <div className="bg-white rounded min-w-60 border border-stone-950 p-5 relative">
          <p className="text-lg font-semibold mb-2">Shannon Baumbach</p>
          <p className="text-sm mb-0.5">4848 Bd St Laurent</p>
          <p className="text-sm mb-0.5">Quebec , Montréal - H2T 1R5</p>
          <p className="text-sm mb-0.5">Mobile No : (514) 510-5889</p>
          <CiCircleCheck className="text-2xl absolute -top-3.5 -right-2.5 bg-white" />
        </div>
        <div className="bg-white rounded min-w-60 border hover:border-stone-950 transition p-5">
          <p className="text-lg font-semibold mb-2">David Bumpal</p>
          <p className="text-sm mb-0.5">2020 NW 25th Ave</p>
          <p className="text-sm mb-0.5">Florida, Pompano Beach - 33069</p>
          <p className="text-sm mb-0.5">Mobile No : (954) 564-7021</p>
        </div>
        <div className="bg-stone-100/50 rounded min-w-36 border p-2 flex justify-center items-center hover:border-stone-300 transition">
          <div className="flex flex-col gap-1 items-center">
            <CiCirclePlus className="text-3xl text-stone-500" />
            <p className="text-sm text-stone-400">Add Address</p>
          </div>
        </div>
      </div>
    </>
  );
}
