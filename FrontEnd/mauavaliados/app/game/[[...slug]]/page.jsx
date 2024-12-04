"use client";
import { useEffect, useState } from "react";
import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import the_witcher from "../../../public/the_witcher.png";
import the_witcher_cover from "../../../public/the_witcher_cover.png";
import Review from "@/components/review";
import GameDetails from "@/components/gameDetails";
import { AddReview } from "@/components/addReview";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import GameReviews from "@/components/gameReviews";
import banner from "../../../public/banner.gif";

async function fetchReviews(gameId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:6051/aval/get_by_jogo/${gameId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    const allReviews = data["avaliações"] || [];

    // Calculate the mean of aval_nota
    const meanRating =
      allReviews.length > 0
        ? allReviews.reduce((sum, review) => sum + review.aval_nota, 0) /
          allReviews.length
        : null;

    return { allReviews, meanRating };
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return { allReviews: [], meanRating: null };
  }
}

async function fetchCover(initialUrl) {
  try {
    const id = initialUrl.split("/").pop().replace(".jpg", "");
    const finalUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${id}.jpg`;

    const response = await fetch(finalUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch cover from ${finalUrl}`);
    }

    const imageBlob = await response.blob();
    return URL.createObjectURL(imageBlob);
  } catch (error) {
    console.error("Error fetching cover:", error);
    return null;
  }
}

export default function Game({ params }) {
  const { slug } = params;
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cover, setCover] = useState(null);
  const [meanRating, setMeanRating] = useState(null);

  useEffect(() => {
    async function fetchGame() {
      try {
        const res = await fetch(`http://127.0.0.1:5051/get/game/${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch game data");
        }
        const data = await res.json();
        setGameData(data);

        if (data.jogo.capa) {
          const fetchedCover = await fetchCover(data.jogo.capa);
          setCover(fetchedCover);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    }

    async function fetchGameReviews() {
      const { meanRating } = await fetchReviews(slug);
      setMeanRating(meanRating);
    }

    fetchGame();
    fetchGameReviews();
  }, [slug]);

  if (loading) {
    return (
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full flex justify-center items-center h-screen">
            <p>Carregando...</p>
          </div>
        </SidebarProvider>
      </SignedIn>
    );
  }

  if (error) {
    return (
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex justify-center items-center h-screen">
            <p>Error: {error}</p>
          </div>
        </SidebarProvider>
      </SignedIn>
    );
  }

  return (
    <SignedIn>
      <SidebarProvider>
        <AppSidebar />
        <div className="relative w-full z-10">
          <Navbar />
          <div className="relative w-full">
            <Image
              src={banner}
              className="w-full lg:h-[80vh] object-cover z-0"
              alt="cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent z-1"></div>
          </div>
          <div className="flex flex-col items-center relative z-2">
            <div className="-mt-20 max-w-7xl">
              {gameData && (
                <GameDetails
                  cover={cover || the_witcher_cover}
                  title={gameData.jogo.nome || "The Witcher 3: Wild Hunt"}
                  usuarios={meanRating ? meanRating.toFixed(1) : "----"}
                  igdb={(gameData.jogo.notas.rating / 10).toFixed(1) || "----"}
                  critica={
                    (gameData.jogo.notas.total_rating / 10).toFixed(1) || "----"
                  }
                  descricao={
                    gameData.jogo.descricao ||
                    "Nenhuma descrição disponível para este jogo."
                  }
                  lancamento={gameData.jogo.criado_em || "Dado não disponível"}
                  desenvolvedora={
                    gameData.jogo.empresa_desenvolvedora || "CD Projekt Red"
                  }
                  distribuidora={
                    gameData.jogo.empresas_distribuidoras || "CD Projekt Red"
                  }
                  generos={
                    gameData.jogo.generos || [
                      "Dados não disponíveis para este jogo",
                    ]
                  }
                  plataformas={
                    Array.isArray(gameData.jogo.plataformas)
                      ? gameData.jogo.plataformas.map(
                          (plataforma) => plataforma.name
                        )
                      : ["Dados não disponíveis para este jogo"]
                  }
                  trailer={gameData.jogo.trailers[0] || ""}
                />
              )}
              <div className="flex flex-col w-full">
                <div className="mx-5 md:mx-12 mt-11 mb-3 flex flex-row items-center justify-between">
                  <p className="font-bold text-lg">Reviews</p>
                  <AddReview id_jogo={slug} />
                </div>
                <GameReviews id={slug} />
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </SignedIn>
  );
}
