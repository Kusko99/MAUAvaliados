import React from "react";
import Image from "next/image";
import Link from "next/link";
import AddToList from "./addToList";

const GameCardCategory = ({ cover }) => {
  return (
    <div className="flex items-center justify-center rounded-sm px-[2px] transition bg-gradient-to-tr hover:from-[#FFAE00] hover:to-[#2e240f] w-[160px]  lg:w-[190px] xl:w-[230px]">
      <div className="group relative w-[158px] h-[248px] lg:w-[198px] lg:h-[298px] xl:w-[228px] xl:h-[344px] rounded-sm cursor-pointer drop-shadow-xl overflow-hidden my-[2px]">
        <Image src={cover} className="absolute h-full w-full" />
        <div className="flex flex-col h-full">
          <div className="relative text-black top-0 flex justify-end pt-2 pr-2">
            <AddToList />
          </div>
          <Link href={"/game"} className="h-full">
            <div className="relative font-bold h-full items-end flex">
              <div className="bg-black/60 w-full h-12 p-2 items-center flex">
                <p className="line-clamp-1">The Witcher 3: Wild Hunt</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCardCategory;
