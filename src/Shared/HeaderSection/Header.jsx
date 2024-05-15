import { Link } from "react-router-dom";
import NavBar from "../../Components/Home/NavBar";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" flex items-center md:mx-8 justify-between mx-3 "> 
        {/* --------------------------------------------------LOGO------------------------------------------------- */}
      <Link to={'/'} className=" flex items-center gap-3">
        <img src="https://i.ibb.co/n1xpXW5/LOGO.png" className=" w-20" />
        <h1 className=" text-3xl font-bold">Thik Kore Dibo</h1>
      </Link>

      <div>
        <NavBar/>
      </div>
      <div className=" flex">
        <a href="tel:+8801580812107" className=" hover:text-blue-700 flex items-center gap-2 text-sm border-0 hover:border-2 duration-300 px-3 hover:border-blue-700 rounded-xl"> <FaPhoneAlt size={20} color="blue" /> +016-XXXX</a>
        <Link className=" px-5 py-2 rounded-xl bg-blue-500 text-white hover:border-2 hover:border-blue-600 hover:text-blue-700 hover:bg-white duration-300">Appointment</Link>
        <Link></Link>
      </div>

    </div>
  );
};

export default Header;
