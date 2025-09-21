import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"


export const Footer = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Destiny</h3>
            <p className="text-white/70 mb-4">AI-Powered Travel, Simplified.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-[#14B8A6] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-[#14B8A6] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-[#14B8A6] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-[#14B8A6] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Social Media</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-[#14B8A6]">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-[#14B8A6]">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-[#14B8A6]">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center text-white/70">
          <p>&copy; 2025 Destiny. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}