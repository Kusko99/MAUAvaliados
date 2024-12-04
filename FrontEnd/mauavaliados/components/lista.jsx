"use client";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import stray from "../public/stray.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import the_witcher_cover from "../public/the_witcher_cover.png";
import tlou from "../public/tlou.png";
import super_smash from "../public/super_smash.png";
import stray_cover from "../public/stray_cover.webp";
import anel_do_velho from "../public/anel_do_velho.jpg";

const Lista = ({}) => {
  const handleDeleteClick = () => {
    if (window.confirm("Tem certeza que deseja deletar esta review?")) {
      onDelete(id);

      toast({
        variant: "roxo",
        title: "Review deletada com sucesso!",
        description: "Sua review foi removida.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const covers = [
    super_smash,
    the_witcher_cover,
    tlou,
    stray_cover,
    anel_do_velho,
  ];

  // Add skeleton placeholders if covers length is less than 6
  const totalCovers =
    covers.length < 7
      ? [...covers, ...Array(7 - covers.length).fill(null)]
      : covers;

  return (
    <Link href={"/detalhes-lista"}>
      <div className="rounded-sm p-[1.2px] transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
        <div className="flex flex-col bg-[#2d2d2d] justify-around rounded-md p-3 md:p-6 cursor-pointer gap-5">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-bold">Jogos Top!!!</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDotsVertical
                  size={"1.4rem"}
                  className="hover:text-[#FFAE00] transition"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#2d2d2d] text-white border-none">
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="flex justify-between">
                    <div>Editar</div>
                    <FaRegEdit size={"1.2rem"} />
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={handleDeleteClick}
                    className="flex justify-between text-red-500 hover:text-red-700"
                  >
                    <div>Deletar</div>
                    <FaRegTrashCan />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
          </div>
          <div className="flex flex-row justify-between overflow-hidden gap-4">
            {totalCovers.map((cover, index) =>
              cover ? (
                <Image
                  key={index}
                  src={cover}
                  className="w-20 h-28 rounded-sm"
                />
              ) : (
                <div
                  key={index}
                  className="min-w-20 h-28 bg-[#4d4d4d] rounded-sm animate-pulse overflow-hidden"
                ></div>
              )
            )}
          </div>
          <div>
            <p className="line-clamp-2">
              Clássicos Imperdíveis: Aventuras e Emoções reúne cinco jogos
              icônicos que oferecem experiências únicas e inesquecíveis. De
              batalhas intensas e narrativas emocionantes, como em The Witcher
              3: Wild Hunt, Elden Ring e The Last of Us, a aventuras criativas e
              tocantes, como em Stray, até confrontos frenéticos e divertidos
              com amigos em Super Smash Bros. Ultimate. Esta seleção celebra o
              melhor dos videogames, combinando mundos fascinantes, histórias
              marcantes e jogabilidade memorável, perfeita para quem busca
              explorar o que há de mais impactante no universo gamer.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Lista;
