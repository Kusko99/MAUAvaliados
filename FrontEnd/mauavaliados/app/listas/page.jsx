import { SignedIn } from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Lista from "@/components/lista";
import { CreateList } from "@/components/createList";
import PlaceholderNoItems from "@/components/placeholderNoItems";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Listas() {
  return (
    <SignedIn>
    <SidebarProvider>
    <AppSidebar />
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
          </div>
        </div>
      </div>
    </SidebarProvider>
      <Footer />
    </SignedIn>
  );
}
