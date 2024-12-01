"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import WhereToPlay from "@/components/whereToPlay";
// import { FaSteam } from "react-icons/fa";
// import { FaPlaystation } from "react-icons/fa";
// import { FaXbox } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { MdGames } from "react-icons/md";
import GameDetailsSmall from "@/components/gameDetailsSmall";
import { useEffect, useState } from "react";
import the_witcher_cover from "../public/the_witcher_cover.png";
import AddToList from "./addToList";

const GameDetails = ({
  children,
  cover,
  title,
  usuarios,
  igdb,
  critica,
  descricao,
  lancamento,
  desenvolvedora,
  distribuidora,
  generos,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {windowWidth < 800 ? (
        <GameDetailsSmall
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
      ) : (
        <div className="flex lg:flex-row flex-row-reverse items-start justify-between mx-12">
          <div className="flex flex-col min-w-max p-0 m-0 lg:pr-12 ">
            <div className="relative w-full max-w-[300px]">
              <Image
                src={cover}
                layout="responsive"
                width={300}
                height={200}
                className="rounded-sm"
                alt="cover"
              />
            </div>
            <Link
              href={
                "https://www.youtube.com/watch?v=c0i88t0Kacs&pp=ygUVdGhlIHdpdGNoZXIgMyB0cmFpbGVy"
              }
              className="w-full"
              target="_blank"
            >
              <Button className="bg-[#2d2d2d] text-[#FFAE00] mt-2 rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2 w-full">
                <FaPlay />
                Trailer
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-6 w-1/2 lg:w-full">
            <div className="flex lg:flex-row flex-col-reverse md:gap-4 justify-between items-center">
              <p className="text-4xl font-bold w-full">{title}</p>
              <div className="flex flex-row w-full justify-between lg:justify-end lg:gap-6 ">
                <div className="flex flex-col bg-[#FFAE00]/80 w-fit p-2 justify-around rounded-sm ">
                  <p className="text-sm font-bold">Usuários</p>
                  <div className="flex flex-row items-center justify-between w-full gap-5">
                    <p className="font-bold text-3xl">{usuarios}</p>
                    <FaTrophy size={"1.875rem"} />
                  </div>
                </div>
                <div className="flex flex-col bg-[#8c00ff]/50 w-fit p-2 justify-around rounded-sm ">
                  <p className="text-sm font-bold">IGDB</p>
                  <div className="flex flex-row items-center justify-between w-full gap-5">
                    <p className="font-bold text-3xl">{igdb}</p>
                    <FaTrophy size={"1.875rem"} />
                  </div>
                </div>
                <div className="flex flex-col bg-[#8c00ff]/50 w-fit p-2 justify-around rounded-sm ">
                  <p className="text-sm font-bold">Crítica</p>
                  <div className="flex flex-row items-center justify-between w-full gap-5">
                    <p className="font-bold text-3xl">{critica}</p>
                    <FaTrophy size={"1.875rem"} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <AddToList isRight isDesktop>
                <Button className="flex justify-start bg-[#2d2d2d] text-[#FFAE00]  rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2 w-40">
                  <MdGames size={"1.5rem"} />
                  Adicionar à lista
                </Button>
              </AddToList>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-lg w-full">Descrição:</p>
              <p>{descricao}</p>
            </div>

            <div className="flex flex-wrap justify-start md:gap-5 lg:gap-10">
              <div className="flex gap-2">
                <p className="font-bold">Data de lançamento: </p>
                <p>{lancamento}</p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Desenvolvedora: </p>
                <p className="text-[#FFae00] cursor-pointer hover:underline">
                  {desenvolvedora}
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-bold">Distribuidora: </p>
                <p className="text-[#FFae00] cursor-pointer hover:underline">
                  {distribuidora}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-lg">Gêneros</p>
              <div className="flex flex-row gap-2">
                {generos.map((genero, index) => (
                  <div
                    key={index}
                    className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-[#FFae00] hover:text-[#1d1d1d] hover:bg-[#FFae00] transition duration-100 cursor-pointer"
                  >
                    {genero}
                  </div>
                ))}
              </div>
              <p className="font-bold text-lg pt-3">Onde jogar</p>
              <div className="flex flex-row gap-2 pt-2">
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-[#FFae00] hover:text-[#1d1d1d] hover:bg-[#FFae00] transition duration-100 cursor-pointer">
                  <p>Steam</p>
                </div>
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-[#FFae00] hover:text-[#1d1d1d] hover:bg-[#FFae00] transition duration-100 cursor-pointer">
                  <p>Playstation</p>
                </div>
                <div className="w-fit bg-[#2d2d2d] px-2 py-1 flex items-center rounded-sm text-[#FFae00] hover:text-[#1d1d1d] hover:bg-[#FFae00] transition duration-100 cursor-pointer">
                  <p>Xbox</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetails;
