import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";


const HomeMain = () => {
  const LoggedUser = JSON.parse(localStorage.getItem("user"));
  console.log(LoggedUser.email)
  return (
    <div>
     
    </div>
  );
};

export default HomeMain;
