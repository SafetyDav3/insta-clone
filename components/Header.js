import React from "react";
import Image from "next/image";
import instaCon from "../public/icons/icons8-instagram.svg";
import instaWord from "../public/icons/ocw.webp";

// Icon imports
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

import { HomeIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image src={instaWord} layout="fill" objectFit="contain" />
        </div>

        <div className="w-10 lg:hidden relative cursor-pointer">
          <Image src={instaCon} layout="fill" objectFit="contain" />
        </div>

        {/* Middle */}

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 rounded-md sm:text-sm border-gray-300 focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-4 ">
          <HomeIcon className="navBtn" />
          <PaperAirplaneIcon className="navBtn" />
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <Bars4Icon className="h-6 w-10 text-black md:hidden cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
        </div>
      </div>
    </div>
  );
}

export default Header;
