
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="gap-4 bg-blue-50 md:gap-3 md:flex-row flex flex-col md:items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? " font-bold text-base md:text-xl text-blue-600 px-5 py-2   duration-300"
            : " font-bold text-base md:text-xl px-5  duration-300"
        }
      >
        Home
      </NavLink>
      <NavLink to={'doctors'} className={({ isActive }) =>
          isActive
            ? " font-bold text-base md:text-xl text-blue-600 px-5 py-2   duration-300"
            : " font-bold text-base md:text-xl px-5  duration-300"
        }>Doctors</NavLink>
     
      <NavLink to={'services'} className={({ isActive }) =>
          isActive
            ? " font-bold text-base md:text-xl text-blue-600 px-5 py-2   duration-300"
            : " font-bold text-base md:text-xl px-5  duration-300"
        }> Services </NavLink>
      <NavLink to={'blog'} className={({ isActive }) =>
          isActive
            ? " font-bold text-base md:text-xl text-blue-600 px-5 py-2   duration-300"
            : " font-bold text-base md:text-xl px-5  duration-300"
        }>Blog</NavLink>
    </div>
  );
};

export default NavBar;
