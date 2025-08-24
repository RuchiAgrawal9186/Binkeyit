import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="min-h-[83dvh]">
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
