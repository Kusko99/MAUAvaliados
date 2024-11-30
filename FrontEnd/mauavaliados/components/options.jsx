import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";

export function Options({ reviewId, onDelete }) {
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:6051/aval/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error deleting review: ${errorData.message}`);
      }

      toast({
        variant: "roxo",
        title: "Review deletada",
        description: "A review foi deletada com sucesso.",
      });

      if (onDelete) {
        onDelete(reviewId); // Notify parent component about the deletion
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível deletar a review.",
      });
      console.error("Error deleting review:", error);
    }
  };

  return (
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
            <div>Editar</div>
            <FaRegEdit size={"1.2rem"} />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex justify-between"
            onClick={handleDelete}
          >
            <div>Deletar</div>
            <FaRegTrashCan size={"1.2rem"} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
