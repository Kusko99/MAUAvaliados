import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchGenre from "@/components/search_genre";

// #8C00FF
// #FFAE00
// #E1005E

export default function Pesquisar() {
  const genres = [
    'Mundo Aberto',
    'RPG',
    'Ação',
    'Aventura',
    'Estratégia',
    'Simulação',
    'Esportes',
    'Corrida',
    'Puzzle',
    'Terror',
    'Plataforma',
    'Multijogador',
  ];

  return (
    <SignedIn>
      <Navbar />
      <div className="flex flex-col max-w-7xl mx-auto mb-12">
        <div className="relative mx-5 md:mx-12 mt-24">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="w-6 h-6" />
          </div>
          <Input
            type="text"
            id="pesquisar"
            placeholder="Buscar..."
            className="bg-[#2d2d2d] border-0 pl-11 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none py-8 text-xl font-semibold"
            step="0.1"
          />
        </div>

        <h1 className="md:text-3xl text-2xl font-bold pb-4 mx-5 md:mx-12 mt-12">Categorias</h1>
        <div className="mt-2 mx-5 md:mx-12 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <Button className="w-full py-12 text-xl font-semibold bg-gradient-to-r from-[#8C00FF] to-[#2D2D2D] transition duration-300 ease-in-out transform hover:scale-105 rounded-sm">
            Lançamentos
          </Button>
          <Button className="w-full py-12 text-xl font-semibold bg-gradient-to-r from-[#FFAE00] to-[#2D2D2D] transition duration-300 ease-in-out transform hover:scale-105 rounded-sm">
            Em Alta
          </Button>
          <Button className="w-full py-12 text-xl font-semibold bg-gradient-to-r from-[#E1005E] to-[#2D2D2D] transition duration-300 ease-in-out transform hover:scale-105 rounded-sm">
            Recomendações
          </Button>
        </div>

        <h1 className="md:text-3xl text-2xl font-bold pb-4 mx-5 md:mx-12 mt-12">Gêneros</h1>
        <div className="mt-2 mx-5 md:mx-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {genres.map((genre, index) => (
            <SearchGenre key={index} genre={genre} />
          ))}
        </div>

        <div className="flex row justify-center mt-12">
          <Button className="px-10 py-5 text-md rounded-sm bg-[#4d4d4d] hover:bg-[#3d3d3d]">
            Ver Mais
          </Button>
        </div>
      </div>
    </SignedIn>
  );
}
