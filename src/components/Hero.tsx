import { Button } from "./ui/button"
import officeImage from "../assets/1b4ba5f1f3d9aab2e17854568d56ef1b99bea554.png"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="space-y-12">
          <div className="relative max-w-3xl mx-auto animate-fadeinslow">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white hover:shadow-xl transition-all duration-500">
              <img
                src={officeImage}
                alt="Herald Business Solutions - Professional Office Space"
                className="w-full h-auto object-cover brightness-105 contrast-110 transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="text-center max-w-4xl mx-auto animate-slideup">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary mb-6 tracking-tight drop-shadow-sm">
              Your One Stop Shop for Corporate Needs
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              We provide a concierge of services to ease your operations whilst you concentrate on your core mandate of building your business and becoming profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" asChild>
                <a href="#services">Explore Our Services</a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105" asChild>
                <a href="#contact">Contact Us Today</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
