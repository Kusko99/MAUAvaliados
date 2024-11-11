import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MinhaReview from "@/components/minhaReview";
import the_witcher_cover from "../../public/the_witcher_cover.png";

export default function MinhasReviews() {
  return (
    <SignedIn>
      <Navbar />
      <div className="flex max-w-7xl mx-auto min-h-screen flex-col items-center ">
        <div className="mt-24 w-full">
          <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
            <p className="md:text-3xl text-2xl font-semibold">Minhas Reviews</p>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-5 md:mx-12 mb-12 mt-4">
            <MinhaReview
                cover={the_witcher_cover}
                review={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibu quasi magnam repellendus iure dolorem? Accusamus sapiente ratione cupiditate inventore est quaerat accusantium iure libero, ad exercitationem enim autem dolor totam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod minus animi illo, placeat, inventore eaque libero, officia veritatis impedit quae dicta repellendus odio molestiae? Dolorem temporibus sit nisi nihil sint?"}
                game_name={"The Witcher 3: Wild Hunt"}
                nota={9.8}
                likes={28}
                data={"22/10/2024"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </SignedIn>
  );
}
