import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Image from "next/image";
import the_witcher from "../../public/the_witcher.png";
import the_witcher_cover from "../../public/the_witcher_cover.png";
import Review from "@/components/review";
import GameDetails from "@/components/gameDetails";
import { AddReview } from "@/components/addReview";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import Lista from "@/components/lista";

export default function Listas() {
  return (
    <SignedIn>
      <Navbar />
      <div className="flex max-w-7xl mx-auto flex-col items-center ">
        <div className="mt-24 w-full">
          <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
            <p className="text-3xl font-semibold">Listas</p>
            <div>
              <Button className="bg-[#2d2d2d] text-[#FFAE00] mt-2 rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2 w-full">
                Nova lista
              </Button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-5 md:mx-12 mb-12 mt-4">
            <Lista />
            <Lista />
            <Lista />
            <Lista />
            <Lista />
            <Lista />
          </div>
        </div>
      </div>
    </SignedIn>
  );
}
