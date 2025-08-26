import { IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SummaryApi, { baseURL } from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import Axios from "../utils/Axios";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confiempassword: false,
  });

  useEffect(() => {
    if (!location?.state?.data?.success) {
      navigate("/");
    }

    if (location?.state?.email) {
      setData((prev) => ({
        ...prev,
        email: location.state.email,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validValue = Object.values(data).every((el) => el);
  // const validValue = false
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios({
        baseURL,
        ...SummaryApi?.reset_password,
        data: data,
      });

      if (res?.data?.error) {
        toast.error(res?.data?.message);
      }
      if (res?.data?.success) {
        console.log(res?.data?.message, "message");
        toast.success(res?.data?.message);
        setData({
          email: "",
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };
  return (
    <Fragment>
      <section className="w-full container mx-auto px-2">
        <div className="bg-white my-4 w-full max-w-lg mx-auto p-6 rounded-lg">
          <p className="text-2xl text-center font-bold">Reset Password</p>

          <form action="" className="grid gap-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-1">
              <label htmlFor="newPassword">New password : </label>
              <div className="bg-blue-50 p-1 border rounded flex item-center focus-within:outline">
                <input
                  type={showPassword?.password ? "text" : "password"}
                  className="bg-blue-50 p-1 border rounded w-full items-center flex outline-none border-none"
                  value={data?.newPassword}
                  name="newPassword"
                  id="newPassword"
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <div
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      password: !prev?.password,
                    }))
                  }
                  className="cursor-pointer flex items-center"
                >
                  {showPassword?.password ? (
                    <IconEyeOff stroke={2} />
                  ) : (
                    <IconEye stroke={2} />
                  )}
                </div>
              </div>
            </div>
            <div className="grid gap-1">
              <label htmlFor="confirmPassword">Confirm Password : </label>
              <div className="bg-blue-50 p-1 border rounded flex item-center focus-within:outline">
                <input
                  type={showPassword?.confiempassword ? "text" : "password"}
                  className="bg-blue-50 p-1 border rounded w-full items-center flex outline-none border-none"
                  value={data?.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  placeholder="Enter your confirm password"
                />
                <div
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confiempassword: !prev?.confiempassword,
                    }))
                  }
                  className="cursor-pointer flex item-center"
                >
                  {showPassword?.confiempassword ? (
                    <IconEyeOff stroke={2} />
                  ) : (
                    <IconEye stroke={2} />
                  )}
                </div>
              </div>
            </div>
            <button
              disabled={!validValue}
              className="bg-green-800 text-white font-bold my-3 tracking-wide cursor-pointer hover:bg-green-700 py-2 rounded"
            >
              Change Password
            </button>
          </form>
          <p>
            Alredy have account ?{" "}
            <Link
              to={"/login"}
              className="font-semibold text-green-800 hover:text-green-700"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default ResetPassword;
