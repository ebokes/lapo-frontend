import Links from "./links";
import LinksData from "./link-data";
import Image from "next/image";
import logo from "@/assets/LAPO_Logo.svg";
import logo2 from "@/assets/cardinfra logo.svg";
import logout from "@/assets/sidebar-icons/logout.svg";
import Link from "next/link";
import { BsArrow90DegLeft } from "react-icons/bs";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`w-[30rem] pb-12 px-8 h-screen fixed left-0 bottom-0 bg-white1 border-r-2 border-[#0000000d] z-[51] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0`}
    >
      <div className="my-8 sticky top-8 z-50 ">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src={logo}
              width={1500}
              height={1500}
              alt="logo"
              // style={{ width: "18rem", objectFit: "cover" }}
            />
          </Link>
          <X
            onClick={toggleSidebar}
            size={19}
            className="cursor-pointer block lg:hidden absolute -top-6 -right-6 text-gray2"
          />
        </div>
      </div>

      <div className="flex flex-col mt-20 gap-4" onClick={toggleSidebar}>
        {LinksData.map((item) => (
          <>
            {item.label === "Dashboard" ? (
              <div>
                <Links
                  key={item.label}
                  label={item.label}
                  path={item.path}
                  icon={item.icon}
                />
                <p className="ml-8 mt-8 text-[#7E8B9C] text-lg">MAIN MENU</p>
              </div>
            ) : (
              <Links
                key={item.label}
                label={item.label}
                path={item.path}
                icon={item.icon}
              />
            )}
          </>
        ))}
      </div>

      <div className="sticky top-[90%] justify-center ml-4 mt-4">
        <div className=" flex gap-4 items-center">
          <Image
            src={logout}
            width={50}
            height={50}
            alt="logout icon"
            style={{ width: "3rem" }}
          />
          <p className="font-medium">Logout</p>
        </div>
        <div>
          <p className="mt-8 text-[#7E8B9C] text-lg">POWERED BY</p>
          <div className="w-[15rem]">
            <Image
              src={logo2}
              width={1000}
              height={1000}
              alt="cardinfra logo"
              style={{ width: "10rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
