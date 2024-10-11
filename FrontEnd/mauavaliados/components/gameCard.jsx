import React from "react";
import Image from "next/image";
import super_smash from "../public/super_smash.png";
import { MdGames } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


function GameCard() {
  return (
    <div className="flex w-[230px] h-[346px] bg-white rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
      <Image
        src={super_smash}
        className="h-auto w-auto object-cover transition-all duration-500 hover:scale-[1.03] rounded-sm"
      />
      <TooltipProvider>
        <Tooltip className="static">
          <TooltipTrigger className="absolute right-1 top-1 group">
            <MdGames
              size={"1.7em"}
              className="flex cursor-pointer transition ease-in-out hover:scale-110 hover:rotate-90 hover:text-[#8C00FF]"
            />
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="drop-shadow-sm bg-[#8C00FF] text-white"
          >
            <p>Adicionar à lista</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default GameCard;
