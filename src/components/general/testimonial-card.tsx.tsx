import { cn } from "@/lib/utils"
import { MapPin } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  location: string
  icon: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-[#1a1a1a]/80 to-[#1a1a1a]/40",
        "backdrop-blur-lg border border-[#E5E5E5]/20",
        "p-4 text-start sm:p-6",
        "hover:from-[#1a1a1a]/90 hover:to-[#1a1a1a]/60",
        "hover:border-[#8B5CF6]/50",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] rounded-full flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-[#E5E5E5]">{author.name}</h3>
          <p className="text-sm text-[#E5E5E5]/70">{author.location}</p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-[#E5E5E5]/80">{text}</p>
    </Card>
  )
}
