import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/Authprovider";

const HomeMain = () => {

const perform=async()=>{
  const {user}=useContext(AuthContext)
  console.log("email:",user?.email)
}
perform()
  return (
    <div>
     
    </div>
  );
};

export default HomeMain;
