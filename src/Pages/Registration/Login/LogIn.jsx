import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Components/AuthProvider/Authprovider";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState();
  const { user, loading, setUser, setLoading, setToken } =
    useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data, event) => {
    setLoading(true);
    event.preventDefault();
  
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/login/",
        data
      );
  
      console.log("response", response);
  
      if (response.status === 200) {
        setToken(response.data.access_token);
        setUser({ email: response.data.email, full_name: response.data.full_name });
        localStorage.setItem("user",{ email: response.data.email, full_name: response.data.full_name })
        console.log(localStorage.getItem('access_token'),localStorage.getItem('user'))
        Swal.fire({
          title: "Logged in",
          text: "Successfully Logged in",
          icon: "success",
          timer: 2000,
        });
  
        navigate(from, { replace: true });
  
      } else {
       setError(true)
        Swal.fire({
          title: "Error Login",
          text: "Something went wrong",
          icon: "error",
          timer: 2000,
        });
        reset();
      }
  
    } catch (error) {
     
      console.error("Error during login request:", error);
  
      Swal.fire({
        title: "Error",
        text: "Wrong Credentials!!!",
        icon: "error",
        timer: 2000,
      });
      reset();
    }
  
    setLoading(false);
  };
  
  return (
    <div className=" bg-white pt-16 ">
      <div className=" py-10 px-3 md:px-10 md:mx-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
          <div>
            <img
              className=" w-full"
              src="https://i.postimg.cc/Bbq3LpC0/ezgif-com-optimize.gif"
            />
          </div>
          <div className="flex flex-col gap-2 px-8 py-5 border-2 border-blue-500 w-96 rounded-xl">
            <h1 className="text-3xl text-center text-gray-600 ">
              Please Login Here!!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <label htmlFor="mail" className="text-xl text-white">
                Enter Email id
              </label>
              <input
                type="email"
                id="mail"
                placeholder="Enter mail here"
                className="w-full max-w-xs shadow-lg duration-700 bg-white hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <label htmlFor="pass" className="text-xl text-white">
                Enter password
              </label>
              <input
                type="password"
                id="pass"
                placeholder="Enter your password"
                className="w-full max-w-xs shadow-lg duration-700 bg-white hover:shadow-[#5572e6] shadow-[#dd7474] border-blue-600 input input-bordered "
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              {!loading&&(
                <input
                  type="submit"
                  value="Login"
                  className="w-full border-none text-[#1F2937] max-w-xs my-5 duration-1000 shadow-lg hover:shadow-[#5572e6] shadow-[#dd7474] bg-[#F379A7] hover:bg-blue-400 input input-bordered btn"
                />
              )}

              {loading && (
                <div className="w-full border-none text-[#1F2937] max-w-xs my-5 duration-1000 shadow-lg hover:shadow-[#5572e6] shadow-[#dd7474] bg-[#F379A7] hover:bg-blue-400 input input-bordered btn">
                  <RotatingLines
                    visible={true}
                    height="30"
                    width="30"
                    color="blue"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </div>
              )}
            </form>
            <Link className=" text-blue-700 ">Forgot Password?</Link>
            <p className="text-xl text-blue-700 text-center">
              {error && "Wrong Email and Password"}
            </p>

            <p className="text-gray-600">
              Not Registered yet ?
              <Link to={"/signup"} className="text-[#55D1E6] underline">
                {" "}
                Signup
              </Link>{" "}
              now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
