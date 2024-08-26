import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiUserCheck } from "react-icons/fi";




export default function AccountPreMenu() {
  return (
    <div className="absolute top-[200%] right-0 border p-2 w-fit h-fit bg-white text-black rounded">
      <Link to={'/register'} className="py-1.5 px-3 mt-0.5 flex gap-2 items-center text-sm hover:bg-black/10 rounded mb-1">
        <FiUserPlus />
        <p className="flex-grow">Register</p>
      </Link>
      <Link to={'/login'} className="py-1.5 px-3 mt-0.5 flex gap-2 items-center text-sm hover:bg-black/10 rounded">
        <FiUserCheck />
        <p className="flex-grow">Sign in</p>
      </Link>
    </div>
  );
}
