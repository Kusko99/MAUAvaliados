import { SignedIn, UserButton } from "@clerk/nextjs";
import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import "./globals.css";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
// import logo from "../public/logo_mauavaliados_img.png";
import logo from "../public/logo_principal.svg";
import the_witcher from "../public/the_witcher.png";
import super_smash from "../public/super_smash.png";
import { MdGames } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
          <div className="flex flex-col items-start justify-start h-screen pl-12 pt-12">
            <h1 className="text-3xl font-bold pb-4">Lançamentos</h1>
            <div className="flex w-[230px] h-[346px] bg-white rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
              <Image
                src={super_smash}
                className="h-auto w-auto object-cover transition-all duration-500 hover:scale-[1.03] rounded-sm"
              />
              <TooltipProvider>
                <Tooltip className="static">
                  <TooltipTrigger className="absolute right-1 top-1 group">
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
              </TooltipProvider>
            </div>
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
