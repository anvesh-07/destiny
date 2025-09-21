import { MapPin } from "lucide-react"

export const DestinyAppPreview = () => {
  return (
    <div className="relative space-y-3 rounded-[1rem] bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-1.5 text-[#14B8A6]">
        <MapPin className="size-5" />
        <div className="text-sm font-medium text-white">AI Trip Planner</div>
      </div>
      <div className="space-y-3">
        <div className="text-white border-b border-white/20 pb-3 text-sm font-medium">
          Your personalized Paris itinerary is ready!
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-white align-baseline text-xl font-medium">Day 1</span>
              <span className="text-white/70 text-xs">Eiffel Tower & Champs-Élysées</span>
            </div>
            <div className="flex h-5 items-center rounded bg-gradient-to-l from-[#6D28D9] to-[#2563EB] px-2 text-xs text-white">
              Cultural Experience
            </div>
          </div>
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-white align-baseline text-xl font-medium">Day 2</span>
              <span className="text-white/70 text-xs">Louvre & Seine River</span>
            </div>
            <div className="text-white bg-white/20 flex h-5 w-2/3 items-center rounded px-2 text-xs">Art & History</div>
          </div>
        </div>
      </div>
    </div>
  )
}