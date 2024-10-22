import { SignedIn, UserButton } from "@clerk/nextjs";
import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import logo from "../../public/logo_principal.svg";
import the_witcher from "../../public/the_witcher.png";
import the_witcher_cover from "../../public/the_witcher_cover.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import WhereToPlay from "@/components/whereToPlay";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import GameDetails from "@/components/gameDetails";

// #8C00FF
// #FFAE00
// #E1005E

export default function Game() {
  return (
    <SignedIn>
      <Navbar>
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
            href={"/"}
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
            href={"/"}
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
      </Navbar>
      <div className="relative w-full">
        <Image src={the_witcher} className="w-full h-auto object-cover z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
      </div>
      <div className="flex flex-col">
        <div className="-mt-20 absolute z-2">
          <GameDetails
            cover={the_witcher_cover}
            title={"The Witcher 3: Wild Hunt"}
            usuarios={"9,4"}
            critica={"9,2"}
            descricao={
              "The Witcher 3: Wild Hunt conclui a história do bruxo Geralt de Rivia, protagonista da série, cuja história até agora foi abordada nas edições anteriores. A nova missão de Geralt surge em tempos sombrios, quando o exército misterioso e sobrenatural conhecido como Caçada Selvagem invade os Reinos do Norte, deixando apenas terra encharcada de sangue e ruínas de fogo em seu rastro; e parece que oWitcher é a chave para parar a sua violência cataclísmica."
            }
            lancamento={"18/05/2015"}
            desenvolvedora={"CD Project Red"}
            distribuidora={"CD Project Red"}
            generos={["Mundo aberto", "RPG", "Ação", "Aventura"]}
          />
          {/* --------------------------------------REVIEWS----------------------------------------------------- */}
          <div className="m-12 flex flex-row items-center justify-between">
            <p className="font-bold text-lg">Reviews</p>
            <Button className="bg-[#2d2d2d] text-[#FFAE00] mt-2 rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2">
              Adicionar review
            </Button>
          </div>

          {/* --------------------------------------REVIEWS----------------------------------------------------- */}
        </div>
      </div>
    </SignedIn>
  );
}
