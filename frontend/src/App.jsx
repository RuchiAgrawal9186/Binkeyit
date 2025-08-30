import { Fragment, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import fetchUserDetails from "./store/fetchUserDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
const dispatch = useDispatch()
  const fetchUser = async() => {
    const userData = await fetchUserDetails()
    console.log(userData,"userData")
    dispatch(setUserDetails(userData.data))
  }
  useEffect(() => {
    fetchUser()
  },[])
  return (
    <Fragment>
      <Toaster />
      <Navbar />
      <main className="min-h-[83dvh]">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
