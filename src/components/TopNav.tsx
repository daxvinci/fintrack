"use client"
import { useThemeContext } from "@/app/ThemeContext";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const TopNav = () => {
    const {navActive,setNavActive=()=>{}} = useThemeContext()
    return ( 
        <>
            <nav className="navbar flex justify-between items-center gap-4">
                <div className="left-nav flex items-center gap-4">
                        <RxHamburgerMenu onClick={()=>setNavActive(!navActive)} className="hover:cursor-pointer" size={20} />
                    <div className="logo">
                        <Image src="/fintrack.svg" alt="logo" width={100} height={100} />
                    </div>
                </div>

                <div className="right-nav flex items-center gap-4">
                    <div className="search"><CiSearch className="hover:cursor-pointer " size={20}/></div>
                    <div className="grid-icon"><IoGridOutline size={20}/></div>
                    <div className="profile rounded-full w-[30px] h-[30px] relative overflow-hidden">
                        <Image className="object-cover" src="/images/ryou.jpg" alt="profile img" fill />
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default TopNav;