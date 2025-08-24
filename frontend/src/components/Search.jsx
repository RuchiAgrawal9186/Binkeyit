import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IconSearch } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };
  return (
    <div className="w-full min-w-[320px] lg:min-w-[420px] h-8 rounded-lg border-gray-500 overflow-hidden flex items-center  text-neutral-600 bg-slate-200 group-focus-within:border-blue-400">
      <button className="flex justify-center items-center h-full p-3">
        <IconSearch stroke={2} />
      </button>
      <div>
        {isSearchPage ? (
          <div className="w-full h-full">
            <input
              type="text"
              placeholder="search for grocary items"
              autoFocus
              className="bg-transparent w-full h-full outline-none"
            />
          </div>
        ) : (
          <div
            onClick={redirectToSearchPage}
            className="w-full h-full flex items-center"
          >
            {" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                `Search "milk"`,
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                `Search "tea"`,
                1000,
                `Search "paneer"`,
                1000,
                `Search "sugar"`,
                1000,
                `Search "chocolate"`,
                1000,
                `Search "curd"`,
                1000,
                `Search "chips"`,
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
