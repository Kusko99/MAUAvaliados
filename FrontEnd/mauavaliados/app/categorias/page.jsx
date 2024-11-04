import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import GameCardCategory from "@/components/gameCardCategory";
import Link from "next/link";
import the_witcher_cover from "../../public/the_witcher_cover.png";

export default function Categorias() {
  return (
    <SignedIn>
      <Navbar />
      <div className="flex max-w-7xl mx-auto flex-col items-center ">
        <div className="mt-24 w-full">
          <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
            <p className="text-3xl font-semibold">Aventura</p>
          </div>
          <div className="flex flex-col mb-12 mt-4">
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 mx-5 md:mx-12 justify-between gap-4 place-items-center">
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
              <Link href="/game">
                  <GameCardCategory
                    cover={the_witcher_cover}
                    className="items-center justify-center "
                  />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignedIn>
  );
}
