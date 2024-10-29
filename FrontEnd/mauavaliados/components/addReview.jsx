"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { FaTrophy } from "react-icons/fa";

export function AddReview() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#FFAE00] text-black rounded-sm hover:bg-[#FFAE00] hover:brightness-90 transition hover:text-black font-bold gap-2 text-md">
            Adicionar review
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#1d1d1d] border-0">
          <DialogHeader>
            <DialogTitle>Minha Review</DialogTitle>
          </DialogHeader>
          <ReviewForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-[#FFAE00] text-black rounded-sm hover:bg-[#FFAE00] hover:brightness-90 transition hover:text-black font-bold gap-2 text-md">
          Adicionar review
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#1d1d1d] border-0 pb-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Minha Review</DrawerTitle>
        </DrawerHeader>
        <ReviewForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ReviewForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="rating" className="text-md">
          Nota
        </Label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaTrophy className="w-5 h-5" />
          </div>
          <Input
            type="number"
            id="rating"
            placeholder="0 a 10"
            className="bg-[#2d2d2d] border-0 pl-11 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            step="0.1"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="review" className="text-md">
          Review
        </Label>
        <Textarea
          id="review"
          placeholder="Insira sua review"
          className="bg-[#2d2d2d] border-0"
        />
      </div>
      <Button
        type="submit"
        className="bg-[#FFAE00] text-black mt-2 rounded-sm hover:bg-[#FFAE00] hover:brightness-90 transition hover:text-black font-bold gap-2 text-md"
      >
        Salvar
      </Button>
    </form>
  );
}
