import { NavLink } from "react-router-dom";


export default function NavLinks() {
  return (
    <ul className="hidden lg:flex gap-2 *:w-24 *:h-12 *:flex *:justify-center *:transition *:cursor-pointer *:items-center">
      <NavLink className="hover:bg-slate-200" to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink className="hover:bg-slate-200">
        <li>Catalogue</li>
      </NavLink>
      <NavLink className="hover:bg-slate-200">
        <li>Collections</li>
      </NavLink>
      <NavLink className="hover:bg-slate-200">
        <li>Popular</li>
      </NavLink>
    </ul>
  );
}
