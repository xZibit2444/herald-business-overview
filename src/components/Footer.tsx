import { Separator } from "./ui/separator"
import { 
  Building2, 
  Users, 
  FileText, 
  Stamp, 
  Calendar, 
  Truck,
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
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl text-white mb-4">
              HERALD BUSINESS SOLUTIONS
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Your one stop shop for corporate needs. We provide comprehensive business services to help you focus on growth and profitability.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(0) 509505834</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(0) 302736738</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@heraldbusiness.org</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Tse Addo 3A Flamboyant Street, East La, Accra</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <li key={index}>
                    <a href="#services" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={
                      link === "Our Services" ? "#services" : 
                      link === "Latest News" ? "#news" : 
                      "#"
                    } 
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-white mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-slate-800 rounded-lg">
              <p className="text-sm text-slate-300">
                Need urgent assistance? Contact us for emergency services available 24/7.
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2025 Herald Business Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}