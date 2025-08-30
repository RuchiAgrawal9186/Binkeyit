import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Divider from "./Divider";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import toast from "react-hot-toast";
import { logout } from "../store/userSlice";
import { AxiosError } from "axios";
import AxiosToastError from "../utils/AxiosToastError";
import { baseURL } from "../common/SummaryApi";
import { IconExternalLink } from "@tabler/icons-react";

const UserMenu = ({ handleCloseUserMenu }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleLogout = async () => {
    try {
      let res = await Axios({
        baseURL,
        ...SummaryApi?.logout,
      });

      if (res?.data?.success) {
        dispatch(logout());
        localStorage.clear();
        handleCloseUserMenu();
        toast.success(res?.data?.message);
        navigate("/");
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
      <div className="text-sm item-center gap-2">
        <span className="max-w-52 text-ellipsis line-clamp-1">
          {user?.name || user?.email}
        </span>
        <Link
          to={"/dashboard/profile"}
          className="hover:text-blue-400 cursor-pointer"
        >
          <IconExternalLink stroke={2} />
        </Link>
      </div>
      <Divider />
      <div className="text-sm grid gap-2">
        <Link
          to={"/dashboard/address"}
          className="px-2 hover:bg-slate-400 py-1"
        >
          Save Address
        </Link>
        <Link
          to={"/dashboard/myorders"}
          className="px-2 hover:bg-slate-400 py-1"
        >
          My Orders
        </Link>
        <Link
          to={"/dashboard/faviourte"}
          className="px-2 hover:bg-slate-400 py-1"
        >
          Faviourte
        </Link>
        <button
          className="text-left hover:bg-slate-400 py-1"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
