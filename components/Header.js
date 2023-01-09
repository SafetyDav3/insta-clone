import React from "react";
import Image from "next/image";
import instaCon from "../public/icons/icons8-instagram.svg"
import instaWord from "../public/icons/ocw.webp"

// Icon imports
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars4Icon,
} from "@heroicons/react/24/solid"

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src={instaWord}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="w-10 lg:hidden relative cursor-pointer">
          <Image
            src={instaCon}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            {/* Deprecated and needs to use version-2 */}
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-500'  />
          </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search" />
        </div>

        {/* right */}
      </div>
    </div>
  );
}

export default Header;

