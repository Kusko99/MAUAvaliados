// import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import the_witcher from "../public/the_witcher.png";
import stray from "../public/stray.jpg";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import Carrossel from "@/components/carrossel";

export default function Home() {
  return (
    // #8C00FF
    // #FFAE00
    // #E1005E
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full relative">
        <SignedIn>
          <Navbar />
          <div className="relative w-full">
            <Image
              src={stray}
              className="w-full lg:h-[80vh] object-cover z-0"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
          </div>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-start justify-start mb-14 min-h-screen xl:-mt-20 lg:-mt-20 md:-mt-20 sm:-mt-20">
              <div className="z-20 w-full">
                <Carrossel />
              </div>
            </div>
          </div>
          <Footer />
        </SignedIn>
      </main>
    </SidebarProvider>
  );
}
