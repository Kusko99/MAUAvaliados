"use client";
import TooltipLista from "@/components/tooltipLista";
import { MdGames } from "react-icons/md";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "../hooks/use-toast";

const AddToList = ({ children, isLeft, isRight, isDesktop }) => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const { toast } = useToast();

  const handleCheckedChange = (checked, setChecked, listName) => {
    setChecked(checked);
    toast({
      title: checked ? "Adicionado à lista" : "Removido da lista",
      description: `Jogo ${
        checked ? "adicionado à" : "removido da"
      } lista de ${listName}`,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={isDesktop ? "w-min" : ""}>
          <TooltipLista
            isLeft={isLeft ? true : false}
            isRight={isRight ? true : false}
            text={"Adicionar à lista"}
          >
            {children || (
              <MdGames
                size={"1.7rem"}
                className="hover:text-[#FFAE00] transition"
              />
            )}
          </TooltipLista>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2d2d2d] text-white border-none">
        <DropdownMenuLabel>Adicionar à lista</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={(checked) =>
            handleCheckedChange(checked, setShowStatusBar, "jogos top")
          }
        >
          Jogos Top!!!
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={(checked) =>
            handleCheckedChange(checked, setShowPanel, "Lista de desejo")
          }
        >
          Lista de desejo
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddToList;