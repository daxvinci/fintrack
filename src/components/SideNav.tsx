"use client"

import { useThemeContext } from "@/app/ThemeContext";


const SideNav = () => {
    const {active,setActive=()=>{}} = useThemeContext()
    return ( 
        <>
        <ul className="sidenav sm:w-[20%]">
            <li onClick={()=>setActive("dashboard")} className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${active === "dashboard" ? "bg-gray-400 text-[#4e7b88]" : ""}`}>Dashboard</li>
            <li onClick={()=>setActive("transaction")} className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${active === "transaction" ? "bg-gray-400 text-[#4e7b88]" : ""}`}>Transaction</li>
            <li onClick={()=>setActive("reports")} className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${active === "reports" ? "bg-gray-400 text-[#4e7b88]" : ""}`}>Reports</li>
            <li onClick={()=>setActive("settings")} className={`nav-itme py-2 px-4 rounded-3xl hover:cursor-pointer ${active === "settings" ? "bg-gray-400 text-[#4e7b88]" : ""}`}>Settings</li>
        </ul>
        </>
     );
}
 
export default SideNav;