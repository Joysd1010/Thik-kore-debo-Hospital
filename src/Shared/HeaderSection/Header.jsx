import { Link } from "react-router-dom";
import NavBar from "../../Components/Home/NavBar";
import { FcMenu } from "react-icons/fc";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuOpen = () => {
    setMenu(true);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };

  return (
    <div className="flex py-3 items-center md:px-10 justify-between px-3 shadow-blue-100 shadow-md">
      {/* --------------------------------------------------LOGO------------------------------------------------- */}
      <Link to={"/"} className="flex items-center gap-3">
        <img src="https://i.ibb.co/n1xpXW5/LOGO.png" className="w-20" />
        <h1 className="text-3xl font-bold">Thik Kore Dibo</h1>
      </Link>
      {/* --------------------------------------------------Navigation------------------------------------------- */}
      <div
        className={`flex justify-between gap-3 duration-500 md:static ease-out md:flex-row flex-col absolute bg-white md:items-center md:w-2/3 ${
          menu ? "left-[270px] top-20 px-3 py-3" : "-left-40 top-20"
        }`}
      >
        <div>
          <NavBar />
        </div>
        <div className="flex md:items-center gap-2">
          <Link to={"/signup"} className="hover:text-blue-700 duration-400 font-bold">
            SignUp
          </Link>
          /
          <Link to={"/login"} className="hover:text-blue-700 duration-400 font-bold">
            Login
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------Responsive button-------------------------------------- */}
      <div className="md:hidden">
        {!menu ? (
          <div className="rotate-0 duration-300 rounded-lg" onClick={handleMenuOpen}>
            <FcMenu color="blue" size={35} />
          </div>
        ) : (
          <div className="rotate-0 duration-300 rounded-lg" onClick={handleMenuClose}>
            <RxCross1 color="blue" size={25} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
