"use client";

import { MessageSquare, Plus, UserPlus } from "lucide-react"
import ClubGrid from "@/components/club-grid"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import BottomNavigation from "@/components/bottom-navigation"
import Link from "next/link"
import { useState, useEffect } from "react"

// Optional: Skeleton UI component
function SkeletonClubGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-40 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"
        />
      ))}
    </div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [userClubs, setUserClubs] = useState([])

  // Simulate loading
  useEffect(() => {
    setTimeout(() => {
      setUserClubs([
        {
          id: 1,
          name: "Royal Flush Club",
          code: "RFC123",
          members: 24,
          nextGame: "Tomorrow, 8 PM",
          logo: "/placeholder.svg?height=80&width=80",
          userRole: "creator",
          createdAt: "2024-01-15",
          pendingRequests: 3,
        },
        {
          id: 2,
          name: "Aces High",
          code: "ACE456",
          members: 18,
          nextGame: "Friday, 9 PM",
          logo: "/placeholder.svg?height=80&width=80",
          userRole: "member",
          joinedAt: "2024-02-10",
          pendingRequests: 0,
        },
        {
          id: 3,
          name: "Full House",
          code: "FH789",
          members: 32,
          nextGame: "Saturday, 7 PM",
          logo: "/placeholder.svg?height=80&width=80",
          userRole: "creator",
          createdAt: "2024-01-20",
          pendingRequests: 1,
        },
        {
          id: 4,
          name: "Poker Kings",
          code: "PK101",
          members: 15,
          nextGame: "Sunday, 6 PM",
          logo: "/placeholder.svg?height=80&width=80",
          userRole: "member",
          joinedAt: "2024-03-05",
          pendingRequests: 0,
        },
      ])
      setIsLoading(false)
    }, 1500) // Simulate 1.5s fetch time
  }, [])

  return (
  //  <main className="min-h-screen bg-[#0a3d62] dark:bg-[#2E8B87] pt-0 mt-0 pb-16">
  <main
  className="min-h-screen pt-0 mt-0 pb-16 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/backgrounds/app-bg.jpg')", // ✅ Replace with your actual path
    backgroundColor: "#0a3d62" // fallback background color
  }}
>
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-start dark:bg-gray-900 px-6 pt-6 pb-4">
        <button className="absolute top-6 right-6 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <MessageSquare className="h-6 w-6 text-gray-600 dark:text-gray-300 relative z-10 transition-transform group-hover:scale-110" />
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium shadow-lg animate-pulse">
            3
          </span>
        </button>

        <div className="relative mb-4">
          <Avatar className="h-24 w-24 border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-lg ring-2 ring-white/50 dark:ring-gray-800/50">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>
        </div>

        <h1 className="text-2xl font-bold text-white dark:text-white mb-6">Welcome Jack</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
          <Button
className="flex-1 bg-[#38ADA9] hover:bg-[#2e938f] text-white shadow-md shadow-[#38ADA9]/30 hover:shadow-lg hover:shadow-[#2e938f]/40 transition-all duration-300 transform hover:-translate-y-0.5 border-0 h-12"
asChild
          >
            <Link href="/create-club">
              <Plus className="h-5 w-5 mr-2" />
              <span className="font-semibold">Create Club</span>
            </Link>
          </Button>

          <Button
            variant="outline"
            className="flex-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 h-12"
            asChild
          >
            <Link href="/join-club">
              <UserPlus className="h-5 w-5 mr-2" />
              <span className="font-semibold">Join Club</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Club Grid Section */}
      <div className="container mx-auto px-4 pt-6 pb-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white text-center">My Clubs</h2>

          {isLoading ? (
            <SkeletonClubGrid />
          ) : userClubs.length > 0 ? (
            <ClubGrid clubs={userClubs} />
          ) : (
            <div className="text-center py-16">
              <div className="relative mx-auto mb-8">
                <div className="h-32 w-32 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center shadow-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-400 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
                No Clubs Yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-md mx-auto leading-relaxed">
                Create your first poker club or join an existing one to start your poker journey.
              </p>
            </div>
          )}
        </div>
        <BottomNavigation />
      </div>
    </main>
  )
}
