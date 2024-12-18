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

export function CreateList() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#8c00ff] text-white rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md">
            Nova lista
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#1d1d1d] border-0">
          <DialogHeader>
            <DialogTitle>Nova lista</DialogTitle>
          </DialogHeader>
          <ListForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="bg-[#8c00ff] text-white rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md">
          Nova lista
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-[#1d1d1d] border-0 pb-4">
        <DrawerHeader className="text-left">
          <DrawerTitle>Nova lista</DrawerTitle>
        </DrawerHeader>
        <ListForm className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ListForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="title" className="text-md">
          Título
        </Label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <Input
            type="text"
            id="title"
            placeholder="Título da lista"
            className="bg-[#2d2d2d] border-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            step="0.1"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description" className="text-md">
          Descrição
        </Label>
        <Textarea
          id="description"
          placeholder="Insira a descriçao da lista"
          className="bg-[#2d2d2d] border-0"
        />
      </div>
      <Button
        type="submit"
        className="bg-[#8c00ff] text-white mt-2 rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md"
      >
        Salvar
      </Button>
    </form>
  );
}
