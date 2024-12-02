import Image from "next/image";
import Link from "next/link";
import { MdGames } from "react-icons/md";
import TooltipLista from "@/components/tooltipLista";
import AddToList from "./addToList";

const GameCard = ({ cover }) => {
  return (
    <div className="flex items-center justify-center rounded-sm p-[2px] transition bg-gradient-to-tr hover:from-[#FFAE00] hover:to-[#2e240f] w-[100px] h-[150px] sm:w-[150px] sm:h-[225px] md:w-[170px] md:h-[260px] lg:w-[200px] lg:h-[300px] xl:w-[230px] xl:h-[346px]">
      <div className="group relative w-[98px] h-[148px] sm:w-[148px] sm:h-[223px] md:w-[168px] md:h-[258px] lg:w-[198px] lg:h-[298px] xl:w-[228px] xl:h-[344px] rounded-sm cursor-pointer drop-shadow-xl overflow-hidden my-[2px]">
        <Image src={cover} className="absolute h-full w-full" />
        <div className="flex flex-col h-full">
          <div className="relative text-black top-0 flex justify-end pt-2 pr-2">
            <AddToList isLeft />
          </div>
          <Link href={"/game"} className="h-full">
            <div className="relative font-bold h-full items-end flex">
              <p className="bg-black/60 w-full h-12 p-2 items-center flex overflow-hidden whitespace-nowrap ">
                The Witcher 3: Wild Hunt
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
