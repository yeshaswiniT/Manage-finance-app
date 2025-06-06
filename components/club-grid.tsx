import ClubCard from "./club-card"

interface Club {
  id: number
  name: string
  code: string
  members: number
  nextGame: string
  logo: string
  userRole: "creator" | "member"
  createdAt?: string
  joinedAt?: string
}

interface ClubGridProps {
  clubs: Club[]
}




export default function ClubGrid({ clubs }: ClubGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  )
}

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4
