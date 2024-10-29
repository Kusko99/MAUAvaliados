import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import the_witcher_cover from "../public/the_witcher_cover.png";

const GameCardList = ({ games }) => {
  return (
    <div className=" rounded-sm p-[2px] transition bg-gradient-to-tr hover:from-[#8c00ff] hover:to-[#2a0747]">
      <div className="group relative max-w-60 h-80 rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
        <Image
          src={the_witcher_cover}
          className="absolute w-full object-cover"
        />
        <div className="flex flex-col h-full">
          <div className="relative text-black top-0 flex justify-end pt-2 pr-2">
            <TooltipLista isLeft text={"Remover Jogo"}>
              <FaRegTrashCan
                size={"1rem"}
                className="hover:text-[#E1005E] transition"
              />
            </TooltipLista>
          </div>
          <div className="relative font-bold h-full items-end flex">
            <div className="bg-black/60 w-full h-12 p-2 items-center flex">
              The Witcher 3: Wild Hunt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardList;
