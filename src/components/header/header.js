import React, { useState } from "react";

import NavigationBar from "./NavigationBar";
import SideNavigation from "./SideNavigation";
const menuItems = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "tech",
    label: "Tech",
  },
  {
    path: "whynaremis",
    label: "About",
  },
  {
    path: "services",
    label: "Services",
  },
  {
    path: "team",
    label: "Team",
  },
  {
    path: "portfolio",
    label: "Portfolio",
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
