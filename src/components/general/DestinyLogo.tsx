import { cn } from "@/lib/utils"
import { Globe } from "lucide-react"

export const DestinyLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div className="w-8 h-8 bg-gradient-to-br from-[#6D28D9] to-[#2563EB] rounded-lg flex items-center justify-center">
        <Globe className="h-5 w-5 text-white" />
      </div>
      <span className="text-xl font-bold text-white">Destiny</span>
    </div>
  )
}
