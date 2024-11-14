import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import super_smash from "../public/super_smash.png";
import the_witcher from "../public/the_witcher_cover.png";
import tlou from "../public/tlou.png";
import Image from "next/image";
import Link from "next/link";
import { Options } from "./options";

const Lista = ({}) => {
  const covers = [
    super_smash,
    the_witcher,
    tlou,
    the_witcher,
    super_smash,
    the_witcher,
    tlou,
    the_witcher,
    super_smash,
    the_witcher,
    tlou,
  ];

  // Add skeleton placeholders if covers length is less than 6
  const totalCovers =
    covers.length < 7
      ? [...covers, ...Array(7 - covers.length).fill(null)]
      : covers;

  return (
    <Link href={"/detalhes-lista"}>
      <div className="rounded-sm p-[1.2px] transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
        <div className="flex flex-col bg-[#2d2d2d] justify-around rounded-md p-3 md:p-6 cursor-pointer gap-5">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-bold">Jogos Top!!!</p>
            <Options />
          </div>
          <div className="flex flex-row justify-between overflow-hidden gap-4">
            {totalCovers.map((cover, index) =>
              cover ? (
                <Image
                  key={index}
                  src={cover}
                  className="w-20 h-28 rounded-sm"
                />
              ) : (
                <div
                  key={index}
                  className="min-w-20 h-28 bg-[#4d4d4d] rounded-sm animate-pulse overflow-hidden"
                ></div>
              )
            )}
          </div>
          <div>
            <p className="line-clamp-2">
              Descrição da lista - Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Qui nam doloremque numquam consequatur non culpa
              maiores. Sint consequuntur, vero tenetur dolorem nulla id.
              Provident assumenda laboriosam obcaecati dolore possimus
              doloremque! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vitae quidem nobis facilis fugit reiciendis corrupti placeat
              quis distinctio iure officiis excepturi beatae veniam culpa,
              inventore provident ipsa dolor molestias quasi?
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Lista;
