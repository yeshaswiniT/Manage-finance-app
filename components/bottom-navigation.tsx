"use client";

import { usePathname, useRouter } from "next/navigation";
import { Users, Gamepad2, CreditCard, Menu, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigationItems = [
  {
    id: "clubs",
    label: "Clubs",
    icon: Users,
    href: "/",
  },
  {
    id: "games",
    label: "Games",
    icon: Gamepad2,
    href: "/games",
  },
  {
    id: "transactions",
    label: "Transactions",
    icon: CreditCard,
    href: "/transactions",
  },
];

interface BottomNavigationProps {
  defaultActive?: string;
}

export default function BottomNavigation({ defaultActive = "clubs" }: BottomNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const getActiveTab = () => {
    if (pathname === "/") return "clubs";
    if (pathname.includes("/games")) return "games";
    if (pathname.includes("/transactions")) return "transactions";
    return defaultActive;
  };

  const activeTab = getActiveTab();

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0a3d62] px-5 py-3 z-50 shadow-md flex items-center justify-between">
        {/* Left: Hamburger (mobile) + Brand */}
        <div className="flex items-center gap-4">
          {/* <button className="lg:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <Menu className="w-6 h-6 text-white" />
          </button> */}
          <span className="text-white font-bold text-lg">🎮 GameZone</span>
        </div>

        {/* Right: Message + Avatar */}
        <div className="flex items-center gap-4">
          <MessageSquare className="w-5 h-5 text-white cursor-pointer" />
          <Avatar className="h-8 w-8 border border-white">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-blue-600 text-white text-sm">JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      {/* Bottom nav: visible on mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#A0A0A0] px-4 py-3 z-40 shadow-lg lg:hidden">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.href)}
                className={cn(
                  "relative flex flex-col items-center gap-0.5 transition-all duration-300 px-2 py-1.5 rounded-md text-xs",
                  isActive
                    ? "text-white bg-white/10 shadow shadow-white/20"
                    : "text-[#0a3d62] hover:text-white/80"
                )}
              >
                {isActive && (
                  <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                )}
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Sidebar nav: visible on desktop only */}
<aside className="hidden lg:flex flex-col w-64 bg-[#A0A0A0] py-6 px-4 fixed left-0 top-0 bottom-0 z-40 pt-[80px]">
  <div className="flex flex-col gap-6 items-start mt-4">
    {navigationItems.map((item) => {
      const Icon = item.icon;
      const isActive = activeTab === item.id;

      return (
        <button
          key={item.id}
          onClick={() => router.push(item.href)}
          className={cn(
            "relative flex items-center text-sm gap-3 w-full px-4 py-2 rounded-md transition-all",
            isActive
              ? "text-white bg-white/10 shadow shadow-white/20"
              : "text-[#0a3d62] hover:text-white/80"
          )}
        >
          <Icon className="w-5 h-5" />
          <span>{item.label}</span>
        </button>
      );
    })}
  </div>
</aside>


      {/* Optional: slide-in mobile menu (future enhancement) */}
      {/* You can use `mobileNavOpen` state to show a side drawer/modal if needed */}
    </>
  );
}
