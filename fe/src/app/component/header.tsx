import React from "react";
import Image from "next/image";
import LogoLight from "@/assets/images/logo-light.svg";
import LogoDark from "@/assets/images/logo-dark.svg";

const Header = () => {
  return (
    <div className="bg-white shadow dark:bg-black">
      <nav className="container mx-auto flex items-center justify-center py-4 px-6 h-[64px]">
        <Image
          width={100}
          src={LogoLight}
          alt="logo"
          className="ml-2 my-auto dark:hidden"
        />
        <Image
          width={100}
          src={LogoDark}
          alt="logo"
          className="ml-2 my-auto hidden dark:block"
        />
      </nav>
    </div>
  );
};

export default Header;
