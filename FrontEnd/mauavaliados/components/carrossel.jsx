import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GameCard from "@/components/gameCard";
import Link from "next/link";
import super_smash from "../public/super_smash.png";
import the_witcher from "../public/the_witcher_cover.png";
import tlou from "../public/tlou.png";

function Carrossel() {
  const isLastItem = (index, length) => index === length - 1;
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
    <div className="flex justify-center mx-auto w-full max-w-full">
      <Carousel className="min-w-full max-w-lg m-0 p-0 flex justify-center">
      <CarouselContent className="w-screen z-0">
        {covers.map((cover, index) => (
          <CarouselItem
            key={index}
            className={`basis-1/6 mr-12`}
            style={{
              marginRight: isLastItem(index, covers.length) ? '128px' : '48px',
            }}
          >
              <div className="pl-12">
                <Link href="/game">
                  <GameCard
                    cover={cover}
                    className="items-center justify-center"
                  />
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10 ml-12 h-[150px] sm:h-[225px] md:h-[265px] lg:h-[300px] xl:h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
        <CarouselNext className="z-10 mr-12 h-[150px] sm:h-[225px] md:h-[265px] lg:h-[300px] xl:h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
      </Carousel>
    </div>
  );
}

export default Carrossel;
