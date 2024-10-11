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

// async function fetchUserList() {
//   const response = await clerkClient().users.getUserList();
//   console.log(response);
// }
// fetchUserList();

const userId = "user_2lwjCPAOcKRQHDSgfaAXWCecjZX";
async function fetchUser(userId) {
  const response = await clerkClient().users.getUser(userId);
  console.log(response.emailAddresses);
}
fetchUser("user_2lwjCPAOcKRQHDSgfaAXWCecjZX");

// const { userId } = auth()
// console.log(userId)

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
          <div className="flex flex-col items-start justify-start h-screen pt-12">
            <h1 className="text-3xl font-bold pb-4 mx-12">Lançamentos</h1>
            <div className="flex justify-center mx-auto w-full max-w-full">
              <Carousel className="min-w-full max-w-lg m-0 p-0 flex justify-center ">
                <CarouselContent className="w-screen z-0">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
                    >
                      <div className="pl-12">
                        <GameCard className="items-center justify-center" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="z-10 ml-12 h-[346px] w-16 rounded-none border-0 bg-black/40 disabled:hidden" />
                <CarouselNext className="z-10 mr-12 h-[346px] w-16 rounded-none border-0 bg-black/40 disabled:hidden" />
              </Carousel>
            </div>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
