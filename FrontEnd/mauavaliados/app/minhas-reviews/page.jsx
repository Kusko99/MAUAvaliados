"use client";

import { useEffect, useState } from "react";
import { useUser, SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MinhaReview from "@/components/minhaReview";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import the_witcher_cover from "../../public/the_witcher_cover.png";

async function fetchCover(initialUrl) {
  try {
    const id = initialUrl.split("/").pop().replace(".jpg", "");
    const finalUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${id}.jpg`;

    const response = await fetch(finalUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch cover from ${finalUrl}`);
    }

    const imageBlob = await response.blob();
    return URL.createObjectURL(imageBlob);
  } catch (error) {
    console.error("Error fetching cover:", error);
    return null;
  }
}

async function fetchGame(gameId) {
  try {
    const res = await fetch(`http://127.0.0.1:5051/get/game/${gameId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch game data");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching game:", err);
    return null;
  }
}

async function fetchReviews(userId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:6051/aval/get_by_user/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }

    const data = await response.json();
    return data["avaliações"] || [];
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export default function MinhasReviews() {
  const { user } = useUser();
  const [reviews, setReviews] = useState([]);
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      fetchReviews(user.id).then((data) => setReviews(data));
    }
  }, [user?.id]);

  useEffect(() => {
    // Fetch game data based on the id_jogo from the first review (assuming all reviews are for the same game)
    if (reviews.length > 0) {
      const gameId = reviews[0].id_jogo; // Get the game ID from the first review
      fetchGame(gameId).then((data) => {
        setGameData(data);
        setLoading(false);

        // Fetch cover image once game data is loaded
        if (data?.jogo?.capa) {
          fetchCover(data.jogo.capa).then((cover) => {
            setGameData((prevData) => ({
              ...prevData,
              cover: cover,
            }));
          });
        }
      });
    }
  }, [reviews]);

  const handleDelete = async (reviewId) => {
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

      // Remove the review from the state after successful deletion
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  if (loading) {
    return (
      <SignedIn>
        <SidebarProvider>
          <AppSidebar />
          <Navbar />
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        </SidebarProvider>
        <Footer />
      </SignedIn>
    );
  }

  return (
    <SignedIn>
      <SidebarProvider>
        <AppSidebar />
        <Navbar />
        <div className="flex max-w-7xl mx-auto min-h-screen flex-col items-center">
          <div className="mt-24 w-full">
            <div className="flex flex-row justify-between items-center mx-5 md:mx-12">
              <p className="md:text-3xl text-2xl font-semibold">
                Minhas Reviews
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-5 md:mx-12 mb-12 mt-4">
              {reviews.map((review) => (
                <MinhaReview
                  key={review.id}
                  cover={gameData?.cover || the_witcher_cover}
                  review={review.aval_escrita}
                  game_name={gameData?.jogo?.nome || "Jogo Desconhecido"}
                  nota={review.aval_nota}
                  data={"04/12/2024"}
                  id={review.id}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </SidebarProvider>
      <Footer />
    </SignedIn>
  );
}
