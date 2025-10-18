import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from "lucide-react"
import { useRef } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["(0) 509505834", "(0) 302736738"],
    color: "text-muted-foreground"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@heraldbusiness.org"],
    color: "text-muted-foreground"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Tse Addo 3A Flamboyant Street", "East La, Accra - Ghana"],
    color: "text-muted-foreground"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat - Sun: Closed"],
    color: "text-muted-foreground"
  }
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  function handleMailto(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    
    if (!formRef.current) return
    
    const form = formRef.current
    const firstName = (form.querySelector('#firstName') as HTMLInputElement)?.value || ''
    const lastName = (form.querySelector('#lastName') as HTMLInputElement)?.value || ''
    const email = (form.querySelector('#email') as HTMLInputElement)?.value || ''
    const company = (form.querySelector('#company') as HTMLInputElement)?.value || ''
    const service = (form.querySelector('#service') as HTMLSelectElement)?.value || ''
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || ''

    const subject = `Contact Form - ${service || 'General Inquiry'}`
    const body = `Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Service: ${service}

Message:
${message}`

    const mailtoUrl = `mailto:info@heraldbusiness.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/60 to-white animate-fadein">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-foreground mb-4 tracking-tight drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your business operations? Contact us today for a consultation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-8 border border-muted/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1498729277079-9aa24f85d92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwcGVucyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYwNTMyODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office desk with pens and pencils"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {contactInfo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 shadow">
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1 font-semibold">{item.title}</h3>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-2xl border border-muted/30 bg-white/80 backdrop-blur-md animate-fadein">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-8" ref={formRef}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="mt-2 focus:ring-2 focus:ring-primary/40 transition-all duration-200" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-2 focus:ring-2 focus:ring-primary/40 transition-all duration-200" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@company.com" className="mt-2 focus:ring-2 focus:ring-primary/40 transition-all duration-200" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" className="mt-2 focus:ring-2 focus:ring-primary/40 transition-all duration-200" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select id="service" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-input-background focus:ring-2 focus:ring-primary/40 transition-all duration-200">
                      <option value="">Select a service</option>
                      <option value="registration">Company/Business Registration</option>
                      <option value="secretarial">Company Secretarial Services</option>
                      <option value="notary">Notary Services</option>
                      <option value="land">Land Documentation</option>
                      <option value="recruitment">Recruitment</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business needs..."
                      className="mt-2 min-h-[120px] focus:ring-2 focus:ring-primary/40 transition-all duration-200 rounded-lg" />
                  </div>

                  <div className="flex flex-col gap-3 mt-6">
                    <Button type="button" size="lg" className="w-full md:w-auto bg-primary text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-200" asChild>
                      <a href="#" onClick={handleMailto}>
                        <Send className="w-4 h-4 mr-2 animate-bounce-slow" />
                        Send Message
                      </a>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
