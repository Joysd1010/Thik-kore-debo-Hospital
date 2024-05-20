import { FaFacebook,FaInstagram,FaTwitter, FaYoutube  } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { BiLocationPlus, BiLogoGmail} from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
   <>
        <div className=" md:px-10 py-3 grid grid-cols-1 md:grid-cols-3 px-5 shadow-">
          {/* -------------------------------------Hospital details----------------------------------------------- */}
          <div className="  flex flex-col gap-4">
            <div className=" flex items-center gap-3">
              <img
                src="https://i.ibb.co/n1xpXW5/LOGO.png"
                alt=""
                className=" max-w-20"
              />{" "}
              <h1 className=" font-bold text-4xl">Thik Kore Dibo</h1>
            </div>
            <h3>Empowering Health with Compassionate Care and Advanced Healing Solutions</h3>
            <div className=" flex gap-5 ">
                <FaFacebook className=" hover:animate-flip text-blue-900 hover:text-indigo-400" size={30}/>
                <FaTwitter className=" hover:animate-flip text-blue-900 hover:text-indigo-400" size={30}/>
                <FaYoutube className=" hover:animate-flip text-blue-900 hover:text-indigo-400" size={30}/>
                <FaInstagram className=" hover:animate-flip text-blue-900 hover:text-indigo-400" size={30}/>
            </div>
    
          </div>
          {/* -----------------------------------------Popular Service--------------------------------------------------- */}
           <div className=" md: pt-5">
              <h1 className=" text-2xl font-semibold">Important Links</h1>
              <div className="text-base flex flex-col gap-3 text-pink-900">
                <NavLink to={'/'} className={`hover:translate-x-2 duration-300`} >Home </NavLink>
                <NavLink to={'/doctors'} className={`hover:translate-x-2 duration-300`} >Doctors </NavLink>
                <NavLink to={'/blog'}  className={`hover:translate-x-2 duration-300`} >Blogs</NavLink>
                <NavLink to={'/services'} className={`hover:translate-x-2 duration-300`} >Service</NavLink>
              </div>
            </div>
            {/* ----------------Contact us part of the footer------------------- */}
            <div className="flex flex-col gap-3 md:pt-5"> 
            <h1 className=" text-2xl font-semibold">GET IN TOUCH</h1>
              <div className=" flex items-center gap-2"><BiLogoGmail  size={25}/>info@kiddo.com</div>
              <div className=" flex items-center gap-2"><BiLocationPlus  size={25}/>123 Street, City, Country</div>
              <a href="tel:+8801580812107" className=" flex items-center gap-2"><BsFillTelephoneFill size={25}/>123-456-7890</a>
            
            </div>
        
          
        </div>
        <h1 className=" text-center text-sm py-2 text-white bg-[#454343]">
        © 2023 made by Joy Sutradhar & Antar Nath ❤️
      </h1>
   </>
  );
};

export default Footer;
