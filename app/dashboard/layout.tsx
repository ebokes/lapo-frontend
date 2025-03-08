"use client";

import { Header } from "@/components/layouts/header";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import Sidebar from "../../components/layouts/sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  console.log(isSidebarOpen);
  return (
    <div className="flex min-h-screen pr-0 relative">
      {/* Sidebar */}
      <div className=" bottom-0">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-col gap-x-4 absolute right-0 left-0 lg:left-[30rem] min-h-screen">
        {/* Navbar */}
        <div className="flex justify-between items-center sticky top-0 z-50 px-4 lg:px-8  bg-white shadow-sm">
          <div className="block lg:hidden mr-16 sm:mt-0">
            <MdMenu
              aria-label="Menu"
              fontSize={"2.5rem"}
              onClick={toggleSidebar}
              className="cursor-pointer"
            />
          </div>
          <Header />
        </div>
        {/* Content */}
        <div className="p-4 lg:p-8 bg-gray1">
          <div className="h-[90vh] overflow-auto">
            <div className="mt-12 lg:mt-7">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
