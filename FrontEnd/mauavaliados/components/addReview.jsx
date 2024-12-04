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
import { useToast } from "../hooks/use-toast";
import { useAuth } from "@clerk/nextjs";

export function AddReview({id_jogo}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { toast } = useToast();
  const { userId } = useAuth();

  const ReviewForm = ({ className }) => {
    const [rating, setRating] = React.useState("");
    const [review, setReview] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const submitData = async () => {
      if (!rating && !review) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Preencha pelo menos um dos campos.",
        });
        return;
      }

      const resAvaliacao = {
        id_user: userId,
        id_jogo: id_jogo,
        aval_nota: parseFloat(rating),
        aval_escrita: review,
      };

      try {
        setIsSubmitting(true);

        const response = await fetch("http://127.0.0.1:6051/aval", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resAvaliacao),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Erro na resposta: ${errorData.message}`);
        }

        const data = await response.json();

        toast({
          variant: "roxo",
          title: "Review salva",
          description: "Sua review foi salva com sucesso.",
        });

        setOpen(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Ocorreu um erro ao salvar sua review.",
        });
        console.error("Erro ao salvar review:", error);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className={cn("grid items-start gap-4", className)}>
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
              name="rating"
              placeholder="0 a 10"
              className="bg-[#2d2d2d] border-0 pl-11 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              step="0.1"
              value={rating}
              onChange={(e) => {
                const value = e.target.value;
                if (value >= 0 && value <= 10) {
                  setRating(value);
                }
              }}
              disabled={isSubmitting}
              min="0"
              max="10"
              inputMode="numeric"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="review" className="text-md">
            Review
          </Label>
          <Textarea
            id="review"
            name="review"
            placeholder="Insira sua review"
            className="bg-[#2d2d2d] border-0"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        <Button
          onClick={submitData}
          className="bg-[#8c00ff] text-white mt-2 rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-[#8c00ff] text-white rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md">
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
        <Button className="bg-[#8c00ff] text-white rounded-sm hover:bg-[#8c00ff] hover:brightness-90 transition hover:text-white font-bold gap-2 text-md">
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
