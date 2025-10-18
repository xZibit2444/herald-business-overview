import { Button } from "./ui/button"
import officeImage from "../assets/1b4ba5f1f3d9aab2e17854568d56ef1b99bea554.png"

export function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={officeImage}
                alt="Herald Business Solutions - Professional Office Space"
                className="w-full h-auto object-cover brightness-105 contrast-110"
              />
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl text-primary mb-6">
              Your One Stop Shop for Corporate Needs
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We provide a concierge of services to ease your operations whilst you concentrate on your core mandate of building your business and becoming profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <a href="#contact">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
