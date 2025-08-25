import React, { Fragment, useEffect, useRef, useState } from "react";
import { IconEyeOff } from "@tabler/icons-react";
import { IconEye } from "@tabler/icons-react";
import toast from "react-hot-toast";
import axios from "axios";
import SummaryApi, { baseURL } from "../common/SummaryApi";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToastError";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();
  const inputRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, []);

  const validValue = data?.every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios({
        baseURL,
        ...SummaryApi?.forgot_password_otp,
        data: {
          otp: data?.join(""),
          email: location?.state?.email,
        },
      });
      if (res?.data?.error) {
        toast.error(res?.data?.message);
      }
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        setData(["", "", "", "", "", ""]);
        navigate("/reset-password", {
          state: {
            data: res.data,
            email: location?.state?.email,
          },
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
          <p className="text-2xl font-bold text-center">OTP Verification</p>

          <form action="" className="grid gap-4 mt-6" onSubmit={handleSubmit}>
            <div className="grid gap-1">
              <label htmlFor="otp">Enter your OTP : </label>
              <div className="flex items-center gap-2 justify-between mt-3">
                {data?.map((el, index) => {
                  return (
                    <input
                      key={index}
                      type="text"
                      id="otp"
                      ref={(ref) => {
                        inputRef.current[index] = ref;
                        return ref;
                      }}
                      value={data[index]}
                      onChange={(e) => {
                        let value = e.target.value;
                        const newData = [...data];
                        newData[index] = value;

                        setData(newData);

                        if (value && index < 5) {
                          inputRef.current[index + 1].focus();
                        }
                      }}
                      maxLength={1}
                      className="bg-blue-50 w-full max-w-16 p-2 border rounded text-center font-semibold"
                    />
                  );
                })}
              </div>
            </div>

            <button
              disabled={!validValue}
              className="bg-green-800 text-white font-bold my-3 tracking-wide cursor-pointer hover:bg-green-700 py-2 rounded"
            >
              Verify OTP
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

export default OtpVerification;
