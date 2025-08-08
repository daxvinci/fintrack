"use client"
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useThemeContext } from "@/app/ThemeContext";
import { useEffect, useRef } from "react";

const TopNav = () => {
    const {navActive,setSearchValue=()=>{},searchActive,setSearchActive=()=>{},setNavActive=()=>{}} =  useThemeContext()
    const searchRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          searchRef.current &&
          !searchRef.current.contains(event.target as Node)
        ) {
          setSearchActive(false);
        }
      };

      if (searchActive) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [searchActive, setSearchActive]);
    
    return (
      <>
        <nav className="navbar flex justify-between items-center gap-4">
          <div className="left-nav flex items-center gap-4">
            <RxHamburgerMenu
              onClick={() => setNavActive(!navActive)}
              className="hover:cursor-pointer"
              size={20}
            />
            <div
              className={`logo hover:cursor-pointer transition-all duration-300 ease-in-out ${
                searchActive ? "max-w-0 sm:max-w-[100px]" : "max-w-[100px]"
              } overflow-hidden`}
            >
              <Image src="/fintrack.svg" alt="logo" width={100} height={100} />
            </div>
          </div>

          <div className="right-nav flex items-center gap-4">
            <div ref={searchRef} className="search">
              {searchActive ? (
                <input
                  type="text"
                  placeholder="Search..."
                  className="border px-2 py-1 rounded-md text-sm"
                  autoFocus
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              ) : (
                <CiSearch
                  onClick={() => setSearchActive(true)}
                  className="hover:cursor-pointer"
                  size={20}
                />
              )}
            </div>
            <div className="grid-icon hover:cursor-pointer">
              <IoGridOutline size={20} />
            </div>
            <div className="profile hover:cursor-pointer rounded-full w-[30px] h-[30px] relative overflow-hidden">
              <Image
                className="object-cover"
                src="/images/plainguy.jpg"
                alt="profile img"
                fill
              />
            </div>
          </div>
        </nav>
      </>
    );
}
 
export default TopNav;