import { SignedIn, UserButton } from "@clerk/nextjs";
import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import logo from "../../public/logo_principal.svg";
import the_witcher from "../../public/the_witcher.png";
import the_witcher_cover from "../../public/the_witcher_cover.png";

// #8C00FF
// #FFAE00
// #E1005E

export default function Game() {
  return (
    <SignedIn>
      <Navbar>
        <Image
          src={logo}
          width={44}
          height={44}
          className="cursor-pointer transition ease-in-out hover:scale-105 hover:rotate-6"
        />
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
      <Image src={the_witcher} className="" />
      <div className="">
        <div className="flex flex-row items-start justify-around mx-12 h-screen -mt-20">
          <Image
            src={the_witcher_cover}
            width={300}
            className="rounded-sm pr-12"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-row justify-between">
              <p className="text-4xl font-bold">The Witcher 3: Wild Hunt</p>
              <div className="flex flex-row gap-5">
                <div>nota</div>
                <div>nota</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-9">
              <p className="font-bold text-lg">Descrição:</p>
              <p className="">
                Você é Geralt de Rívia, mercenário matador de monstros. Você
                está em um continente devastado pela guerra e infestado de
                monstros para você explorar à vontade. Sua tarefa é encontrar
                Ciri, a Criança da Profecia — uma arma viva que pode alterar a
                forma do mundo.
              </p>
            </div>
            <div className="flex flex-row justify-start gap-10">
              <div className="flex gap-2">
                <p className="font-bold">Data de lançamento: </p>
                <p>18/05/2015</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Desenvolvedora: </p>
                <p className="text-[#FFae00] cursor-pointer hover:underline">
                  CD Project Red
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Distribuidora: </p>
                <p className="text-[#FFae00] cursor-pointer hover:underline">
                  CD Project Red
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Gêneros:</p>
              <div className="flex flex-row gap-2">
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-white border-b-[3px]  border-[#1d1d1d] hover:border-[#FFae00] hover:text-[#FFae00] transition duration-100 cursor-pointer">
                  Mundo Aberto
                </div>
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-white border-b-[3px]  border-[#1d1d1d] hover:border-[#FFae00] hover:text-[#FFae00] transition duration-100 cursor-pointer">
                  RPG
                </div>
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-white border-b-[3px]  border-[#1d1d1d] hover:border-[#FFae00] hover:text-[#FFae00] transition duration-100 cursor-pointer">
                  Aventura
                </div>
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-white border-b-[3px]  border-[#1d1d1d] hover:border-[#FFae00] hover:text-[#FFae00] transition duration-100 cursor-pointer">
                  Ação
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}
