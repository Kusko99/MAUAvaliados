import { clerkClient, auth, currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const { userId } = auth();
async function fetchUser(userId) {
  try {
    const user = await clerkClient().users.getUser(userId);
    console.log(user.emailAddresses);

    // Send the user data to the specified route
    const response = await fetch("http://127.0.0.1:7000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error("Failed to send user data");
    }

    console.log("User data sent successfully");
  } catch (error) {
    console.error("Error fetching or sending user data:", error);
  }
}

fetchUser(userId);

const WelcomePage = () => {
  return (
    <div className="relative h-screen bg-[url('../public/mosaic.jpeg')]">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex flex-col gap-5 justify-center items-center h-full text-white">
        <p className="text-center text-2xl">Bem-vindo(a) ao MAUAvaliados!</p>
        <p className="text-lg text-balance text-center">
          Sua jornada pelos melhores jogos começa aqui.
        </p>
        <p className="text-balance text-center">
          Descubra, avalie e organize seus jogos favoritos. Conecte-se com
          outros gamers, explore listas personalizadas
        </p>
        <p className="text-balance text-center">
          Pronto para compartilhar suas experiências e encontrar novas
          recomendações? O universo dos games está a um clique de distância!
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href="/">Avançar</Link>
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;

// async function fetchUserList() {
//   const response = await clerkClient().users.getUserList();
//   console.log(response);
// }
// fetchUserList();

// const userId = "user_2lwjCPAOcKRQHDSgfaAXWCecjZX";
// async function fetchUser(userId) {
//   const response = await clerkClient().users.getUser(userId);
//   console.log(response.emailAddresses);
// }
// fetchUser("user_2lwjCPAOcKRQHDSgfaAXWCecjZX");

// const { userId } = auth()
// console.log(userId)
