"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

const ExternalApiExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getToken();
        console.log("token:", token);

        const response = await fetch(
          "http://127.0.0.1:6051//aval/get_by_user/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [getToken]);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Dados da API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExternalApiExample;
