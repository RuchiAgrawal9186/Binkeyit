import React, { Fragment } from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, useNavigate } from "react-router-dom";
import { IconUserCircle } from "@tabler/icons-react";
import useMobile from "../hooks/useMobile";
import { IconShoppingCart } from "@tabler/icons-react";

const Navbar = () => {
  const [isMobile] = useMobile();
  const navigate = useNavigate()

  const redirectLoginPage = () => {
    navigate("/login")
  }

  return (
    <Fragment>
      <header className="lg:h-15 sm:h-27 shadow-md sticky top-0 flex flex-col items-center sm:gap-2">
        <div className="container mx-auto items-center  px-2 justify-between">
          <div className="h-full flex justify-between items-center">
            {/* logo */}
            <Link to={"/"} className="h-full items-center">
              <img
                src={logo}
                alt="logo"
                width={170}
                height={50}
                className="hidden lg:block pt-2"
              />
              <img
                src={logo}
                alt="logo"
                width={120}
                height={60}
                className="lg:hidden pt-1"
              />
            </Link>

            {/* search */}
            <div className="hidden lg:block pt-2">
              <Search></Search>
            </div>

            {/* login and my card */}
            <div className="">
              <button className="text-neutral-600 lg:hidden sm:mt-2">
                <IconUserCircle stroke={2} />
              </button>
              {/* desktop showing */}
              <div className="hidden lg:flex  gap-10 item-center ">
                <button onClick={redirectLoginPage} className="text-lg px-2">Login</button>
                <button className="flex items-center gap-2 bg-green-800 text-white px-2 py-2 rounded mt-1 hover:bg-green-700">
                  <div className="animate-bounce">
                    <IconShoppingCart size={25} />
                  </div>
                  <div className="font-semibold"> 
                    <p>My Cart</p>
                   
                  </div>
                </button>
              </div>
            </div>

            {/* my card */}
          </div>
        </div>
        <div className="container mx-auto px-2 lg:hidden">
          <Search />
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
