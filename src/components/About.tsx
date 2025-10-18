import { CheckCircle } from "lucide-react"
import signageImage from "../assets/595571cf0be36af888126a6363a0c7f8c80195a8.png"

const benefits = [
  "Focus on your core business while we handle operations",
  "Experienced team with deep industry knowledge",
  "Comprehensive solutions under one roof",
  "Dedicated support throughout your business journey",
  "Proven track record with corporate clients",
  "Streamlined processes for maximum efficiency"
]

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadein">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6 tracking-tight drop-shadow-sm">
              Why Choose Herald Business Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              At Herald Business Solutions, we understand that running a business requires focus on what matters most - growing your enterprise and achieving profitability. That's why we've created a comprehensive suite of services to handle all your operational needs.
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 hover:shadow-md transition-all duration-300 animate-slideup" style={{ animationDelay: `${index * 50}ms` }}>
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl shadow-2xl border-2 border-slate-600">
              <p className="text-white text-lg italic leading-relaxed">
                "Your success is our mission. We're here to make business operations seamless so you can focus on what you do best."
              </p>
            </div>
          </div>
          
          <div className="relative animate-fadein" style={{ animationDelay: '200ms' }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-xl transition-all duration-500">
              <img
                src={signageImage}
                alt="Herald Business Solutions - Business Advisory & Secretarial Services"
                className="w-full h-auto object-contain brightness-105 contrast-110 transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="mt-8 bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl shadow-2xl border-2 border-slate-200">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">500+</div>
                  <div className="text-sm font-semibold text-blue-800">Clients Served</div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
                  <div className="text-4xl font-extrabold text-green-600 mb-2">10+</div>
                  <div className="text-sm font-semibold text-green-800">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
