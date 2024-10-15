import { SignedIn, UserButton } from "@clerk/nextjs";
import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar";
import GameCard from "@/components/gameCard";
import Image from "next/image";
import logo from "../public/logo_principal.svg";
import the_witcher from "../public/the_witcher.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carrossel from "@/components/carrossel";

export default function Home() {
  return (
    // #8C00FF
    // #FFAE00
    // #E1005E
    <main className="min-h-screen  relative">
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
        <div className="min-w-max">
          <div className="flex flex-col items-start justify-start h-screen -mt-20">
            <h1 className="text-3xl font-bold pb-4 mx-12">Lançamentos</h1>
            <Carrossel />
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
