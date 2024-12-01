"use client";
import React, { useState } from "react";
import Image from "next/image";
import morty from "../public/morty.jpg";
import { FaTrophy } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import ModalReview from "./modalReview";

const Review = ({ review, nota, user, avatar }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className=" rounded-sm p-[1.2px] transition bg-gradient-to-t hover:from-[#8c00ff] hover:to-[#2a0747]">
      <div className="flex flex-col bg-[#2d2d2d] h-60 justify-around rounded-md p-3 md:p-6 cursor-pointer ">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3 md:gap-5 items-center">
            <Image
              src={avatar || morty}
              width={40}
              height={40}
              className="rounded-full w-8 h-8 md:h-10 md:w-10 object-cover"
              alt="avatar"
            />
            <p className="font-bold">{user}</p>
          </div>
          <div className="flex flex-row gap-3 md:gap-5">
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
              <p className="font-bold">{nota}</p>
              <FaTrophy />
            </div>
          </div>
        </div>
        <p className="line-clamp-3 text-start">{review}</p>
        <div className="flex flex-row w-full justify-between items-center">
          <p className="text-sm text-start">Data: 22/10/2024</p>
          <ModalReview review={review} nota={nota} />
        </div>
      </div>
    </div>
  );
};

export default Review;
