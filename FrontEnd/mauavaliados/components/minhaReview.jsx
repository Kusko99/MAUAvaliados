"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";


import ModalReview from "./modalReview";

const MinhaReview = ({ review, game_name, nota, likes, data, cover }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="flex flex-row gap-2">
      <div className=" rounded-sm p-[2px] transition bg-gradient-to-tr hover:from-[#FFAE00] hover:to-[#2a0747]">
        <div className="group relative w-40 h-full rounded-sm cursor-pointer drop-shadow-xl overflow-hidden">
          <Image
            src={cover}
            className="absolute w-full object-cover h-full"
          />
        </div>
      </div>
      <div className=" rounded-sm p-[1.2px] transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
        <div className="flex flex-col bg-[#2d2d2d] h-60 justify-around rounded-md p-3 md:p-6 cursor-pointer ">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 md:gap-5 items-center">
              <p className="font-bold text-[#FFAE00] hover:underline-offset-1 hover:underline transition line-clamp-1">{game_name}</p>
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
            </div>
          </div>
          <p className="line-clamp-3 text-start">{review}</p>
          <div
            className="flex flex-row w-full justify-between items-center"
            asChild
          >
            <p className="text-sm text-start">Data: {data}</p>
            <ModalReview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinhaReview;
