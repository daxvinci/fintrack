"use client"

import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Badge from "./Badge";

const Header = () => {
    return (
      <>
        <div className="head-wrapper w-full flex flex-col gap-4 sm:gap-2">
          <div className="head-nav w-full flex justify-between gap-2">
            <div className="head-nav-left flex gap-4 justify-center items-center">
              <div className="head-text flex items-center gap-2">
                <h1 className="sm:text-2xl font-bold">Wallet Ledger</h1>
                <IoMdArrowDropdown className="hover:cursor-pointer" />
              </div>
              <Badge text="Active" color="#3A6C7B" />
            </div>

            <div className="head-nav-right flex gap-4 items-center">
              <button className="share-button sm:text-base text-sm hover:cursor-pointer active:translate-y-2 transition-all duration-300 hover:bg-[#4B8B9F] py-1 px-3 rounded-2xl bg-[#4b8b9f]">
                Share
              </button>
              <div className="more-button rounded-full p-2 active:scale-50 transition-all duration-300 hover:cursor-pointer border border-gray-400">
                <MdOutlineMoreHoriz />
              </div>
            </div>
          </div>
          <div className="clients flex gap-4 items-center">
            <div className="flex items-center -space-x-2">
              <Image
                className="w-8 h-8 hover:scale-150 transition-all duration-300 object-cover rounded-full border-2 border-white z-40 hover:z-60"
                src="/images/plainguy.jpg"
                width={32}
                height={32}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 hover:scale-150 transition-all duration-300 object-cover rounded-full border-2 border-white z-30 hover:z-60"
                src="/images/uvgirl.jpg"
                width={24}
                height={24}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 hover:scale-150 transition-all duration-300 object-cover rounded-full border-2 border-white z-20 hover:z-60"
                src="/images/galgadont.jpg"
                width={24}
                height={24}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 hover:scale-150 transition-all duration-300 object-cover rounded-full border-2 border-white z-10 hover:z-60"
                src="/images/charlesdeluvio.jpg"
                width={24}
                height={24}
                alt="client profile"
              />
            </div>
            <div className="client-name text-sm text-gray-400">
              Ava, Liam, Noah +12 others
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Header;