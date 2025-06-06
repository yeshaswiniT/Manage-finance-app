"use client"

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
    <nav className="fixed bottom-0 left-0 right-0 bg-[#38ada9] px-6 py-4 z-50 shadow-lg">
      <div className="flex justify-around items-center relative">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id

          return (
            <button
              key={item.id}
              onClick={() => router.push(item.href)}
              className={cn(
                "relative flex flex-col items-center gap-1 transition-all duration-300 ease-out px-3 py-2 rounded-xl",
                isActive
                  ? "text-white scale-105 bg-white/10 shadow-md shadow-white/20"
                  : "text-0a3d62 hover:text-white/80"
              )}
            >
              {/* Dot indicator */}
              {isActive && (
                <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
              <Icon className="w-6 h-6" />
              <span className="text-xs">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
