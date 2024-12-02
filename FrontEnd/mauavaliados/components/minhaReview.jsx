"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import ModalMinhaReview from "./modalMinhaReview";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { UpdateReview } from "./updateReview";

const MinhaReview = ({
  review,
  game_name,
  nota,
  likes,
  data,
  cover,
  id,
  onDelete, // This is the prop for delete
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const { toast } = useToast(); // Use the toast hook

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Tem certeza que deseja deletar esta review?")) {
      onDelete(id);

      toast({
        variant: "roxo",
        title: "Review deletada com sucesso!",
        description: "Sua review foi removida.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  console.log(id);

  return (
    <div className="flex flex-row gap-2">
      <div className="hidden md:block rounded-sm p-[2px] transition bg-gradient-to-tr hover:from-[#FFAE00] hover:to-[#2e240f]">
        <div className="group relative w-40 h-full rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
          <Image
            src={cover}
            className="absolute w-full object-cover h-full"
            alt="cover"
          />
        </div>
      </div>
      <div className="rounded-sm p-[1.2px] w-full transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
        <div className="flex flex-col bg-[#2d2d2d] h-60 justify-around rounded-md p-3 md:p-6 cursor-pointer">
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-row items-center">
              <Link
                href={"/game"}
                className="font-bold text-[#FFAE00] hover:underline-offset-1 hover:underline transition line-clamp-1"
              >
                {game_name}
              </Link>
            </div>
            <div className="flex flex-row gap-3 md:gap-5">
              <div
                onClick={handleLikeClick}
                className="cursor-pointer flex flex-row gap-2 items-center"
              >
                <p className="font-bold">{likes}</p>
                {isLiked ? (
                  <FaHeart className="text-[#8C00FF] transition duration-300 ease-in-out transform scale-125" />
                ) : (
                  <FaRegHeart className="transition duration-300 ease-in-out transform hover:scale-125" />
                )}
              </div>
              <div className="flex flex-row gap-2 items-center">
                <p className="font-bold">{nota}</p>
                <FaTrophy />
              </div>
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
                    <DropdownMenuItem className="flex justify-between">
                      <UpdateReview />
                      <FaRegEdit size={"1.2rem"} />
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={handleDeleteClick}
                      className="flex justify-between text-red-500 hover:text-red-700"
                    >
                      <div>Deletar</div>
                      <FaRegTrashCan />
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="line-clamp-3 text-start">{review}</p>
          <div className="flex flex-row w-full justify-between items-center">
            <p className="text-sm text-start">Data: {data}</p>
            {/* Ver Mais button */}
            <ModalMinhaReview
              review={review}
              game_name={game_name}
              nota={nota}
              likes={likes}
              data={data}
              cover={cover}
              id={id}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaReview;
