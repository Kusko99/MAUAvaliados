import Image from "next/image";
import { Button } from "@/components/ui/button";
import WhereToPlay from "@/components/whereToPlay";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const GameDetails = ({
  children,
  cover,
  title,
  usuarios,
  critica,
  descricao,
  lancamento,
  desenvolvedora,
  distribuidora,
  generos,
}) => {
  return (
    <div className="flex flex-row items-start justify-around mx-12">
      <div className="flex flex-col min-w-max p-0 m-0 pr-12">
        <Image src={cover} width={300} className="rounded-sm" />
        <Button className="bg-[#2d2d2d] text-[#FFAE00] mt-2 rounded-sm hover:bg-[#FFAE00] hover:text-black font-bold gap-2">
          <FaPlay />
          Trailer
        </Button>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <p className="text-4xl font-bold">{title}</p>
          <div className="flex flex-row gap-6">
            <div className="flex flex-col bg-[#8c00ff] w-fit p-2 justify-around rounded-sm">
              <p className="text-sm font-bold">Usuários</p>
              <div className="flex flex-row items-center justify-between w-full gap-5">
                <p className="font-bold text-3xl">{usuarios}</p>
                <FaTrophy size={"1.875rem"} />
              </div>
            </div>
            <div className="flex flex-col bg-[#8c00ff] w-fit p-2 justify-around rounded-sm">
              <p className="text-sm font-bold">Crítica</p>
              <div className="flex flex-row items-center justify-between w-full gap-5">
                <p className="font-bold text-3xl">{critica}</p>
                <FaTrophy size={"1.875rem"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-9">
          <p className="font-bold text-lg">Descrição:</p>
          <p>{descricao}</p>
        </div>
        <div className="flex flex-row justify-start gap-10">
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
      </div>
    </div>
  );
};

export default GameDetails;
