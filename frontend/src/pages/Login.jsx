import React, { Fragment, useState } from "react";
import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import toast from "react-hot-toast";
import axios from "axios";
import SummaryApi, { baseURL } from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confiempassword: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios({
        baseURL,
        ...SummaryApi?.login,
        data: data,
      });
      if (res?.data?.error) {
        toast.error(res?.data?.message);
      }
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <Fragment>
      <section className="w-full container mx-auto px-2">
        <div className="bg-white my-4 w-full max-w-lg mx-auto p-6 rounded-lg">
          <p className="text-2xl font-bold text-center">Login</p>

          <form action="" className="grid gap-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-1">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                className="bg-blue-50 p-2 border rounded"
                value={data?.email}
                name="email"
                id="email"
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="grid gap-1">
              <label htmlFor="password">Password : </label>
              <div className="bg-blue-50 p-1 border rounded flex item-center focus-within:outline">
                <input
                  type={showPassword?.password ? "text" : "password"}
                  className="bg-blue-50 p-1 border rounded w-full items-center flex outline-none border-none"
                  value={data?.password}
                  name="password"
                  id="password"
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
              <Link
                to={"/forgot-password"}
                className="block ml-auto text-green-800 hover:text-green-700 font-semibold"
              >
                Forgot password
              </Link>
            </div>

            <button
              disabled={!validValue}
              className="bg-green-800 text-white font-bold my-3 tracking-wide cursor-pointer hover:bg-green-700 py-2 rounded"
            >
              Login
            </button>
          </form>
          <p>
            Don't have account ?{" "}
            <Link
              to={"/register"}
              className="font-semibold text-green-800 hover:text-green-700"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
