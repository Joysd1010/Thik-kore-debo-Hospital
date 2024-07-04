import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import axios from "axios";
import Google from "../GoogleBtn/Google";

const Register = () => {
  const { register, reset, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [Email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [Hide, setHide] = useState(true);
  const [Hide2, setHide2] = useState(true);
  const [RegisterdUser, setRegisterdUser] = useState(false);
  const [otp, setOtp] = useState("");

  const handleClick = async (email) => {
    try {
      if (otp) {
        console.log(otp,email)
        const response = await axios.post(
          `http://127.0.0.1:8000/api/v1/auth/verify/${email}/`,
          { otp: otp }
        );
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Completed",
            text: "Successfully Completed SignUp Process",
            icon: "success",
          });
          console.log(response.data);
          setLoading(false);
          reset();
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.response || error.message);
      Swal.fire({
        title: "Error",
        text: "Failed to verify OTP. Please try again.",
        icon: "error",
      });
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setEmail(data.email)
      const User = {
        first_name: data.FirstName,
        last_name: data.LastName,
        email: data.email,
        phone_number: data.Phone,
        password: data.password,
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/register/",
        User
      );
      console.log("response: ", response.data);
      if (response.status === 201) {
        setRegisterdUser(true);
        Swal.fire({
          title: "SignUp Process Successful",
          text: `A verification code has been sent to ${User.email}. Please enter it below.`,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "No, Not Now",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            document.getElementById("my_modal_5").showModal();
            
          }
        });
      }
    } catch (error) {
      console.error("Error during registration:", error.response || error.message);
      Swal.fire({
        title: "Error",
        text: "Failed to complete registration. Please try again.",
        icon: "error",
      });
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto bg-white px-3 md:px-20 box-border">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img
            src="https://i.ibb.co/v1C9Vrq/Log-in-animation.gif"
            alt="Register"
            className="w-full"
          />
        </div>
        <div>
          <h1 className="mt-10 mb-3 text-3xl font-semibold text-center">
            Please Register
          </h1>
          <hr className="w-1/2 mx-auto border-gray-500 border-2" />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("FirstName", { required: true })}
                  placeholder="Enter First Name"
                  className="input bg-white input-bordered"
                />
                {errors.FirstName && (
                  <span className="text-red-600">First Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("LastName", { required: true })}
                  placeholder="Enter Last Name"
                  className="input bg-white input-bordered"
                />
                {errors.LastName && (
                  <span className="text-red-600">Last Name is required</span>
                )}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-xl text-[#1F2937] font-semibold label-text">
                  Phone Number
                </span>
              </label>
              <input
                type="tel"
                pattern="[0-9]{11}"
                {...register("Phone", { required: true })}
                placeholder="01x-xxxx-xxxx"
                className="input bg-white input-bordered"
              />
              {errors.Phone && (
                <span className="text-red-600">Phone Number is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-xl text-[#1F2937] font-semibold label-text">
                  Email
                </span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter Email"
                className="input bg-white input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text">
                    Password
                  </span>
                </label>
                <input
                  type={`${!Hide ? "text" : "password"}`}
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Enter Password"
                  className="input bg-white input-bordered"
                />
                {Hide ? (
                  <div
                    onClick={() => setHide(false)}
                    className=" z-50 w-10 relative left-[132px] md:left-52 bottom-8 text-blue-600"
                  >
                    <BiSolidShow size={20} />
                  </div>
                ) : (
                  <div
                    onClick={() => setHide(true)}
                    className=" relative z-50 w-10 left-[132px] md:left-52 bottom-8 text-blue-600"
                  >
                    <BiSolidHide size={20} />
                  </div>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must be 8 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must have one uppercase letter, one lowercase
                    letter, one number, and one special character.
                  </p>
                )}
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="text-xl text-[#1F2937] font-semibold label-text flex gap-2">
                    Confirm <span className="hidden md:block">Password</span>
                  </span>
                </label>
                <input
                  type={`${!Hide2 ? "text" : "password"}`}
                  placeholder=""
                  className="w-full bg-white max-w-xs input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {Hide2 ? (
                  <span
                    onClick={() => setHide2(false)}
                    className="w-10  relative left-32 md:left-52 bottom-8 text-blue-600"
                  >
                    <BiSolidShow size={20} />
                  </span>
                ) : (
                  <span
                    onClick={() => setHide2(true)}
                    className="w-10 relative left-[132px] md:left-52 bottom-8 text-blue-600"
                  >
                    <BiSolidHide size={20} />
                  </span>
                )}
                {errors.confirmPassword && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <p>{error && <span className="text-red-600">{error}</span>}</p>
            <div className="form-control ">
              {!loading ? (
                <input
                  className="btn btn-info text-xl"
                  type="submit"
                  value="Sign Up"
                />
              ) : (
                <div className=" mx-auto ">
                  <InfinitySpin
                    visible={true}
                    width="200"
                    color="#4fa94d"
                    ariaLabel="infinity-spin-loading"
                  />
                </div>
              )}
            </div>
          </form>
          <p className="py-1 text-center text-xl">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-blue-700">
                Login
              </Link>
            </small>
          </p>
          <div className="">
            <Google/>
          </div>
          <div className="flex justify-around py-3">
            {RegisterdUser && (
              <button
                className="btn btn-success text-white"
                onClick={() => {
                  document.getElementById("my_modal_5").showModal();
                  setRegisterdUser(true);
                }}
              >
                OTP Verify
              </button>
            )}
          </div>

          <dialog
            id="my_modal_5"
            className="modal modal-middle sm:modal-middle"
          >
            <div className="modal-box bg-blue-50 flex flex-col items-center">
              <h3 className="font-bold text-lg text-center">
                Enter Your OTP here
              </h3>

              <div className="modal-action ">
                <form method="dialog" onSubmit={(e) => {
                    e.preventDefault();
                    handleClick(Email);
                  }}>
                  <input
                    type="text"
                    className="bg-white px-3 py-3 rounded-xl border-2 "
                    name="otp"
                    value={otp}
                    required
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="mx-3 btn bg-blue-600 border-none text-white"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Register;
