import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Image from "next/image";
import the_witcher from "../../public/the_witcher.png";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import the_witcher_cover from "../../public/the_witcher_cover.png";

export default function DetalhesLista() {
  return (
    <SignedIn>
      <Navbar />
      <div className="relative w-full">
        <Image src={the_witcher} className="w-full h-auto object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
      </div>
      <div className="mx-5 md:mx-12 -mt-16 absolute right-0 flex flex-row gap-4">
        <TooltipLista text={"Editar Lista"}>
          <FaRegEdit size={"22px"} className="hover:text-[#8C00FF]" />
        </TooltipLista>
        <TooltipLista text={"Excluir Lista"}>
          <FaRegTrashCan
            size={"22px"}
            className="hover:text-[#E1005E] transition"
          />
        </TooltipLista>
      </div>
      <div className="flex flex-row justify-between mx-5 md:mx-12">
        <p className="text-2xl font-bold">Jogos Top!!!</p>
        <div className="bg-[#8c00ff]/50 text-white font-bold flex items-center px-2 rounded-sm cursor-default">
          10 jogos
        </div>
      </div>
      <p className="mx-5 md:mx-12 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        cumque, nam quia modi sapiente ipsam optio temporibus doloremque dolorem
        cupiditate iure error ipsum tempora nihil laborum. Ducimus enim ab
        error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
        asperiores, dicta vitae animi totam dignissimos quae facere perferendis
        ab quaerat a ullam earum perspiciatis mollitia qui eveniet in eum
        dolorem.
      </p>
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mx-5 md:mx-12 my-12 justify-between gap-3 place-items-center">
          {/* <div className="flex items-center justify-center w-60 h-80 bg-[#2d2d2d] m-0 p-0 overflow-hidden rounded-sm">
            <Image src={the_witcher_cover} className="w-full object-cover" />
          </div> */}

          <div className=" rounded-sm p-[2px] transition bg-gradient-to-tr hover:from-[#8c00ff] hover:to-[#2a0747]">
            <div className="group relative w-60 h-80 rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
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
        </div>
      </div>
    </SignedIn>
  );
}
