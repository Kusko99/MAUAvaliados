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
    <div className="group relative w-[230px] h-[346px] bg-white rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
      <Image
        src={super_smash}
        className="absolute h-[346px] w-full object-cover group-hover:brightness-[0.25]"
      />
      <div className="relative font-bold mt-2">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 justify-between h-full w-full">
          <TooltipProvider>
            <div className="absolute top-2 right-2">
              <Tooltip>
                <TooltipTrigger>
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
            </div>
          </TooltipProvider>
          <div className="absolute top-72 left-2">
            <p>Super Smash Bros.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
