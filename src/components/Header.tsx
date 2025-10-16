import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"
import logo from "figma:asset/5ed064860b964ee72f1f40b6959bdd6441edd366.png"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Herald Business Solutions" className="h-14 w-auto" />
            <h1 className="text-2xl font-bold text-foreground">
              HERALD BUSINESS SOLUTIONS
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-muted-foreground transition-colors">
              SERVICES
            </a>
            <a href="#about" className="text-foreground hover:text-muted-foreground transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-foreground hover:text-muted-foreground transition-colors">
              CONTACT
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button 
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700" 
              asChild
            >
              <a href="https://wa.me/233509505834" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}