"use client";
import TooltipLista from "@/components/tooltipLista";
import { MdGames } from "react-icons/md";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AddToList = ({ children, isLeft, isRight }) => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
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
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2d2d2d] text-white border-none">
        <DropdownMenuLabel>Adicionar à lista</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Jogos Top!!!
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Lista de desejo
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddToList;
