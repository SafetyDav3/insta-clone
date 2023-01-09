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
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src={instaWord}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="w-10 h-10 lg:hidden relative cursor-pointer">
          <Image
            src={instaCon}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        <div>
          <div>
            {/* Deprecated and needs to use version-2 */}
            <MagnifyingGlassIcon className='h-5 w-5'  />
          </div>
          <input type="text" placeholder="Search" />
        </div>

        {/* right */}
      </div>
    </div>
  );
}

export default Header;

