import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhereToPlay from "@/components/whereToPlay";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { MdGames } from "react-icons/md";

const GameDetailsSmall = ({
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
  return (
    <div className="flex flex-col mx-5  mt-24 gap-6 items-center justify-center">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col bg-[#FFAE00]/80 w-fit p-2 justify-around rounded-sm ">
          <p className="text-sm font-bold">Usuários</p>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            <p className="font-bold text-2xl">{usuarios}</p>
            <FaTrophy size={"1.5rem"} />
          </div>
        </div>
        <div className="flex flex-col bg-[#8c00ff]/50 w-fit p-2 justify-around rounded-sm ">
          <p className="text-sm font-bold">IGDB</p>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            <p className="font-bold text-2xl">{igdb}</p>
            <FaTrophy size={"1.5rem"} />
          </div>
        </div>
        <div className="flex flex-col bg-[#8c00ff]/50 w-fit p-2 justify-around rounded-sm ">
          <p className="text-sm font-bold">Crítica</p>
          <div className="flex flex-row items-center justify-between w-full gap-4">
            <p className="font-bold text-2xl">{critica}</p>
            <FaTrophy size={"1.5rem"} />
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full gap-2 justify-between">
        <div className="flex flex-col justify-start gap-2">
          <p className="text-2xl font-bold text-wrap">{title}</p>
          <div className="flex flex-col justify-start">
            <p className="font-semibold">Data de lançamento: </p>
            <p className="text-sm">{lancamento}</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Desenvolvedora: </p>
            <p className="text-[#FFae00] text-sm cursor-pointer hover:underline">
              {desenvolvedora}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">Distribuidora: </p>
            <p className="text-[#FFae00] text-sm cursor-pointer hover:underline">
              {distribuidora}
            </p>
          </div>
        </div>
        <div className="max-w-48">
          <Image
            src={cover}
            layout="responsive"
            className="rounded-sm max-w-48"
          />
          <Link
            href={
              "https://www.youtube.com/watch?v=c0i88t0Kacs&pp=ygUVdGhlIHdpdGNoZXIgMyB0cmFpbGVy"
            }
            className="w-full"
            target="_blank"
          >
            <Button
              size="sm"
              className="bg-[#2d2d2d] text-[#FFAE00] mt-1 py-0 rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2 w-full"
            >
              <FaPlay />
              Trailer
            </Button>
          </Link>
          <Button className="bg-[#2d2d2d] text-[#FFAE00] rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2 w-full mt-1">
            <MdGames size={"1.5rem"} />
            Adicionar à lista
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 -mt-10">
        <p className="font-semibold w-full">Descrição:</p>
        <p>{descricao}</p>
      </div>

      <div className="flex w-full flex-col gap-2">
        <p className="font-semibold">Gêneros</p>
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
        <p className="font-semibold pt-3">Onde jogar</p>
        <div className="flex flex-row gap-8 pt-2">
          <WhereToPlay tooltipContent={<p>Steam</p>}>
            <FaSteam
              size={"2em"}
              className="hover:scale-110 transition ease-in-out cursor-pointer hover:text-[#FFAE00]"
            />
          </WhereToPlay>
          <WhereToPlay tooltipContent={<p>Playstation</p>}>
            <FaPlaystation
              size={"2em"}
              className="hover:scale-110 transition ease-in-out cursor-pointer hover:text-[#FFAE00]"
            />
          </WhereToPlay>
          <WhereToPlay tooltipContent={<p>Xbox</p>}>
            <FaXbox
              size={"2em"}
              className="hover:scale-110 transition ease-in-out cursor-pointer hover:text-[#FFAE00]"
            />
          </WhereToPlay>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default GameDetailsSmall;
