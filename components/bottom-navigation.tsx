"use client";

import { usePathname, useRouter } from "next/navigation"
import { Users, Gamepad2, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

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
]

interface BottomNavigationProps {
  defaultActive?: string
}

export default function BottomNavigation({ defaultActive = "clubs" }: BottomNavigationProps) {
  const router = useRouter()
  const pathname = usePathname()

  const getActiveTab = () => {
    if (pathname === "/") return "clubs"
    if (pathname.includes("/games")) return "games"
    if (pathname.includes("/transactions")) return "transactions"
    return defaultActive
  }

  const activeTab = getActiveTab()

  return (
    <>
      {/* Bottom nav: visible on mobile/tablet only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#A9A9A9] px-4 py-3 z-50 shadow-lg lg:hidden">
        <div className="flex justify-around items-center">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

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
            )
          })}
        </div>
      </nav>

      {/* Sidebar nav: visible on desktop only */}
      <aside className="hidden lg:flex flex-col w-20 bg-[#A9A9A9] py-6 px-2 fixed left-0 top-0 bottom-0 z-40">
        <div className="flex flex-col gap-6 items-center">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id

            return (
              <button
                key={item.id}
                onClick={() => router.push(item.href)}
                className={cn(
                  "relative flex flex-col items-center text-xs gap-1 transition-all px-2 py-2 rounded-md",
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
            )
          })}
        </div>
      </aside>
    </>
  )
};