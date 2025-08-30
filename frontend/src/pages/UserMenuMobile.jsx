import React from "react";
import UserMenu from "../components/UserMenu";
import { IconX } from "@tabler/icons-react";

const UserMenuMobile = () => {
  return (
    <section className="bg-white h-full w-full py-2">
      <button onClick={()=> window.history.back()}className="text-neutral-800 block w-fit ml-auto">
        <IconX stroke={2} />
      </button>
      <div className="container mx-auto px-3 p">
        <UserMenu></UserMenu>
      </div>
    </section>
  );
};

export default UserMenuMobile;
