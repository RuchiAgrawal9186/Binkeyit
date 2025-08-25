import React, { Fragment, useState } from "react";
import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import toast from "react-hot-toast";
import axios from "axios";
import SummaryApi, { baseURL } from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [data, setData] = useState({
    email: "",
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
        ...SummaryApi?.forgot_password,
        data: data,
      });
      if (res?.data?.error) {
        toast.error(res?.data?.message);
      }
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/verification-otp", {
          state: data,
        });
        setData({
          email: "",
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <Fragment>
      <section className="w-full container mx-auto px-2">
        <div className="bg-white my-4 w-full max-w-lg mx-auto p-6 rounded-lg">
          <p className="text-2xl font-bold text-center">Forgot password</p>

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

            <button
              disabled={!validValue}
              className="bg-green-800 text-white font-bold my-3 tracking-wide cursor-pointer hover:bg-green-700 py-2 rounded"
            >
              Send Otp
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

export default ForgotPassword;
