import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GameCardCategory from "@/components/gameCardCategory";
import super_smash from "../../public/super_smash.png";
import the_witcher from "../../public/the_witcher_cover.png";
import tlou from "../../public/tlou.png";

export default function Categorias() {
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
    <SignedIn>
      <Navbar />
      <div className="flex max-w-7xl mx-auto flex-col items-center ">
        <div className="mt-24 w-full">
          <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
            <p className="md:text-3xl text-2xl font-semibold">Aventura</p>
          </div>
          <div className="flex flex-col mb-12 mt-4">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mx-5 md:mx-12 justify-between gap-4 place-items-center">
              {covers.map((cover, index) => (
                <GameCardCategory cover={cover} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </SignedIn>
  );
}
