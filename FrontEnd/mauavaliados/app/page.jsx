// import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import the_witcher from "../public/the_witcher.png";

import Carrossel from "@/components/carrossel";

export default function Home() {
  return (
    // #8C00FF
    // #FFAE00
    // #E1005E
    <main className="min-h-screen  relative">
      <SignedIn>
        <Navbar />
        <div className="relative w-full">
          <Image src={the_witcher} className="w-full h-auto object-cover z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
        </div>
        <div className="min-w-max">
          <div className="flex flex-col items-start justify-start h-screen -mt-20">
            <h1 className="text-3xl font-bold pb-4 mx-12 z-20">Lançamentos</h1>
            <Carrossel />
            <h1 className="text-3xl font-bold pb-4 mx-12 mt-12">Em alta</h1>
            <Carrossel />
          </div>
        </div>
      </SignedIn>
    </main>
  );
}
