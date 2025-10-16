import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { 
  Building2, 
  Users, 
  FileText, 
  Stamp, 
  MapPin
} from "lucide-react"

const services = [
  {
    id: 1,
    title: "Company/Business Registration",
    description: "We assist with the initial registration or incorporation of your business to ensure legal compliance and proper establishment.",
    icon: Building2,
    color: "bg-slate-500/10 text-slate-600",
    features: [
      "Business Due Diligence", 
      "Company Registration:", 
      "Sole Proprietorship, Partnership and Limited Liability Companies", 
      "Tax Registration Business Permits and Licenses", 
      "Legal Compliance"
    ]
  },
  {
    id: 2,
    title: "Company Secretarial Services",
    description: "We schedule and plan board and shareholder meetings, record minutes of meetings, keep records of business information, file annual returns, and provide administrative support.",
    icon: FileText,
    color: "bg-slate-500/10 text-slate-600",
    features: ["Shareholder and Board Meeting", "Legal Compliance"]
  },
  {
    id: 3,
    title: "Notary Services",
    description: "We prepare, attest and authenticate your legal documents with our certified notary services.",
    icon: Stamp,
    color: "bg-slate-500/10 text-slate-600",
    features: [
      "Document Authentication",
      "Legal Attestation",
      "Certification Services",
      "Sworn Affidavits"
    ]
  },
  {
    id: 4,
    title: "Land Documentation",
    description: "We provide comprehensive land documentation services to help you secure and manage your property transactions.",
    icon: MapPin,
    color: "bg-slate-500/10 text-slate-600",
    features: [
      "Preparation of Land Instruments", 
      "Conduct of Land Due Diligence", 
      "Land Registration"
    ]
  },
  {
    id: 5,
    title: "Recruitment",
    description: "We listen to you and assist you to find the right staffing or workforce for your operations with strategic planning.",
    icon: Users,
    color: "bg-slate-500/10 text-slate-600",
    features: [
      "Staffing Services", 
      "Employee Training and Development"
    ]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-slate-800 mb-4">
            How We Assist Your Business
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our comprehensive suite of services is designed to support your business at every stage of growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border hover:border-slate-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-slate-800">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                {service.features.length > 0 && (
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
