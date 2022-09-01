import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import MenuButton from "./MenuButton";

export default function NavigationBar({ setNavbarOpen, menuItems }) {
  return (
    <nav className="z-50 top-0 fixed  w-full flex flex-wrap items-center justify-between px-2  bg-white shadow">
      <div className="w-full">
        <div className="block">
          <div className="flex items-center">
            {/* website logo */}
            <div className="items-center mt-0.5 md:mt-2 grow  w-100 ml-4">
              <Image
                width="140px"
                height="50px"
                src={logo}
                alt="naremis logo"
              />
            </div>
            {/* list of menu items */}
            <div className="hidden md:block">
              <div className=" mt-4 pt-1 items-baseline space-x-4">
                {menuItems.map(({ path, label }, i) => (
                  <a
                    key={i}
                    href={path}
                    className="text-grey px-3 font-normal "
                    aria-current="page"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mr-3 flex md:hidden ">
              <MenuButton setNavbarOpen={setNavbarOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
