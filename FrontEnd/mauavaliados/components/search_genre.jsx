import { Button } from "@/components/ui/button";


const SearchGenre = ({ genre }) => {
  return (
    <Button className="w-full py-10 text-lg font-semibold bg-[#2d2d2d] hover:bg-white hover:text-[#1d1d1d] rounded-sm">
      {genre}
    </Button>
  );
};

export default SearchGenre;
