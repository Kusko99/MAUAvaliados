import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GameCard from "@/components/gameCard";

function Carrossel() {
  return (
    <div className="flex justify-center mx-auto w-full max-w-full">
      <Carousel className="min-w-full max-w-lg m-0 p-0 flex justify-center ">
        <CarouselContent className="w-screen z-0">
          {Array.from({ length: 20 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6"
            >
              <div className="pl-12">
                <GameCard className="items-center justify-center" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10 ml-12 h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
        <CarouselNext className="z-10 mr-12 h-[346px] w-16 rounded-none border-0 hover:opacity-100 hover:bg-black/50 disabled:hidden hover:transition" />
      </Carousel>
    </div>
  );
}

export default Carrossel;
