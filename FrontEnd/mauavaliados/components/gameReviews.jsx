"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Review from "./review";
import Morty from "../public/morty.jpg";
import PlaceholderNoItems from "./placeholderNoItems";

async function fetchUsuario(userId) {
  try {
    const response = await fetch(`http://127.0.0.1:7051/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
}

async function fetchMinhaReviews(userId) {
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

async function fetchOutrasReviews(gameId, userId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:6051/aval/get_by_jogo/${gameId}`,
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
    const allReviews = data["avaliações"] || [];

    const filteredReviews = allReviews.filter(
      (review) => review.id_user !== userId
    );
    return filteredReviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}

export default function GameReviews({ gameId }) {
  const { user } = useUser();
  const [minhasReviews, setMinhasReviews] = useState([]);
  const [outrasReviews, setOutrasReviews] = useState([]);
  const [userMap, setUserMap] = useState({});

  useEffect(() => {
    if (user?.id) {
      fetchMinhaReviews(user.id).then((data) => setMinhasReviews(data));
      fetchOutrasReviews(gameId, user.id).then((data) =>
        setOutrasReviews(data)
      );
    }
  }, [user?.id, gameId]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersToFetch = outrasReviews.filter(
        (review) => !userMap[review.id_user]
      );

      for (const review of usersToFetch) {
        const userData = await fetchUsuario(review.id_user);
        if (userData) {
          setUserMap((prevUserMap) => ({
            ...prevUserMap,
            [review.id_user]: userData,
          }));
        }
      }
    };

    fetchUsers();
  }, [outrasReviews, userMap]);

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3 mx-5 md:mx-12 mb-12">
      {minhasReviews.length === 0 ? (
        <PlaceholderNoItems texto="Você ainda não fez nenhuma avaliação." />
      ) : (
        minhasReviews.map((review) => (
          <Review
            key={review.id}
            review={review.aval_escrita}
            nota={review.aval_nota}
            user={
              user.firstName && user.lastName
                ? `${user.firstName} ${user.lastName}`
                : user.emailAddresses[0]?.emailAddress || "Usuário Desconhecido"
            }
            avatar={user.imageUrl || Morty}
          />
        ))
      )}

      {outrasReviews.length === 0 ? (
        <PlaceholderNoItems texto="Nenhuma avaliação de outros usuários." />
      ) : (
        outrasReviews.map((review) => {
          const reviewUser = userMap[review.id_user] || {};

          const imageUrl = reviewUser.imageUrl || Morty;

          const userName =
            reviewUser.firstName && reviewUser.lastName
              ? `${reviewUser.firstName} ${reviewUser.lastName}`
              : reviewUser.emailAdress || "Usuário Desconhecido";

          return (
            <Review
              key={review.id}
              review={review.aval_escrita}
              nota={review.aval_nota}
              user={userName}
              avatar={imageUrl}
            />
          );
        })
      )}
    </div>
  );
}
