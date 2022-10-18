import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Link as MenuLink } from "react-scroll";
import MenuButton from "./MenuButton";
import { menuItems } from "./menuItems";

export default function NavigationBar({ setNavbarOpen }) {
  const [selected, setSelected] = useState(menuItems[0].path);
  const calcDistance = () => {
    return `${menuItems.findIndex((e) => e.path === selected) * 4.5}rem`;
  };
  return (
    <nav className="z-20 top-0 fixed  w-full flex flex-wrap items-center justify-between px-2  bg-white shadow">
      <div className="w-full">
        <div className="block">
          <div className="flex items-center">
            {/* website logo */}
            <div className="items-center mt-0.5 md:mt-2 grow  w-100 ml-4">
              <Image
                width="140px"
                priority={true}
                height="50px"
                src={logo}
                alt="naremis logo"
              />
            </div>
            {/* list of menu items */}
            <div className="hidden md:block">
              <div className="mt-4 grid grid-cols-6 pt-1 items-baseline gap-2 mr-6">
                {menuItems.map(({ path, label }, i) => (
                  <div className=" text-center w-16" key={path}>
                    <MenuLink
                      spy={true}
                      offset={-64}
                      smooth={true}
                      duration={600}
                      to={path}
                      onSetActive={setSelected}
                      className="text-grey font-normal cursor-pointer"
                      activeClass="font-semibold   "
                    >
                      {label}
                    </MenuLink>
                  </div>
                ))}
              </div>
              <span
                className="block relative transition-all	ml-3.5				ease-in-out		 rounded mt-1 h-1  w-10 bg-orange-500 "
                style={{ left: calcDistance() }}
              ></span>
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
