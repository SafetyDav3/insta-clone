import React from "react";
import Image from "next/image";
import instaCon from "../public/icons/icons8-instagram.svg"

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* left */}
        <div className="relative hidden lg:inline-grid h-24 w-24">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="w-10 h-10 lg:hidden relative">
          <Image
            src={instaCon}
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle */}

        {/* right */}
      </div>
    </div>
  );
}

export default Header;
