import { Search, Trophy, Scroll } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Pesquisar",
    url: "/pesquisar",
    icon: Search,
  },
  {
    title: "Minhas Reviews",
    url: "/minhas-reviews",
    icon: Trophy,
  },
  {
    title: "Listas",
    url: "/listas",
    icon: Scroll,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="fixed top-0 left-0 z-50">
      <SidebarContent className="bg-[#1d1d1d] text-white font-semibold">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl font-semibold mb-1">
            <span className="text-[#8C00FF]">Mauá</span>
            <span className="text-[#FFAE00]">vali</span>
            <span className="text-[#E1005E]">ados</span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="my-1">
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center space-x-2 text-gray-300 hover:text-[#1d1d1d] focus:text-white hover:bg-[#2d2d2d] focus:bg-[#2d2d2d]"
                    >
                      <item.icon className="text-white" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
