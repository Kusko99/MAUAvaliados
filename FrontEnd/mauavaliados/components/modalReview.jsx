"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import the_witcher from "../public/the_witcher.png";
import stray from "../public/stray.jpg";
import morty from "../public/morty.jpg";
import { FaTrophy } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ModalReview = ({ show, handleClose, review, nota }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-[#8C00FF] hover:underline-offset-1 hover:underline transition">
          Ver Mais
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[600px] bg-[#1d1d1d] border-0 p-0 overflow-hidden">
        <DialogHeader className="">
          <Image
            src={the_witcher}
            className="w-full h-48 object-cover"
            alt="cover"
          />
        </DialogHeader>
        <div className="flex flex-col p-4 gap-4">
          <div className="gap-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-5 items-center">
                <Image
                  src={morty}
                  width={48}
                  className="rounded-full"
                  alt="avatar"
                />
                <p className="font-bold">Rivian_Soldier</p>
              </div>
              <div className="flex flex-row gap-5">
                <div
                  onClick={handleLikeClick}
                  className="cursor-pointer flex flex-row gap-2 items-center"
                >
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
              </div>
            </div>
          </div>
          <div className="overflow-y-scroll h-[300px] scrollbar-thin scrollbar-thumb-[#1d1d1d] scrollbar-track-[#2d2d2d] scrollbar-medium">
            <p className="text-start">{review}</p>
          </div>
          <p className="text-sm text-start">Data: 22/10/2024</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalReview;
