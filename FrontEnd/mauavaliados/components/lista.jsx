import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import TooltipLista from "@/components/tooltipLista";
import super_smash from "../public/super_smash.png";
import the_witcher from "../public/the_witcher_cover.png";
import tlou from "../public/tlou.png";
import Image from "next/image";
import Link from "next/link";

const Lista = ({}) => {
  const covers = [
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
    super_smash,
    the_witcher,
    tlou,
  ];

  return (
    <Link href={"/detalhes-lista"}>
      <div className=" rounded-sm p-[1.2px] transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
        <div className="flex flex-col bg-[#2d2d2d] justify-around rounded-md p-3 md:p-6 cursor-pointer gap-5">
          <div className="flex flex-row justify-between">
            <p className="text-lg font-bold">Jogos Top!!!</p>
            <div className="flex flex-row gap-4">
              <TooltipLista text={"Editar Lista"}>
                <FaRegEdit size={"22px"} className="hover:text-[#8C00FF]" />
              </TooltipLista>
              <TooltipLista text={"Excluir Lista"}>
                <FaRegTrashCan
                  size={"22px"}
                  className="hover:text-[#E1005E] transition"
                />
              </TooltipLista>
            </div>
          </div>
          <div className="flex flex-row justify-between overflow-hidden gap-4">
            {covers.map((cover, index) => (
              <Image key={index} src={cover} className="w-20 rounded-sm" />
            ))}
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
