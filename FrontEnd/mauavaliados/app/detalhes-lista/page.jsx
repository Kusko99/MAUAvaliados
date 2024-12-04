import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import the_witcher from "../../public/the_witcher.png";
import stray from "../../public/stray.jpg";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import GameCardList from "@/components/gameCardList";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import the_witcher_cover from "../../public/the_witcher_cover.png";
import tlou from "../../public/tlou.png";
import super_smash from "../../public/super_smash.png";
import stray_cover from "../../public/stray_cover.webp";
import anel_do_velho from "../../public/anel_do_velho.jpg";

export default function DetalhesLista() {
  return (
    <SignedIn>
      <SidebarProvider>
        <AppSidebar />
        <div className="relative w-full z-10">
          <Navbar />
          <div className="relative w-full">
            <Image
              src={stray}
              className="w-full lg:h-[80vh] object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
          </div>
          <div className="flex justify-center">
            <div className="max-w-7xl">
              <div className="flex flex-row justify-end mx-5 md:mx-12">
                <div className="-mt-12 absolute flex flex-row gap-4">
                  <TooltipLista text={"Editar Lista"}>
                    <FaRegEdit
                      size={"22px"}
                      className="cursor-pointer hover:text-[#8C00FF]"
                    />
                  </TooltipLista>
                  <TooltipLista text={"Excluir Lista"}>
                    <FaRegTrashCan
                      size={"22px"}
                      className="cursor-pointer hover:text-[#E1005E] transition"
                    />
                  </TooltipLista>
                </div>
              </div>
              <div className="flex flex-row justify-between mx-5 md:mx-12">
                <p className="text-2xl font-bold">Jogos Top!!!</p>
                <div className="bg-[#8c00ff]/50 text-white font-bold flex items-center px-2 rounded-sm cursor-default">
                  5 jogos
                </div>
              </div>
              <p className="mx-5 md:mx-12 mt-4">
                Clássicos Imperdíveis: Aventuras e Emoções reúne cinco jogos
                icônicos que oferecem experiências únicas e inesquecíveis. De
                batalhas intensas e narrativas emocionantes, como em The Witcher
                3: Wild Hunt, Elden Ring e The Last of Us, a aventuras criativas
                e tocantes, como em Stray, até confrontos frenéticos e
                divertidos com amigos em Super Smash Bros. Ultimate. Esta
                seleção celebra o melhor dos videogames, combinando mundos
                fascinantes, histórias marcantes e jogabilidade memorável,
                perfeita para quem busca explorar o que há de mais impactante no
                universo gamer.
              </p>
              <div className="flex flex-col">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mx-5 md:mx-12 my-12 justify-between gap-4 place-items-center">
                  <GameCardList
                    cover={the_witcher_cover}
                    title={"The Witcher 3: Wild Hunt"}
                  />
                  <GameCardList cover={tlou} title={"The Last of Us"} />
                  <GameCardList cover={anel_do_velho} title={"Elden Ring"} />
                  <GameCardList cover={stray_cover} title={"Stray"} />
                  <GameCardList
                    cover={super_smash}
                    title={"Super Smash Bros"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </SignedIn>
  );
}
