"use client"

import { useThemeContext } from "@/app/ThemeContext";
import { MdOutlineClose } from "react-icons/md";


const SideNav = () => {
    const {active,setActive=()=>{},setNavActive=()=>{},navActive} = useThemeContext()
    return (
      <>
        <div
          className="side-nav-wrapper flex flex-col gap-6 sm:block
               backdrop-blur-lg sm:backdrop-blur-none sm:px-0 p-4 
         absolute inset-0 z-80 bg-[#FCFDFD]/90 
         sm:bg-transparent sm:static transition-all duration-300 sm:w-[20%]"
        >
          <div className="close-button">
            <MdOutlineClose
              size={24}
              className="sm:hidden justify-self-end hover:cursor-pointer"
              onClick={() => {
                setNavActive(!navActive);
              }}
            />
          </div>
          <ul
            className="sidenav
           "
          >
            <li
              onClick={() => setActive("dashboard")}
              className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${
                active === "dashboard" ? "bg-gray-400 text-[#4e7b88]" : ""
              }`}
            >
              Dashboard
            </li>
            <li
              onClick={() => setActive("transaction")}
              className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${
                active === "transaction" ? "bg-gray-400 text-[#4e7b88]" : ""
              }`}
            >
              Transaction
            </li>
            <li
              onClick={() => setActive("reports")}
              className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${
                active === "reports" ? "bg-gray-400 text-[#4e7b88]" : ""
              }`}
            >
              Reports
            </li>
            <li
              onClick={() => setActive("settings")}
              className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${
                active === "settings" ? "bg-gray-400 text-[#4e7b88]" : ""
              }`}
            >
              Settings
            </li>
          </ul>
        </div>
      </>
    );
}
 
export default SideNav;