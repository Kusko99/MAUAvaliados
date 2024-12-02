"use client";

import { useEffect, useState } from "react";
import { useUser, SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MinhaReview from "@/components/minhaReview";
import the_witcher_cover from "../../public/the_witcher_cover.png";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

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

  useEffect(() => {
    if (user?.id) {
      fetchReviews(user.id).then((data) => setReviews(data));
    }
  }, [user?.id]);

  // Function to handle review deletion
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

      fetchReviews(user.id).then((data) => setReviews(data));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

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
                  cover={the_witcher_cover}
                  review={review.aval_escrita}
                  game_name={"The Witcher 3: Wild Hunt"}
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
