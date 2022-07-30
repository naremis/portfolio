import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/close.png";

export default function SideNavigation({
  navbarOpen,
  setNavbarOpen,
  menuItems,
}) {
  return (
    <>
      {/* Background Layer When Side Nav is Open */}
      <div
        className={`bg-black opacity-20 	h-full z-10 w-full absolute ${
          navbarOpen ? "block md:hidden" : "hidden"
        }`}
      ></div>
      {/* Side Navigation Bar */}
      <div
        className={`h-full  ease-in-nav duration-300  bg-white fixed w-0 shadow-leftShadow z-10 md:hidden block top-0 right-0  ${
          navbarOpen ? "w-80" : "w-0 "
        } `}
      >
        <div className="flex px-5 my-7">
          {/* logo of the website*/}
          <div className=" grow ">
            <Image width="140px" height="50px" src={logo} alt="naremis logo" />
          </div>
          {/* close nav button */}
          <button type="button" onClick={() => setNavbarOpen(false)}>
            <Image
              width="15px"
              height="15px"
              src={closeIcon}
              alt="close icon"
            />
          </button>
        </div>
        {/* menu items */}
        <div>
          {menuItems.map(({ path, label }, i) => (
            <a
              key={i}
              href={path}
              className="text-slate-900  block pl-7 py-4  text-base font-normal"
            >
              {label}
            </a>
          ))}
        </div>
        {/* selected menu item */}
        <a
          key={"d"}
          href={"path"}
          className="text-slate-900 bg-gray-100 border-l-4 border-l-orange-400	 block pl-7 py-4  text-base font-normal"
        >
          About
        </a>
      </div>
    </>
  );
}
