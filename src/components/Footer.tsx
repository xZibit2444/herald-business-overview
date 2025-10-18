import { Separator } from "./ui/separator"
import { 
  Building2, 
  Users, 
  FileText, 
  Stamp, 
  Mail,
  Phone,
  MapPin
} from "lucide-react"

const services = [
  { name: "Business Registration", icon: Building2 },
  { name: "Company Secretarial", icon: FileText },
  { name: "Workforce Recruitment", icon: Users },
  { name: "Notary Services", icon: Stamp },
]

const quickLinks = [
  "About Us",
  "Our Services",
  "Latest News",
  "Contact",
  "Privacy Policy",
  "Terms of Service"
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
              HERALD BUSINESS SOLUTIONS
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Your one stop shop for corporate needs. We provide comprehensive business services to help you focus on growth and profitability.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(0) 509505834</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="text-sm">(0) 302736738</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@heraldbusiness.org</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Tse Addo 3A Flamboyant Street, East La, Accra</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <li key={index}>
                    <a href="#services" className="flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-200 group">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{service.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={
                      link === "Our Services" ? "#services" : 
                      link === "Latest News" ? "#news" : 
                      "#"
                    } 
                    className="text-slate-300 hover:text-white transition-all duration-200 text-sm font-medium block hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Business Hours</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-white font-semibold">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                <span className="font-medium">Saturday - Sunday</span>
                <span className="text-white font-semibold">Closed</span>
              </div>
            </div>
            
            <div className="mt-6 p-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
              <p className="text-sm text-white font-medium leading-relaxed">
                Need urgent assistance? Contact us for emergency services available 24/7.
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm font-medium">
            © 2025 Herald Business Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
