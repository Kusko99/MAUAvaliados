"use client";
import React, { useState } from "react";
import Image from "next/image";
import morty from "../public/morty.jpg";
import { FaTrophy } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ModalReview from "./modalReview";

const Review = ({ review }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex flex-col bg-[#2d2d2d] h-60 justify-around rounded-sm p-6 cursor-pointer border-transparent">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5 items-center">
          <Image src={morty} width={48} className="rounded-full" />
          <p className="font-bold">Rivian_Soldier</p>
        </div>
        <div className="flex flex-row gap-5">
          <div
            onClick={handleLikeClick}
            className="cursor-pointer flex flex-row gap-2 items-center"
          >
            <p className="font-bold">10</p>
            {isLiked ? (
              <FaHeart className="text-[#8C00FF] transition duration-300 ease-in-out transform scale-125" />
            ) : (
              <FaRegHeart className="transition duration-300 ease-in-out transform hover:scale-125" />
            )}
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="font-bold">10</p>
            <FaTrophy />
          </div>
        </div>
      </div>
      <p className="line-clamp-3 text-start">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        quasi magnam repellendus iure dolorem? Accusamus sapiente ratione
        cupiditate inventore est quaerat accusantium iure libero, ad
        exercitationem enim autem dolor totam! Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Quod minus animi illo, placeat, inventore
        eaque libero, officia veritatis impedit quae dicta repellendus odio
        molestiae? Dolorem temporibus sit nisi nihil sint?
      </p>
      <div
        className="flex flex-row w-full justify-between items-center"
        asChild
      >
        <p className="text-sm text-start">Data: 22/10/2024</p>
        <ModalReview />
      </div>
    </div>
  );
};

export default Review;
