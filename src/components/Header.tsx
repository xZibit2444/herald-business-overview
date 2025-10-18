import { Button } from "./ui/button"
import { MessageCircle } from "lucide-react"
import logo from "../assets/5ed064860b964ee72f1f40b6959bdd6441edd366.png"

export function Header() {
  return (
    <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Herald Business Solutions" className="h-16 w-auto transition-transform hover:scale-105 duration-300" />
            <h1 className="text-2xl font-extrabold text-foreground tracking-tight">
              HERALD BUSINESS SOLUTIONS
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary font-semibold transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
              SERVICES
            </a>
            <a href="#about" className="text-foreground hover:text-primary font-semibold transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
              ABOUT
            </a>
            <a href="#contact" className="text-foreground hover:text-primary font-semibold transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
              CONTACT
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button 
              className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 py-5 text-base font-semibold" 
              asChild
            >
              <a href="https://wa.me/233509505834" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
