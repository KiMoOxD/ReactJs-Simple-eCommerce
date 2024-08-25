import userImg from "../../../images/0af5933b3f00d6f0d6a2de486fa8867b.jpg";
import { GoDotFill } from "react-icons/go";
import { GiEgypt } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserCircle } from "react-icons/pi";
import { SlPresent } from "react-icons/sl";
import { IoExitOutline } from "react-icons/io5";




export default function AccountMenu() {
  return (
    <div className="absolute top-[200%] right-0 border py-4 px-3 w-[300px] h-fit backdrop-blur rounded">
      <div className="flex items-center gap-3">
        <div className="rounded-full border-2 border-white size-12 overflow-hidden">
          <img src={userImg} alt="User PFP" />
        </div>
        <div className="flex-grow text-xs">
          <p className="font-semibold text-white">Kareem Mohammed</p>
          <p className="text-stone-300 mb-1.5 flex items-center gap-1">
            <GoDotFill className="text-green-400 text-[12px]" />
            Active
          </p>
        </div>
      </div>
      <div className="py-1.5 px-3 mt-3 rounded flex gap-2 items-center border border-white text-xs text-white">
        <GiEgypt className="text-sm" />
        <p className="flex-grow">Beni Suef, Egypt</p>
        <button className="py-0.5 px-1.5 transition rounded hover:bg-white hover:text-black">Update</button>
      </div>
      <div className="py-1.5 px-3 mt-2 flex gap-2 items-center text-sm text-white hover:bg-white/10 rounded">
        <IoSettingsOutline/>
        <p className="flex-grow">Account Settings</p>
        <MdArrowForwardIos />
      </div>
      <div className="py-1.5 px-3 mt-0.5 flex gap-2 items-center text-sm text-white hover:bg-white/10 rounded mb-1">
        <PiUserCircle/>
        <p className="flex-grow">Profile</p>
        <MdArrowForwardIos />
      </div>
      <div className="py-4 px-3 mt-1 flex gap-3 items-center text-xs text-white bg-white/10 rounded">
        <SlPresent className="text-2xl"/>
        <p className="flex flex-col flex-grow">
          <span>Refer a friend</span>
          <span>7 Invitation Remaining</span>
        </p>
      </div>
      <div className="py-1.5 px-3 mt-0.5 flex gap-2 items-center text-sm text-white hover:bg-white/10 rounded mb-2">
        <IoExitOutline />
        <p className="flex-grow">Sign Out</p>
      </div>
    </div>
  );
}
