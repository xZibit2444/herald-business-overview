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
import { useState } from "react"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    try {
      // Using Web3Forms - a free service that sends emails directly
      // Get your free access key from web3forms.com and add it to .env.local
      const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY || 'c8c7f4f1-5d4a-4f3e-9b2c-8a7e6f5d4c3b'
      
      formData.append('access_key', accessKey)
      formData.append('subject', `Contact Form - ${formData.get('service') || 'General Inquiry'}`)
      formData.append('from_name', `${formData.get('firstName')} ${formData.get('lastName')}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      
      // Fallback to mailto if web service fails
      const firstName = formData.get('firstName') as string
      const lastName = formData.get('lastName') as string  
      const email = formData.get('email') as string
      const company = formData.get('company') as string
      const service = formData.get('service') as string
      const message = formData.get('message') as string

      const subject = `Contact Form - ${service || 'General Inquiry'}`
      const body = `Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Service: ${service || 'General Inquiry'}

Message:
${message}`

      const mailtoUrl = `mailto:info@heraldbusiness.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailtoUrl
      
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your business operations? Contact us today for a consultation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1498729277079-9aa24f85d92d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwcGVucyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYwNTMyODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Office desk with pens and pencils"
                className="w-full h-full object-cover"
              />
            </div>
            
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-foreground mb-1">{item.title}</h3>
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
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form 
                  className="space-y-6" 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        placeholder="John" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        placeholder="Doe" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input 
                        id="company" 
                        name="company" 
                        placeholder="Your Company" 
                        className="mt-1" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select 
                      id="service" 
                      name="service" 
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-input-background"
                    >
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
                      name="message"
                      placeholder="Tell us about your business needs..."
                      className="mt-1 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto" 
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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
