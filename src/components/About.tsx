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
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">
              Why Choose Herald Business Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Herald Business Solutions, we understand that running a business requires focus on what matters most - growing your enterprise and achieving profitability. That's why we've created a comprehensive suite of services to handle all your operational needs.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-6 rounded-xl border">
              <p className="text-foreground italic">
                "Your success is our mission. We're here to make business operations seamless so you can focus on what you do best."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={signageImage}
                alt="Herald Business Solutions - Business Advisory & Secretarial Services"
                className="w-full h-auto object-contain brightness-105 contrast-110"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="mt-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <div className="text-2xl text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}