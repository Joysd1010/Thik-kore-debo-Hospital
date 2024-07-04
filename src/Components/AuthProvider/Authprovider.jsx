import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");

  const logOut=(data)=>{
    console.log(data)
  }

  const authInfo = {
    user,logOut,
    loading,
    setUser,
    setLoading,
    setToken,
  };

  


  useEffect(() => {
    if (token) {
      
      localStorage.setItem("access_token", token);
      const LoggedUser = JSON.parse(localStorage.getItem("user"));
      setUser(LoggedUser);
      setLoading(false);
    } 
  }, [token]);
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
