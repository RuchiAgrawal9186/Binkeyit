import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import { Link } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import { logout } from "../store/userSlice";
import { AxiosError } from "axios";
import AxiosToastError from "../utils/AxiosToastError";
import { baseURL } from "../common/SummaryApi";

const UserMenu = ({ handleCloseUserMenu }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      let res = await Axios({
        baseURL,
        ...SummaryApi?.logout,
      });

      if (res?.data?.success) {
        dispatch(logout());
        handleCloseUserMenu();
        toast.success(res?.data?.message);
      }
      if (res?.data?.error) {
        toast.error(res?.data?.message);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };
  return (
    <div>
      <div className="font-semibold">My Account</div>
      <div className="text-sm">{user?.name || user?.email}</div>
      <Divider />
      <div className="text-sm grid gap-2">
        <Link to={""} className="px-2 hover:bg-slate-400 py-1">
          Save Address
        </Link>
        <Link to={""} className="px-2 hover:bg-slate-400 py-1">
          My Orders
        </Link>
        <Link to={""} className="px-2 hover:bg-slate-400 py-1">
          Faviourte
        </Link>
        <button className="text-left bg-red-100" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
