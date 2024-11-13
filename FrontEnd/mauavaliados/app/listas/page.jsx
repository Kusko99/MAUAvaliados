import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Lista from "@/components/lista";
<<<<<<< Updated upstream
import PlaceholderNoItems from "@/components/placeholderNoItems";
=======
import { CreateList } from "@/components/createList";
>>>>>>> Stashed changes

export default function Listas() {
  return (
    <SignedIn>
      <Navbar />
      <div className="flex max-w-7xl mx-auto flex-col items-center ">
        <div className="mt-24 w-full">
          <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
            <p className="md:text-3xl text-2xl font-semibold">Listas</p>
            <div>
              <CreateList />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-5 md:mx-12 mb-12 mt-4">
            <Lista />
            <Lista />
            <Lista />
            <Lista />
            <Lista />
            <Lista />
          </div>
        </div>
      </div>
      <Footer />
    </SignedIn>
  );
}
