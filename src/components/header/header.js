import React, { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.png";
import NavigationBar from "./NavigationBar";
import SideNavigation from "./SideNavigation";
const menuItems = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "services",
    label: "Services",
  },
  {
    path: "features",
    label: "Features",
  },
  {
    path: "blog",
    label: "Blog",
  },
  {
    path: "login",
    label: "Login",
  },
];

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <NavigationBar setNavbarOpen={setNavbarOpen} menuItems={menuItems} />
      {/* Mobile View */}
      <SideNavigation
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        menuItems={menuItems}
      />
    </>
  );
}
