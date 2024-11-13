import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

export function Options() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BsThreeDotsVertical
          size={"1.4rem"}
          className="hover:text-[#FFAE00] transition"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2d2d2d] text-white border-none">
        <DropdownMenuLabel>Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='flex justify-between'>
            <div>Editar</div>
            <FaRegEdit size={"1.2rem"} />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-between">
            <div>Deletar</div>
            <FaRegTrashCan size={"1.2rem"} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
