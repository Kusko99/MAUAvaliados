// import localFont from "next/font/local";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import { dark } from "@clerk/themes";
import { ptBR } from "@clerk/localizations";
import { Lato } from "next/font/google";
import Navbar from "@/components/navbar";
import Image from "next/image";
import logo from "../public/logo_mauavaliados_img.png";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      className
      localization={ptBR}
      appearance={{
        baseTheme: dark,
        variables: {
          fontSize: "16px",
        },
      }}
    >
      <html lang="en">
        <body>
          <SignedOut></SignedOut>
          <main className={lato.className}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}