"use client"

import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMoreHoriz } from "react-icons/md";
import Badge from "./Badge";

const Header = () => {
    return (
      <>
        <div className="head-wrapper w-full flex flex-col gap-2">
          <div className="head-nav w-full flex justify-between gap-2">
            <div className="head-nav-left flex gap-4 justify-center items-center">
              <div className="head-text flex items-center gap-2">
                <h1 className="text-2xl font-bold">Wallet Ledger</h1>
                <IoMdArrowDropdown className="hover:cursor-pointer" />
              </div>
              <Badge text="Active" color="#087a2e" />
            </div>

            <div className="head-nav-right flex gap-4 items-center">
              <div className="share-button hover:cursor-pointer py-1 px-3 rounded-2xl bg-[#4b8b9f]">
                Share
              </div>
              <div className="more-button rounded-full p-2 hover:cursor-pointer border border-gray-400">
                <MdOutlineMoreHoriz />
              </div>
            </div>
          </div>
          <div className="clients flex gap-4 items-center">
            <div className="flex items-center -space-x-2">
              <Image
                className="w-8 h-8 object-cover rounded-full border-2 border-white z-40"
                src="/images/plainguy.jpg"
                width={32}
                height={32}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 object-cover rounded-full border-2 border-white z-30"
                src="/images/uvgirl.jpg"
                width={24}
                height={24}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 object-cover rounded-full border-2 border-white z-20"
                src="/images/galgadont.jpg"
                width={24}
                height={24}
                alt="client profile"
              />
              <Image
                className="w-8 h-8 object-cover rounded-full border-2 border-white z-10"
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