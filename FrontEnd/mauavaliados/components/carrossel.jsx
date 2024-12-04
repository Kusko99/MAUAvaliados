"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GameCard from "@/components/gameCard";

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

async function fetchGames(userId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8051/recomendacao/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return { data: [] };
  }
}

function Carrossel() {
  const [allGames, setAllGames] = useState([]); // Todos os jogos
  const [notaGames, setNotaGames] = useState([]); // Jogos por nota
  const [recomendacaoGames, setRecomendacaoGames] = useState([]); // Jogos recomendados
  const [covers, setCovers] = useState({});
  const { user } = useUser();

  useEffect(() => {
    if (user?.id) {
      fetchGames(user.id).then(async (data) => {
        // Mapeia e separa os jogos em diferentes categorias
        const parsedAllGames = data.data?.map((item) => JSON.parse(item)) || [];
        const parsedNotaGames =
          data.nota?.map((item) => JSON.parse(item)) || [];
        const parsedRecomendacaoGames =
          data.recomendacao?.map((item) => JSON.parse(item)) || [];

        // Atualiza os estados para cada categoria
        setAllGames(parsedAllGames);
        setNotaGames(parsedNotaGames);
        setRecomendacaoGames(parsedRecomendacaoGames);

        // Pré-carrega as capas de todos os jogos
        const allCovers = [
          ...parsedAllGames,
          ...parsedNotaGames,
          ...parsedRecomendacaoGames,
        ];
        const coverPromises = allCovers.map(async (game) => {
          const coverUrl = await fetchCover(game.capa);
          return { id: game.id, coverUrl };
        });

        const coverResults = await Promise.all(coverPromises);
        const coverMap = coverResults.reduce(
          (acc, { id, coverUrl }) => ({ ...acc, [id]: coverUrl }),
          {}
        );

        setCovers(coverMap);
      });
    }
  }, [user]);

  const isLastItem = (index, length) => index === length - 1;

  const renderCarousel = (filteredGames, title) => (
    <div className="mb-10">
      <h2 className="text-start mb-4 md:text-3xl text-2xl font-bold pb-4 mx-5 md:mx-12">
        {title}
      </h2>
      <div className="flex justify-center mx-auto w-full max-w-full">
        <Carousel className="min-w-full max-w-lg m-0 p-0 flex justify-center">
          <CarouselContent className="w-screen z-0">
            {filteredGames.map((game, index) => (
              <CarouselItem
                key={game.id}
                className={`xl:basis-56 lg:basis-48 md:basis-36 sm:basis-36 basis-16`}
                style={{
                  marginRight: isLastItem(index, filteredGames.length)
                    ? "100px"
                    : "48px",
                }}
              >
                <div className="xl:pl-12 lg:pl-12 md:pl-10 sm:pl-4 pl-4">
                  <GameCard
                    cover={covers[game.id] || ""}
                    title={game.nome || `Jogo ${game.id}`}
                    className="items-center justify-center"
                    id={game.id}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-10 ml-12 h-[150px] sm:h-[225px] md:h-[265px] lg:h-[300px] xl:h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
          <CarouselNext className="z-10 mr-12 h-[150px] sm:h-[225px] md:h-[265px] lg:h-[300px] xl:h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
        </Carousel>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {renderCarousel(allGames, "Lançamentos")}
      {renderCarousel(notaGames, "Em alta")}
      {renderCarousel(recomendacaoGames, "Recomendados")}
    </div>
  );
}

export default Carrossel;
