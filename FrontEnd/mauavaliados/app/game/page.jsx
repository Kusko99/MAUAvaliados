import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import the_witcher from "../../public/the_witcher.png";
import the_witcher_cover from "../../public/the_witcher_cover.png";
import Review from "@/components/review";
import GameDetails from "@/components/gameDetails";
import GameReviews from "@/components/gameReviews";
import { AddReview } from "@/components/addReview";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// #8C00FF
// #FFAE00
// #E1005E

export default function Game() {
  return (
    <SignedIn>
      <SidebarProvider>
        <AppSidebar />
        <div className="relative z-10">
          <Navbar />
          <div className="relative w-full">
            <Image
              src={the_witcher}
              className="w-full h-auto object-cover z-0"
              alt="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
          </div>
          <div className="flex flex-col items-center relative z-2">
            <div className="-mt-20 max-w-7xl">
              <GameDetails
                cover={the_witcher_cover}
                title={"The Witcher 3: Wild Hunt"}
                usuarios={"9,8"}
                igdb={"9,4"}
                critica={"9,2"}
                descricao={
                  "The Witcher 3: Wild Hunt conclui a história do bruxo Geralt de Rivia, protagonista da série, cuja história até agora foi abordada nas edições anteriores. A nova missão de Geralt surge em tempos sombrios, quando o exército misterioso e sobrenatural conhecido como Caçada Selvagem invade os Reinos do Norte, deixando apenas terra encharcada de sangue e ruínas de fogo em seu rastro; e parece que oWitcher é a chave para parar a sua violência cataclísmica."
                }
                lancamento={"18/05/2015"}
                desenvolvedora={"CD Project Red"}
                distribuidora={"CD Project Red"}
                generos={["Mundo aberto", "RPG", "Ação", "Aventura"]}
              />
              <div className="flex flex-col w-full">
                <div className="mx-5 md:mx-12 mt-11 mb-3 flex flex-row items-center justify-between">
                  <p className="font-bold text-lg">Reviews</p>
                  <AddReview />
                </div>
                <GameReviews gameId={1} />
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </SignedIn>
  );
}
