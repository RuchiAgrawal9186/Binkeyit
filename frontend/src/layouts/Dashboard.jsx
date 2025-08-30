import React from "react";
import UserMenu from "../components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto p-3 grid lg:grid-col-[250px,1fr]">
        <div className="py-4 sticky top-24 overflow-y-auto hidden lg:block">
          <UserMenu></UserMenu>
        </div>
              <div className="bg-white p-3">
                  <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
