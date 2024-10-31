import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo_principal.svg";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around pt-2 pb-2 bg-black/30 shadow-inner text-white fixed top-0 left-0 right-0 z-50">
      <Link href={"/"}>
        <Image
          src={logo}
          width={44}
          height={44}
          className="cursor-pointer transition ease-in-out hover:scale-105 hover:rotate-6"
        />
      </Link>
      <div className="flex items-center justify-around w-2/4">
        <Link
          className="relative after:bg-[#FFAE00] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500  after:rounded-lg hover:scale-110 p-1 font-bold "
          href={"/pesquisar"}
        >
          Pesquisar
        </Link>
        <Link
          className="relative after:bg-[#FFAE00] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500  after:rounded-lg hover:scale-110 p-1 font-bold"
          href={"/"}
        >
          Minhas Reviews
        </Link>
        <Link
          className="relative after:bg-[#FFAE00] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500  after:rounded-lg hover:scale-110 p-1 font-bold"
          href={"/listas"}
        >
          Listas
        </Link>
      </div>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-8 h-8",
          },
        }}
      />
    </div>
  );
};

export default Navbar;
